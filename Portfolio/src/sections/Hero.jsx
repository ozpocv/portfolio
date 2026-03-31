import { useState, useEffect } from 'react'
import cvPdf from '../assets/docs/Cv-Zairaf-Omema-Dev.pdf'

const TEXT = 'Junior web developer'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const speed = deleting ? 50 : 100
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = TEXT.slice(0, typed.length + 1)
        setTyped(next)
        if (next === TEXT) {
          setPaused(true)
          setTimeout(() => { setPaused(false); setDeleting(true) }, 1500)
        }
      } else {
        const next = typed.slice(0, typed.length - 1)
        setTyped(next)
        if (next === '') {
          setPaused(true)
          setTimeout(() => { setPaused(false); setDeleting(false) }, 500)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [typed, deleting, paused])

  return (
    <section id="hero" className="hero">
      <h1 className="hero-title">
        Hi, I&apos;m <span className="accent">Omema</span> !
      </h1>
      <p className="hero-subtitle">
        {typed}<span className="cursor">|</span>
      </p>
      <p className="hero-desc">
        Jeune développeuse web en formation, passionnée par la création
        d&apos;expériences digitales innovantes.<br />
        Je suis à la recherche de nouvelles opportunités pour mettre mes
        compétences en pratique et continuer à apprendre dans le domaine du
        développement web.
      </p>
      <div className="hero-btns">
        <button className="btn-primary" onClick={() => scrollTo('projects')}>
          Voir mes projets
        </button>
        <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn-outline">
          Télécharger CV
        </a>
      </div>
    </section>
  )
}