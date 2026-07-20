import Hero from '../components/Hero.jsx'
import Prince from '../assets/Prince.png'

const values = [
  {
    title: 'Detail-first',
    desc: 'Pixels, spacing and states matter — I sweat the small stuff so users don\'t have to.',
  },
  {
    title: 'Clear communication',
    desc: 'I explain trade-offs in plain language, not jargon, to keep everyone aligned.',
  },
  {
    title: 'Ship, then refine',
    desc: 'I favor working software early, then iterate based on real feedback.',
  },
]

export default function About() {
  return (
    <div>
      <Hero
        eyebrow="About Me"
        title="The person behind the code"
        subtitle="A short introduction to who I am, how I work, and what drives me as a developer."
      />

      <section className="section-pad grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div className="rounded-2xl overflow-hidden border border-ink-600 bg-ink-700/40 aspect-[4/5] flex items-center justify-center">
          <img
                            src={Prince}
                            alt="Prince Sharma"
                            className="w-full h-full object-cover"
                          />
        </div>

        <div>
          <p className="text-parchment-dim leading-relaxed text-lg">
            Hi, I'm <span className="text-parchment font-medium">Prince</span> —

I'm a Software engineer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy working across both frontend and backend technologies to develop scalable and efficient solutions.

My technical skills include Java, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, HTML, CSS, Tailwind CSS, and Python. I also have experience with AI and machine learning projects, including image classification and computer vision applications.

I continuously improve my skills by building real-world projects, learning new technologies, and solving programming challenges. As a fresher, I am eager to contribute to innovative software development teams, gain industry experience, and create impactful digital products.
          </p>
          <p className="text-parchment-dim leading-relaxed text-lg mt-5">
            I care about the details that most people don't notice —
            load times, keyboard accessibility, and consistent spacing —
            because that's what makes a product feel trustworthy. Outside
            of code, I like sketching UI concepts and reading about
            design systems.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-ink-600 rounded-lg p-5 bg-ink-700/30"
              >
                <p className="font-display text-parchment text-base mb-2">
                  {v.title}
                </p>
                <p className="text-sm text-parchment-dim leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
