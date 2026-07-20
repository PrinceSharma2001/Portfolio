import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact Us' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://twitter.com' },
    { label: 'Gmail', href: 'https://gmail.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-600 bg-ink-900">
      <div className="section-pad !py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl font-semibold text-parchment">
            Prince <span className="text-amber">Sharma.</span>
          </p>
          <p className="mt-3 text-parchment-dim text-sm max-w-xs leading-relaxed">
          "I don't just write code—I build solutions that make a difference."
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-parchment-dim hover:text-amber transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <ul className="space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-parchment-dim hover:text-teal transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="text-parchment-dim">1619princesharma@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-600 section-pad !py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-parchment-dim font-mono">
        <span className='text-amber'>© {new Date().getFullYear()} Prince Sharma. All rights reserved.</span>

      </div>
    </footer>
  )
}
