import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  // on first load: use saved preference, else system preference, else dark
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial =
      saved ||
      (window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark')
    setTheme(initial)
    document.documentElement.classList.toggle('light', initial === 'light')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.classList.toggle('light', next === 'light')
    localStorage.setItem('theme', next)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ink-800/85 border-b border-ink-600">
      <nav className="section-pad !py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="font-display text-xl font-semibold text-parchment tracking-wide"
          onClick={() => setOpen(false)}
        >
          PORT<span className="text-amber">FOLIO.</span>
        </NavLink>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-2 font-mono text-sm">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-night bg-gradient-to-r from-amber to-teal'
                      : 'text-parchment-dim hover:text-parchment'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* right side controls */}
        <div className="flex items-center gap-3">
          <a
            href="/Prince_Sharma_CV.pdf"
            download
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 btn-gradient rounded-md text-sm"
          >
            Resume
          </a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} className="hidden md:flex" />

          {/* mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-parchment w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-parchment transition-transform ${
                open ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-parchment transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-parchment transition-transform ${
                open ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 font-mono text-sm">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md transition-colors ${
                    isActive
                      ? 'text-night bg-gradient-to-r from-amber to-teal'
                      : 'text-parchment-dim hover:text-parchment hover:bg-ink-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="px-4 pt-3">
            <a
              href="/Prince_Sharma_Resume.pdf"
              download
              className="block text-center py-3 btn-gradient rounded-md"
            >
              Download Resume
            </a>
          </li>
          <li className="flex items-center justify-between px-4 pt-3 mt-2 border-t border-ink-600">
            <span className="text-parchment-dim">Theme</span>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </li>
        </ul>
      </div>
    </header>
  )
}
