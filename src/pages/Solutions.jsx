import React from 'react'
import Solutions from '../components/Solutions'
import HowItWorks from '../components/HowItWorks'

const SolutionsPage = ({ onBookDemo }) => {
  return (
    <main className="pt-20">
      <Solutions onBookDemo={onBookDemo} />
      <HowItWorks onBookDemo={onBookDemo} />
    </main>
  )
}

export default SolutionsPage 