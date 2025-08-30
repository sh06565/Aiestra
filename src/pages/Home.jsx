import React from 'react'
import { Hero, Solutions, CoreBenefits, ClientLogos, FAQ, Newsletter } from '../components'

const Home = ({ onBookDemo }) => {
  return (
    <main>
      <Hero onBookDemo={onBookDemo} />
      <Solutions onBookDemo={onBookDemo} />
      <CoreBenefits />
      <ClientLogos />
      <FAQ onBookDemo={onBookDemo} />
      <Newsletter />
    </main>
  )
}

export default Home 