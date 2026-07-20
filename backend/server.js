import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pool, { ensureSchema } from './db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const ADMIN_KEY = process.env.ADMIN_KEY || 'change_this_secret_key'

app.use(cors())
app.use(express.json())

// simple email format check, no external deps needed
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

/**
 * POST /api/contact
 * Body: { name, email, message }
 * Called by the "Get in touch" form on the frontend. Stores the
 * submission in PostgreSQL.
 */
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'Name, email and message are all required.' })
    }
    if (!isValidEmail(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' })
    }

    const result = await pool.query(
      `INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)
       RETURNING id, name, email, message, created_at`,
      [name.trim(), email.trim(), message.trim()]
    )

    res.status(201).json({ success: true, data: result.rows[0] })
  } catch (err) {
    console.error('Error saving message:', err)
    res.status(500).json({ error: 'Something went wrong while saving your message.' })
  }
})

/**
 * GET /api/messages
 * Header required: x-admin-key: <ADMIN_KEY>
 * Lets the developer view all submitted "Get in touch" messages.
 * Not linked anywhere on the public site — used from /admin in the
 * frontend, or directly via curl/Postman.
 */
app.get('/api/messages', async (req, res) => {
  try {
    const key = req.header('x-admin-key')
    if (key !== ADMIN_KEY) {
      return res.status(401).json({ error: 'Unauthorized. Provide a valid x-admin-key header.' })
    }

    const result = await pool.query(
      `SELECT id, name, email, message, created_at FROM messages ORDER BY created_at DESC`
    )
    res.json({ success: true, count: result.rowCount, data: result.rows })
  } catch (err) {
    console.error('Error fetching messages:', err)
    res.status(500).json({ error: 'Something went wrong while fetching messages.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

ensureSchema()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend API running at http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Failed to connect to PostgreSQL / create schema:', err)
    process.exit(1)
  })
