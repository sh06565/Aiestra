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

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <KeyBenefits />
      <Solutions />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </main>
  )
}

export default Home 