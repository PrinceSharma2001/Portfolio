import { Link } from 'react-router-dom'
import Prince from '../assets/Prince.png'

/**
 * Shared Hero component — used on every page.
 * variant="full"    -> big animated hero (Home page)
 * variant="compact" -> page-header style hero (About, Education, Projects, Contact)
 */
export default function Hero({
  variant = 'compact',
  eyebrow,
  title,
  subtitle,
}) {
  if (variant === 'full') {
    return (
      <section className="relative overflow-hidden bg-grid-glow border-b border-ink-600">
        {/* decorative dotted grid */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-dots" />

        <div className="relative section-pad grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="animate-fadeUp">
            {/* terminal style status strip */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-teal border border-ink-600 rounded-full px-3 py-1.5 mb-8 bg-ink-700/60">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              currently open to opportunities
            </div>

            <p className="eyebrow mb-4">{eyebrow || ' Developer & Data Analyst'}</p>

            <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-parchment">
              Prince Sharma
              <span className="block text-gradient italic font-medium text-3xl sm:text-4xl lg:text-5xl mt-3">
                builds interfaces people trust.
              </span>
            </h1>

            <p className="mt-6 text-parchment-dim text-lg max-w-xl leading-relaxed">
              {subtitle ||
                'I design and build clean, fast, accessible web experiences — from first sketch to shipped product. Currently crafting things with React, and a strong cup of chai.'}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 btn-gradient rounded-md"
              >
                View my work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-ink-600 text-parchment font-semibold rounded-md hover:border-teal hover:text-teal transition-colors"
              >
                Get in touch
              </Link>
              <a
                href="/Prince_Sharma_CV.pdf"
                download
                className="px-6 py-3 border border-ink-600 text-parchment font-semibold rounded-md hover:border-amber hover:text-amber transition-colors inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>

            <div className="mt-14 flex items-center gap-8 font-mono text-xs text-parchment-dim uppercase tracking-widest">
              <span>React</span>
              <span className="w-1 h-1 rounded-full bg-ink-600" />
              <span>Tailwind</span>
              <span className="w-1 h-1 rounded-full bg-ink-600" />
              <span>Node</span>
            </div>
          </div>

          {/* avatar / illustration */}
          <div className="relative flex justify-center md:justify-end animate-fadeUp [animation-delay:0.15s]">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber/20 to-teal/20 blur-2xl" />
              <div className="relative w-full h-full rounded-[2rem] bg-ink-700 border border-ink-600 overflow-hidden shadow-2xl">
                <img
                  src={Prince}
                  alt="Prince Sharma"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 bg-ink-900 border border-ink-600 rounded-lg px-4 py-2 font-mono text-xs text-teal shadow-lg">
                {'<Hello World />'}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // compact page-header variant
  return (
    <section className="relative border-b border-ink-600 bg-grid-glow overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-dots" />
      <div className="relative section-pad !py-16 md:!py-20">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl text-parchment">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-parchment-dim max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="divider mt-6" />
      </div>
    </section>
  )
}
