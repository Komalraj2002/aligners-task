import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Book a Free Scan</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Range of Aligners</a></li>
            <li><a href="#">Aligners vs Braces</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get in Touch Now!</h4>
          <ul>
            <li><a href="tel:011-6932-8350"><img src="/images/Icon.png" alt="phone" style={{width:'16px',height:'16px',marginRight:'6px',verticalAlign:'middle'}} />011-6932-8350</a></li>
            <li><a href="mailto:support@whistle.in"><img src="/images/mail-01.png" alt="email" style={{width:'16px',height:'16px',marginRight:'6px',verticalAlign:'middle'}} />support@whistle.in</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow us on</h4>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Instagram">
              <img src="/images/insta.png" alt="Instagram" width="20" height="20" />
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <img src="/images/fb.png" alt="Facebook" width="15" height="18" />
            </a>
            <a href="#" className="social-icon" aria-label="X (Twitter)">
              <img src="/images/twitter.png" alt="Twitter" width="16" height="18" />
            </a>
          </div>
        </div>
        <div className="footer-col footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Whistle And Smile. All rights reserved.</p>
      </div>
    </footer>
  )
}
