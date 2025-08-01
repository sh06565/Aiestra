import React from 'react'
import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'

const Home = ({ onBookDemo }) => {
  return (
    <main>
      <Hero onBookDemo={onBookDemo} />
      <ClientLogos />
    </main>
  )
}

export default Home 