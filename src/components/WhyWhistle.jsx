import React from 'react'
import './WhyWhistle.css'

const features = [
  {
    id: 1,
    title: 'Custom-made & invisible',
    desc: 'Tailored for your teeth and smile with a clear, discreet appearance.',
    img: '/images/chooose1.png',
  },
  {
    id: 2,
    title: 'Predictable results',
    desc: 'Advanced 3D modeling and AI-technology for precise planning and predictable results.',
    img: '/images/choose2.png',
  },
  {
    id: 3,
    title: 'Partnership with Clove Dental',
    desc: 'Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.',
    img: '/images/choose3.png',
  },
  {
    id: 4,
    title: 'Unlimited Aligners*',
    desc: 'Unlimited aligners and doctor consults at no extra cost.',
    img: '/images/choose4.png',
  },
]

export default function WhyWhistle() {
  return (
    <section className="why-section" id="why-whistle">
      <div className="why-inner">
        <h2 className="section-title">Why Whistle?</h2>
        <div className="why-grid">
          {features.map(f => (
            <div key={f.id} className="why-card">
              <div className="why-img-wrap">
                <img src={f.img} alt={f.title} />
              </div>
              <h3 className="why-card-title">{f.title}</h3>
              <p className="why-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
