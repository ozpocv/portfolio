const projects = [
  {
    title: 'Portfolio',
    desc: 'Personal portfolio website built with React, showcasing my skills, projects, and contact information in a visually appealing and responsive design.',
    tags: ['React', 'CSS'],
    url: 'https://portfolio-dt94.vercel.app/',
  },
  {
    title: 'WeatherTime',
    desc: 'Interactive weather app built with JavaScript and API integration to provide live weather data and user-friendly search functionality.',
    tags: ['JavaScript', 'API'],
    url: 'https://weathertime-a6qo.onrender.com/index.html',
  },
  {
    title: 'Hackathon',
    desc: 'A collaborative project developed during a 24-hour hackathon, showcasing creative solutions to real-world problems.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    url: 'https://github.com/Tran-Ch/HACKATHON-MyGouvernement.be',
  },
]

export default function Projects() {
  const openProject = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">
        My <span className="accent">Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <button
            key={p.title}
            type="button"
            className="project-card"
            onClick={() => openProject(p.url)}
            aria-label={`Open ${p.title} project`}
          >
            <div className="project-img">{'</>'}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}