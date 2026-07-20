import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'

const skills = [
  { name: 'React', note: 'Component-driven UI' },
  { name: 'Tailwind CSS', note: 'Utility-first styling' },
  { name: 'JavaScript', note: 'ES6+, async patterns' },
  { name: 'Node.js', note: 'REST APIs & tooling' },
]

const featured = [
    {
    title: 'E-Commerce website',
    tag: 'React · API',
    desc: 'A responsive e-commerce web application that enables users to browse products, manage their cart, place orders, and enjoy a seamless shopping experience.',
  },
  {
    title: 'Audio Video Hand Gesture',
    tag: 'Python,open CV, mediapipe,computer vision ',
    desc: 'Developed a hand gesture recognition application that enables touch-free control of audio and video using a webcam.',
  }
]

export default function Home() {
  return (
    <div>
      <Hero variant='full' />

      {/* skills strip */}
      <section className="section-pad !py-16 border-b border-ink-600">
        <p className="eyebrow mb-8">What I work with</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div
              key={s.name}
              className="border border-ink-600 rounded-lg p-5 bg-ink-700/40 hover:border-amber transition-colors"
            >
              <p className="font-display text-lg text-parchment">{s.name}</p>
              <p className="text-sm text-parchment-dim mt-1">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* featured work preview */}
      <section className="section-pad">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="font-display text-3xl sm:text-4xl text-parchment">
              A few recent builds
            </h2>
          </div>
          <Link
            to="/projects"
            className="font-mono text-sm text-teal hover:text-amber transition-colors"
          >
            View all projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <div
              key={p.title}
              className="group border border-ink-600 rounded-xl overflow-hidden bg-ink-700/40 hover:-translate-y-1 hover:border-teal transition-all"
            >
              <div className="h-40 bg-ink-600/60 flex items-center justify-center font-mono text-xs text-parchment-dim">
                project preview
              </div>
              <div className="p-5">
                <p className="font-mono text-xs text-amber mb-2">
                  0{i + 1}
                </p>
                <p className="font-display text-lg text-parchment">
                  {p.title}
                </p>
                <p className="text-sm text-parchment-dim mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad !pt-0">
        <div className="rounded-2xl border border-ink-600 bg-gradient-to-br from-ink-700 to-ink-900 p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-parchment">
            Have a project in mind?
          </h2>
          <p className="text-parchment-dim mt-3 max-w-md mx-auto">
            I'm currently open to freelance work and full-time roles.
            Let's build something good together.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-8 px-7 py-3 btn-gradient rounded-md"
          >
            Say hello
          </Link>
        </div>
      </section>
    </div>
  )
}
