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
  `relative px-4 py-2 transition-all duration-300 after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)] ${
    isActive
      ? 'text-indigo-600 font-semibold after:w-[calc(100%-2rem)]'
      : 'text-slate-600'
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
  className="hidden md:inline-block relative px-1 py-2 text-slate-700 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full hover:text-indigo-600"
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
  `relative block px-4 py-3 transition-all duration-300
  after:absolute after:left-4 after:bottom-2
  after:h-[2px] after:w-0
  after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-sky-500
  after:transition-all after:duration-300
  ${
    isActive
      ? 'text-indigo-600 font-semibold after:w-[calc(100%-2rem)]'
      : 'text-slate-600 hover:text-indigo-600 hover:after:w-[calc(100%-2rem)]'
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
    className="relative block text-center py-3 text-slate-600 hover:text-indigo-600 transition-all duration-300
    after:absolute after:left-4 after:right-4 after:bottom-2
    after:h-[2px] after:w-0
    after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-sky-500
    after:transition-all after:duration-300
    hover:after:w-[calc(100%-2rem)]"
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
