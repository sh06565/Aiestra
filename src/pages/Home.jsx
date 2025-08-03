import React from 'react'
import Hero from '../components/Hero'

const Home = ({ onBookDemo }) => {
  return (
    <main>
      <Hero onBookDemo={onBookDemo} />
    </main>
  )
}

export default Home 