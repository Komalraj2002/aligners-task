import { useState } from 'react'
import './Comparison.css'

const rows = [
  { feature: 'Easy to complex cases', whistle: 'Yes, mild to complex', others: 'No, only mild to moderate', whistleCheck: null, othersCheck: null },
  { feature: 'Clear-cut Pricing',           whistle: true,              others: false,                      whistleCheck: true,  othersCheck: false },
  { feature: 'Aligner Change',              whistle: 'Every 10 days',   others: 'Every 2 weeks',            whistleCheck: null,  othersCheck: null },
  { feature: 'Clinical Partnership',        whistle: true,              others: false,                      whistleCheck: true,  othersCheck: false },
  { feature: 'Movement Between Cities',     whistle: true,              others: false,                      whistleCheck: true,  othersCheck: false },
  { feature: 'Complimentary Teeth Scaling', whistle: true,              others: false,                      whistleCheck: true,  othersCheck: false },
]

function CheckCircle() {
  return <span className="check-circle">✓</span>
}

function CrossCircle() {
  return <span className="cross-circle">✕</span>
}

export default function Comparison() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="compare-section">
      <div className="compare-inner">
        <h2 className="section-title">What sets Whistle apart?</h2>
        <div className="compare-table">
          <div className="compare-header">
            <div className="col-feature hdr-feature">Features</div>
            <div className="col-whistle hdr-whistle">
              <span className="logo-whistle-sm">whistle</span>
              <span className="logo-sub-sm">AND SMILE</span>
            </div>
            <div className="col-others hdr-others">Other Brands</div>
          </div>

          {rows.map((row, i) => (
            <div key={i} className="compare-row">
              <div className="col-feature">
                <div className="feature-row">
                  <span className="feature-name">{row.feature}</span>
                  <button
                    className={`expand-btn ${expanded === i ? 'open' : ''}`}
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    aria-label="expand"
                  >
                    ›
                  </button>
                </div>
                {expanded === i && (
                  <div className="expand-content">
                    Whistle offers the best-in-class solution for <strong>{row.feature.toLowerCase()}</strong> with clinical precision and expert care.
                  </div>
                )}
              </div>

              <div className="col-whistle compare-cell whistle-cell">
                {row.whistleCheck === true  ? <CheckCircle />
                : row.whistleCheck === false ? <CrossCircle />
                : <span className="text-cell">{row.whistle}</span>}
              </div>

              <div className="col-others compare-cell">
                {row.othersCheck === true  ? <CheckCircle />
                : row.othersCheck === false ? <CrossCircle />
                : <span className="text-cell gray-text">{row.others}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
