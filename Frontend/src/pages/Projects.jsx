import Hero from '../components/Hero.jsx'

const projects = [
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

export default function Projects() {
  return (
    <div>
      <Hero
        eyebrow="My Work"
        title="Projects"
        subtitle="A collection of things I've built — from small experiments to complete apps."
      />

      <section className="section-pad">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group border border-ink-600 rounded-xl overflow-hidden bg-ink-700/40 hover:-translate-y-1 hover:border-teal transition-all flex flex-col"
            >
              <div className="h-36 bg-ink-600/60 flex items-center justify-center font-mono text-xs text-parchment-dim">
                project preview
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-amber">
                    0{i + 1}
                  </span>
                  <span className="font-mono text-[11px] text-teal">
                    {p.tag}
                  </span>
                </div>
                <p className="font-display text-lg text-parchment">
                  {p.title}
                </p>
                <p className="text-sm text-parchment-dim mt-2 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <button className="mt-4 text-sm font-mono text-parchment-dim group-hover:text-amber transition-colors text-left">
                  View details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
