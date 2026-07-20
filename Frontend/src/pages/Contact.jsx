import { useState } from 'react'
import Hero from '../components/Hero.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }
      setStatus('success')
    } catch (err) {
      setError(err.message || 'Could not reach the server. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      <Hero
        eyebrow="Let's Talk"
        title="Contact Us"
        subtitle="Have a question, project idea, or just want to say hi? Send a message below."
      />

      <section className="section-pad grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-2xl text-parchment mb-4">
            Get in touch
          </h2>
          <p className="text-parchment-dim leading-relaxed max-w-md">
            I usually reply within a day or two. For quick questions,
            email works best; for project inquiries, use the form.
          </p>

          <ul className="mt-8 space-y-4 font-mono text-sm">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber" />
              <span className="text-parchment-dim">1619princesharma@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span className="text-parchment-dim">+91 9315024140</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-parchment-dim" />
              <span className="text-parchment-dim">Gorakhpur, India</span>
            </li>
          </ul>
        </div>

        <div className="border border-ink-600 rounded-2xl p-6 sm:p-8 bg-ink-700/40">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <p className="font-display text-2xl text-parchment mb-2">
                Message sent
              </p>
              <p className="text-parchment-dim text-sm max-w-xs">
                Thanks for reaching out — I'll get back to you soon.
              </p>
              <button
                onClick={() => {
                  setForm({ name: '', email: '', message: '' })
                  setStatus('idle')
                }}
                className="mt-6 font-mono text-sm text-teal hover:text-amber transition-colors"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-xs text-parchment-dim mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-ink-800 border border-ink-600 rounded-md px-4 py-3 text-parchment placeholder:text-parchment-dim/50 focus:outline-none focus:border-amber transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-parchment-dim mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-ink-800 border border-ink-600 rounded-md px-4 py-3 text-parchment placeholder:text-parchment-dim/50 focus:outline-none focus:border-amber transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-parchment-dim mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-ink-800 border border-ink-600 rounded-md px-4 py-3 text-parchment placeholder:text-parchment-dim/50 focus:outline-none focus:border-amber transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400 font-mono">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 btn-gradient rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
