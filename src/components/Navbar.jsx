import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="logo-whistle">whistle</span>
          <span className="logo-sub">AND SMILE</span>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#why-whistle">Why Whistle?</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#faq">FAQs</a></li>
        </ul>

        <div className="navbar-actions">
          <button className="btn-call">
            <svg className="call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </button>
          <button className="btn-book">Book a Free Scan</button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {menuOpen && (
        <ul className="mobile-menu">
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
          <li><a href="#why-whistle" onClick={() => setMenuOpen(false)}>Why Whistle?</a></li>
          <li><a href="#results" onClick={() => setMenuOpen(false)}>Results</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a></li>
          <li><button className="btn-book mobile-book">Book a Free Scan</button></li>
        </ul>
      )}
    </nav>
  )
}
