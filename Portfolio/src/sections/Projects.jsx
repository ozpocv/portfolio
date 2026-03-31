const projects = [
  {
    title: 'Portfolio',
    desc: '..',
    tags: ['React', 'CSS'],
  },
  {
    title: 'WeatherTime',
    desc: '..',
    tags: ['JavaScript', 'API'],
  },
  {
    title: 'Hackathon',
    desc: '..',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">
        Mes <span className="accent">Projets</span>
      </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-img">{'</>'}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}