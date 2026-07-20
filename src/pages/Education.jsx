import Hero from "../components/Hero.jsx";

const timeline = [
  {
    year: "2023 — 2026",
    title: "B.Tech in Computer Science",
    place: "MAHARANA INSTITUTE OF PROFFESIONAL STUDIES",
    desc: "Focused on web technologies, data Analyst, and software engineering practices. Maintaining a strong academic record while building side projects.",
  },
  {
    year: "2020 — 2023",
    title: "Polytechnic Diploma ",
    place: "GOVERNMENT POLYTECHNIC MAWANA KHURD MEERUT",
    desc: "Completed an 3 yrs DIPLOMA  covering HTML, CSS, JavaScript, React, and backend fundamentals with Node.js.",
  },
  {
    year: "2019 — 2020",
    title: "Higher Secondary (PCM)",
    place: "SARASWATI VIDHYA MANDIR SR.SEC SCHOOL",
    desc: "Studied Physics, Chemistry, and Mathematics, building the analytical foundation for a career in engineering.",
  },
];

export default function Education() {
  return (
    <div>
      <Hero
        eyebrow="Background"
        title="Education"
        subtitle="A timeline of my academic journey and how it shaped my path into development."
      />

      <section className="section-pad">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-600 md:left-[7px]" />

          <ul className="space-y-12">
            {timeline.map((item) => (
              <li key={item.title} className="relative pl-10">
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-amber ring-4 ring-ink-800" />

                <p className="eyebrow mb-2">{item.year}</p>
                <h3 className="font-display text-2xl text-parchment">
                  {item.title}
                </h3>
                <p className="text-teal text-sm mt-1 font-mono">{item.place}</p>
                <p className="text-parchment-dim mt-3 leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
