import React, { useState, useEffect } from 'react'
import './ProductShowcase.css'

export default function ProductShowcase() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Unable to load product details. Please try again.')
        setLoading(false)
      })
  }, [])

  return (
    <section className="showcase-section">
      <div className="showcase-inner">
        <div className="showcase-left">
          <h2 className="showcase-title">Dream smiles<br />achieved secretly</h2>
          <p className="showcase-desc">
            Experience the superior quality of our Whistle Aligners crafted with 3-layer PU material.
            With 450+ clinics nationwide, enjoy comfortable treatment by expert orthodontists at House of Clove.
          </p>
          <p className="showcase-desc">
            The pricing is different for every case. Cases with higher complexity require more aligners
            and additional time and effort from our dentists.
          </p>
        </div>

        <div className="showcase-right">
          {loading && (
            <div className="product-card skeleton">
              <div className="skeleton-title"></div>
              <div className="skeleton-price"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          )}
          {error && (
            <div className="product-card error-card">
              <p className="error-msg">⚠️ {error}</p>
              <div className="product-card-content">
                <h3 className="product-name">Whistle Aligners</h3>
                <div className="product-pricing">
                  <span className="price-old">₹84,000</span>
                  <span className="price-new">starting at ₹47,999</span>
                  <span className="price-note">inc. of all taxes</span>
                </div>
              </div>
            </div>
          )}
          {!loading && !error && product && (
            <div className="product-card">
              <div className="product-card-header">
                <div>
                  <h3 className="product-name">Whistle Aligners</h3>
                  <div className="product-pricing">
                    <span className="price-old">₹84,000</span>
                    <br />
                    <span className="price-label">starting at </span>
                    <span className="price-new">₹47,999</span>
                    <span className="price-note">inc. of all taxes</span>
                  </div>
                </div>
                <img
                  src="/images/wa1.png"
                  alt="Whistle Aligner"
                  className="product-img"
                />
              </div>
              <div className="product-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Offer valid for a limited time</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Easy financing options</span>
                </div>
              </div>
              <a href="#" className="learn-more">Learn more →</a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
