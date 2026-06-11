import React, { useState, useEffect } from 'react'
import './Results.css'

const concerns = ['Gaps', 'Crooked Teeth', 'Open Bite', 'Protruding Teeth']

export default function Results() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=4&select=id,title,thumbnail,images')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        const mapped = data.products.map((p, i) => ({
          id: p.id,
          concern: concerns[i % concerns.length],
          duration: `${6 + (i % 4)} months`,
          beforeImg: ['/images/gap1.jpg', '/images/gap3.jpg', '/images/gap5.jpg', '/images/gap7.jpg'][i % 4],
          afterImg: ['/images/gap2.jpg', '/images/gap4.jpg', '/images/gap6.jpg', '/images/gap8.jpg'][i % 4],
        }))
        setResults(mapped)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load results. Please try again later.')
        setLoading(false)
      })
  }, [])

  const filters = ['All', ...concerns]
  const filtered = activeFilter === 'All' ? results : results.filter(r => r.concern === activeFilter)

  return (
    <section className="results-section" id="results">
      <div className="results-inner">
        <h2 className="section-title">Results You'll Love</h2>

        {/* Filter Tabs - the main interaction */}
        <div className="filter-tabs">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {loading && (
          <div className="results-grid">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="result-card skeleton-card">
                <div className="skeleton-images"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text short"></div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="error-state">
            <p>⚠️ {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="results-grid">
            {filtered.map(r => (
              <div key={r.id} className="result-card">
                <div className="before-after-imgs">
                  <div className="ba-item">
                    <img src={r.beforeImg} alt="Before" />
                    <span className="ba-label">Before</span>
                  </div>
                  <div className="ba-item">
                    <img src={r.afterImg} alt="After" />
                    <span className="ba-label">After</span>
                  </div>
                </div>
                <div className="result-meta">
                  <div className="meta-row">
                    <span className="meta-label">Concern</span>
                    <span className="meta-value">{r.concern}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Treatment Duration</span>
                    <span className="meta-value">{r.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
