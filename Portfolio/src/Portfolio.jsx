import './Portfolio.css'
import { useState, useEffect, useRef } from 'react'
import { SkillsOrbit } from './SkillsOrbit'

import iconHtml from './assets/html-icon.svg'
import iconCss from './assets/css-icon.svg'
import iconJs from './assets/javascript-programming-language-icon.svg'
import iconReact from './assets/react-js-icon.svg'
import iconGit from './assets/git-icon.svg'
import iconFigma from './assets/figma-icon.svg'
import iconNode from './assets/node-js-icon.svg'
import iconGithub from './assets/github-icon.svg'
import iconPhotoshop from './assets/adobe-photoshop-icon.svg'
import iconIllustrator from './assets/adobe-illustrator-icon.svg'
import iconExpress from './assets/express-js-icon.svg'
import iconVisualStudio from './assets/visual-studio-code-icon.svg'

import cvPdf from './assets/docs/Cv-Zairaf-Omema-Dev.pdf'
import emailjs from '@emailjs/browser'

const TEXT = 'Junior web developer'

const skills = [
  { name: 'HTML',        icon: iconHtml },
  { name: 'CSS',         icon: iconCss },
  { name: 'JavaScript',  icon: iconJs },
  { name: 'React',       icon: iconReact },
  { name: 'Node.js',     icon: iconNode },
  { name: 'Git',         icon: iconGit },
  { name: 'GitHub',      icon: iconGithub },
  { name: 'Figma',       icon: iconFigma },
  { name: 'Photoshop',   icon: iconPhotoshop },
  { name: 'Illustrator', icon: iconIllustrator },
  { name: 'VS Code',     icon: iconVisualStudio },
  { name: 'Express.js',  icon: iconExpress },
]

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

export default function Portfolio() {
  const [typed, setTyped] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const formRef = useRef(null)

 useEffect(() => {
  const canvas = document.getElementById('code-rain');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = 'アイウエオカキクケコ0123456789ABCDEF{}[]<>/\\|=+-_';
  const fontSize = 13;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array.from({ length: columns }, () => Math.random() * -100);

  const draw = () => {
    ctx.fillStyle = 'rgba(10,10,10,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const y = drops[i] * fontSize;
      ctx.fillStyle = '#7fffff';
      ctx.font = `${fontSize}px 'Fira Code', monospace`;
      ctx.fillText(char, i * fontSize, y);
      const trail = 12;
      for (let t = 1; t <= trail; t++) {
        const alpha = (1 - t / trail) * 0.5;
        ctx.fillStyle = `rgba(0,255,255,${alpha})`;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y - t * fontSize);
      }
      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  };

  const interval = setInterval(draw, 40);
  return () => clearInterval(interval);
}, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current

    // 1. Email que TU reçois (template Contact Us)
    const sendToMe = emailjs.sendForm(
      'service_qykow9l',      // Service ID
      'template_qw1odct',     // envoie du message
      form,
      'c-760UOZvSTnUV-3S'     // Public key
    )

    // 2. Auto‑reply pour la personne
    const sendAutoReply = emailjs.sendForm(
      'service_qykow9l',
      'template_6clk2mj',     // Template d’auto‑réponse
      form,
      'c-760UOZvSTnUV-3S'
    )

    Promise.all([sendToMe, sendAutoReply])
      .then((result) => {
        console.log('SUCCESS:', result)
        alert('Message envoyé !')
        e.target.reset()
      })
      .catch((error) => {
        console.error('EMAILJS ERROR:', error)
        alert('Une erreur est survenue, réessaie plus tard.')
      })
  }

  return (
    <div className="portfolio">
      <div className="bg-animation">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="stars4" />
        <canvas id="code-rain" className="code-rain-canvas" />
      </div>
      <div className="scanlines" />

      {/* NAVBAR */}
      <nav className="navbar">
        <span className="nav-logo">{'OZ'}</span>

        <ul className="nav-links">
          <li onClick={() => scrollTo('hero')}>Home</li>
          <li onClick={() => scrollTo('skills')}>Skills</li>
          <li onClick={() => scrollTo('projects')}>Projets</li>
          <li onClick={() => scrollTo('contact')}>Contact</li>
        </ul>

        <button
          className={`burger ${isMenuOpen ? 'burger-open' : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <button
            className="mobile-link"
            onClick={() => { scrollTo('hero'); setIsMenuOpen(false) }}
          >
            Home
          </button>
          <button
            className="mobile-link"
            onClick={() => { scrollTo('skills'); setIsMenuOpen(false) }}
          >
            Skills
          </button>
          <button
            className="mobile-link"
            onClick={() => { scrollTo('projects'); setIsMenuOpen(false) }}
          >
            Projets
          </button>
          <button
            className="mobile-link"
            onClick={() => { scrollTo('contact'); setIsMenuOpen(false) }}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <h1 className="hero-title">
          Hi, I&apos;m <span className="accent">Omema</span> !
        </h1>

        <p className="hero-subtitle">
          {typed}
          <span className="cursor">|</span>
        </p>

        <p className="hero-desc">
          Jeune développeuse web en formation, passionnée par la création
          d&apos;expériences digitales innovantes.<br />
          Je suis à la recherche de nouvelles opportunités pour mettre mes
          compétences en pratique et continuer à apprendre dans le domaine du
          développement web.<br />
        </p>

        <div className="hero-btns">
          <button
            className="btn-primary"
            onClick={() => scrollTo('projects')}
          >
            Voir mes projets
          </button>

          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Télécharger CV
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <h2 className="section-title">
          Mes <span className="accent">Compétences</span>
        </h2>

        <SkillsOrbit skills={skills} />
      </section>

      {/* PROJECTS */}
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
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">
          Me <span className="accent">Contacter</span>
        </h2>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          {/* NOM */}
          <div className="glitch-input-wrapper">
            <div className="input-container">
              <input
                type="text"
                className="holo-input"
                placeholder=" "
                id="name"
                name="user_name"
                required
              />
              <label
                htmlFor="name"
                className="input-label"
                data-text="Nom"
              >
                Nom
              </label>

              <div className="input-border" />
              <div className="input-glow" />
              <div className="input-scanline" />

              <div className="input-corners">
                <span className="corner corner-tl" />
                <span className="corner corner-tr" />
                <span className="corner corner-bl" />
                <span className="corner corner-br" />
              </div>

              <div className="input-data-stream">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="stream-bar"
                    style={{ '--i': i }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="glitch-input-wrapper">
            <div className="input-container">
              <input
                type="email"
                className="holo-input"
                placeholder=" "
                id="email"
                name="user_email"
                required
              />
              <label
                htmlFor="email"
                className="input-label"
                data-text="Email"
              >
                Email
              </label>

              <div className="input-border" />
              <div className="input-glow" />
              <div className="input-scanline" />

              <div className="input-corners">
                <span className="corner corner-tl" />
                <span className="corner corner-tr" />
                <span className="corner corner-bl" />
                <span className="corner corner-br" />
              </div>

              <div className="input-data-stream">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="stream-bar"
                    style={{ '--i': i }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="glitch-input-wrapper">
            <div className="input-container">
              <textarea
                className="holo-input holo-textarea"
                placeholder=" "
                id="message"
                name="message"
                rows={4}
                required
              />
              <label
                htmlFor="message"
                className="input-label"
                data-text="Message"
              >
                Message
              </label>

              <div className="input-border" />
              <div className="input-glow" />
              <div className="input-scanline" />

              <div className="input-corners">
                <span className="corner corner-tl" />
                <span className="corner corner-tr" />
                <span className="corner corner-bl" />
                <span className="corner corner-br" />
              </div>

              <div className="input-data-stream">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="stream-bar"
                    style={{ '--i': i }}
                  />
                ))}
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Send
          </button>
        </form>
      </section>

      <footer className="footer">
        <span>{'© 2026 Omema — Junior developer'}</span>
      </footer>
    </div>
  )
}