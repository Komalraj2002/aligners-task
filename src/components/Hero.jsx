import React, { useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', phone: '', hasGaps: 'yes' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly.')
    setFormData({ name: '', phone: '', hasGaps: 'yes' })
  }

  return (
    <section className="hero-wrapper">
      {/* Offer Banner */}
      <div className="offer-banner">
        <span>Starting at <s>₹84,000</s> <strong>₹47,999.</strong> Hurry! Offer ends soon.</span>
      </div>

      {/* Hero Main */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Invisible Aligners for a dream smile</h1>
          <p className="hero-subtitle">
            Book a Scan and avail a free Orthodontist Consult{' '}
            <span className="hero-worth">worth ₹1500</span>
          </p>

          {/* Form */}
          <div className="hero-form-box">
            <p className="form-question">Do you have Teeth Gaps or Crooked Teeth?</p>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="gaps" value="yes" checked={formData.hasGaps === 'yes'}
                  onChange={() => setFormData({ ...formData, hasGaps: 'yes' })} />
                Yes
              </label>
              <label className="radio-label">
                <input type="radio" name="gaps" value="no" checked={formData.hasGaps === 'no'}
                  onChange={() => setFormData({ ...formData, hasGaps: 'no' })} />
                No
              </label>
            </div>
            <form className="hero-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
              <input
                type="tel"
                placeholder="+91 Mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
              />
              <button type="submit" className="btn-book-scan">Book a Free Scan</button>
            </form>
            <p className="form-consent">
              I hereby consent to receive calls / messages from Whistle and their terms and override DND settings.
            </p>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/doctor1.png" alt="Happy smile" />
        </div>
      </div>

      {/* Clove Dental CTA */}
      <div className="clove-banner">
        <div className="clove-text">
          <p>Book a Free 3D Teeth Scan and Orthodontist Consult in a <strong>Clove Dental Clinic near you.</strong></p>
        </div>
        <div className="clove-right">
          <div className="clove-logo">clove:) <span>DENTAL</span></div>
          <a href="#" className="find-clinic">Find Clinic ↓</a>
        </div>
      </div>
    </section>
  )
}
