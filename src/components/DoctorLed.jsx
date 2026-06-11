import React from 'react'
import './DoctorLed.css'

export default function DoctorLed() {
  return (
    <section className="doctor-section">
      <div className="doctor-inner">
        <div className="doctor-content">
          <h2 className="doctor-title">We are Doctor-led, not direct-to-customers</h2>
          <p className="doctor-desc">
            We don't offer direct-to-customer invisible aligners. We treat you in a Dental clinic
            with an Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment
            in over 450+ clinics nationwide.
          </p>
          <button className="btn-callback">Get a Callback</button>
        </div>
        <div className="doctor-image">
          <img src="/images/wd3.png" alt="Doctor" />
        </div>
      </div>
    </section>
  )
}
