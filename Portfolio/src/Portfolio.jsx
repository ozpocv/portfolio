import './Portfolio.css'
import { useState, useEffect } from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const canvas = document.getElementById('code-rain')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const chars = 'アイウエオカキクケコ0123456789ABCDEF{}[]<>/\\|=+-_'
    const fontSize = 13;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.random() * -100);
    const draw = () => {
      ctx.fillStyle = 'rgba(10,10,10,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * (canvas.width / columns)
        const y = drops[i] * fontSize
        ctx.fillStyle = '#7fffff'
        ctx.font = `${fontSize}px 'Fira Code', monospace`
        ctx.fillText(char, x, y)
        const trail = 12
        for (let t = 1; t <= trail; t++) {
          const alpha = (1 - t / trail) * 0.5
          ctx.fillStyle = `rgba(0,255,255,${alpha})`
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y - t * fontSize)
        }
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }
    const interval = setInterval(draw, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="portfolio">
      <div className="bg-animation">
        <div id="stars" /><div id="stars2" />
        <div id="stars3" /><div id="stars4" />
        <canvas id="code-rain" className="code-rain-canvas" />
      </div>
      <div className="scanlines" />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}