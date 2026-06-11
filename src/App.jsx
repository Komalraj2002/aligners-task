import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import ProductShowcase from './components/ProductShowcase'
import Results from './components/Results'
import WhyWhistle from './components/WhyWhistle'
import WhistleDiff from './components/WhistleDiff'
import Comparison from './components/Comparison'
import HowItWorks from './components/HowItWorks'
import DoctorLed from './components/DoctorLed'
import HappySmilers from './components/HappySmilers'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <ProductShowcase />
      <Results />
      <WhyWhistle />
      <WhistleDiff />
      <Comparison />
      <HowItWorks />
      <DoctorLed />
      <HappySmilers />
      <FAQ />
      <Footer />
    </>
  )
}
