import React, { useState } from 'react'
import './FAQ.css'

const faqs = [
  { q: 'What are Aligners?', a: 'Aligners are clear, removable dental devices used to straighten teeth without metal braces. They are custom-made using 3D scans of your teeth and work by applying gentle pressure to move teeth into the desired position over time.' },
  { q: 'How do Aligners work?', a: 'Aligners work by gradually shifting your teeth into alignment. You wear each set of aligners for about 10 days before moving to the next set. Each set moves your teeth slightly closer to the final desired position.' },
  { q: 'Can any dentist do irregular teeth treatment?', a: 'No. Aligner treatment should be done by a qualified Orthodontist. At Whistle, all treatments are supervised by expert orthodontists at Clove Dental clinics nationwide.' },
  { q: 'Are there any restriction on eating or drinking?', a: 'Yes. You should remove your aligners when eating or drinking anything other than water. This helps prevent staining and damage to the aligners. Always brush your teeth before putting aligners back in.' },
  { q: 'How long does the treatment take?', a: 'Treatment duration varies by case complexity. Simple cases may take 6-8 months, while more complex cases can take 12-18 months. Your Orthodontist will give a personalized estimate after your 3D scan.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <h2 className="faq-heading">
          <span className="faq-got">Got Questions?</span> We've got answers
        </h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
