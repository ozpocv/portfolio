const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
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
        <span /><span /><span />
      </button>

      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <button className="mobile-link" onClick={() => { scrollTo('hero'); setIsMenuOpen(false) }}>Home</button>
        <button className="mobile-link" onClick={() => { scrollTo('skills'); setIsMenuOpen(false) }}>Skills</button>
        <button className="mobile-link" onClick={() => { scrollTo('projects'); setIsMenuOpen(false) }}>Projets</button>
        <button className="mobile-link" onClick={() => { scrollTo('contact'); setIsMenuOpen(false) }}>Contact</button>
      </div>
    </nav>
  )
}