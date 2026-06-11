import React from 'react'
import './Marquee.css'

const items = [
  { label: 'Our inaugural launch benefit', highlight: false },
  { label: 'Free teeth scan', highlight: true },
  { label: 'worth ₹500', highlight: false },
  { label: 'Free orthodontic consultation', highlight: true },
  { label: 'worth ₹1500', highlight: false },
  { label: 'Our inaugural launch benefit', highlight: false },
  { label: 'Free teeth scan', highlight: true },
  { label: 'worth ₹500', highlight: false },
  { label: 'Free orthodontic consultation', highlight: true },
  { label: 'worth ₹1500', highlight: false },
]

export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className={`marquee-item ${item.highlight ? 'highlight' : ''}`}>
            {item.label}
            <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
