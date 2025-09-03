import React from 'react'
import { 
  Hero, 
  About, 
  HowItWorks, 
  KeyBenefits, 
  Solutions, 
  CaseStudies, 
  Testimonials, 
  Pricing, 
  CallToAction 
} from '../components'

const Home = ({ onBookDemo }) => {
  return (
    <main>
      <Hero onBookDemo={onBookDemo} />
      <About />
      <HowItWorks />
      <KeyBenefits />
      <Solutions onBookDemo={onBookDemo} />
      <CaseStudies />
      <Testimonials />
      <Pricing onBookDemo={onBookDemo} />
      <CallToAction onBookDemo={onBookDemo} />
    </main>
  )
}

export default Home 