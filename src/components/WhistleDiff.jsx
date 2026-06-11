import React from 'react'
import './WhistleDiff.css'

const points = [
  {
    icon: <img src="/images/fm1.svg" alt="Next-Gen" style={{width:'36px', height:'36px'}} />,
    title: 'Next-Gen',
    desc: 'Crafted with top-notch 3D printing, laser tech, and Zendura F.L.X material.',
  },
  {
    icon: <img src="/images/Group.svg" alt="Hassle-Free" style={{width:'36px', height:'36px'}} />,
    title: 'Hassle-Free',
    desc: 'Predictable, comfortable & lifestyle-friendly for an easy smile transformation.',
  },
  {
    icon: <img src="/images/Price.svg" alt="Transparent Pricing" style={{width:'36px', height:'36px'}} />,
    title: 'Transparent Pricing',
    desc: "Everything's included – from scans to aligners, doctor consults, and retainers – no hidden costs.",
  },
]

export default function WhistleDiff() {
  return (
    <section className="diff-section">
      <div className="diff-inner">
        <div className="diff-left">
          <h2 className="diff-title">The Whistle Difference</h2>
          <div className="diff-points">
            {points.map((p, i) => (
              <div key={i} className="diff-point">
                <div className="diff-icon">{p.icon}</div>
                <div>
                  <h3 className="diff-point-title">{p.title}</h3>
                  <p className="diff-point-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="diff-right">
          <img src="/images/wd1.png" alt="Aligner technology" />
        </div>
      </div>
    </section>
  )
}
