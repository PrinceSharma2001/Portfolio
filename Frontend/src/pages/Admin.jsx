import { useState } from 'react'
import Hero from '../components/Hero.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

/**
 * Developer-only page — not linked in the Navbar/Footer.
 * Fetches submitted "Get in touch" messages from the backend.
 * Requires the ADMIN_KEY set in backend/.env.
 */
export default function Admin() {
  const [key, setKey] = useState('')
  const [messages, setMessages] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchMessages = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessages(null)
    try {
      const res = await fetch(`${API_URL}/api/messages`, {
        headers: { 'x-admin-key': key },
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch messages.')
      }
      setMessages(data.data)
    } catch (err) {
      setError(err.message || 'Could not reach the backend API.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Hero
        eyebrow="Developer Only"
        title="Inbox"
        subtitle="View messages submitted through the Get in touch form."
      />

      <section className="section-pad">
        <form
          onSubmit={fetchMessages}
          className="flex flex-col sm:flex-row gap-3 max-w-md mb-10"
        >
          <input
            type="password"
            required
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin key"
            className="flex-1 bg-ink-800 border border-ink-600 rounded-md px-4 py-3 text-parchment placeholder:text-parchment-dim/50 focus:outline-none focus:border-amber transition-colors"
          />
          <button type="submit" className="px-6 py-3 btn-gradient rounded-md whitespace-nowrap">
            {loading ? 'Loading…' : 'View messages'}
          </button>
        </form>

        {error && (
          <p className="text-sm text-red-400 mb-6 font-mono">{error}</p>
        )}

        {messages && (
          <div className="space-y-4">
            <p className="font-mono text-sm text-teal">
              {messages.length} message{messages.length !== 1 ? 's' : ''}
            </p>
            {messages.length === 0 && (
              <p className="text-parchment-dim">No messages yet.</p>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className="border border-ink-600 rounded-xl p-5 bg-ink-700/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <p className="font-display text-lg text-parchment">{m.name}</p>
                  <span className="font-mono text-xs text-parchment-dim">
                    {new Date(m.created_at).toLocaleString()}
                  </span>
                </div>
                <p className="font-mono text-xs text-amber mb-3">{m.email}</p>
                <p className="text-parchment-dim leading-relaxed whitespace-pre-wrap">
                  {m.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
