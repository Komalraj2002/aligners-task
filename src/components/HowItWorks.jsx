import React from 'react'
import './HowItWorks.css'

const steps = [
  { num: 1, title: 'Scan', desc: 'We use an AI-powered scanner to take a detailed 3D image of your teeth.' },
  { num: 2, title: 'Plan', desc: 'Our Orthodontists design your customized smile enhancement plan using highly advanced software.' },
  { num: 3, title: 'Fabricate', desc: 'We manufacture your custom aligners leveraging 3D printing & laser technology.' },
  { num: 4, title: 'Wear', desc: 'Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey.' },
]

export default function HowItWorks() {
  return (
    <section className="hiw-section" id="how-it-works">
      <div className="hiw-inner">
        <div className="hiw-left">
          <h2 className="hiw-title">Get your perfect smile in four simple steps</h2>
          <div className="steps-grid">
            {steps.map(s => (
              <div key={s.num} className="step-item">
                <div className="step-num">{s.num}</div>
                <div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hiw-right">
          <div className="video-thumb">
            <img src="/images/wd2.png" alt="How it works" />
            <div className="play-btn">▶</div>
          </div>
        </div>
      </div>
    </section>
  )
}
