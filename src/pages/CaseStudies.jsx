import React from 'react'
import CaseStudies from '../components/CaseStudies'

const CaseStudiesPage = ({ onBookDemo }) => {
  return (
    <main className="pt-20">
      <CaseStudies onBookDemo={onBookDemo} />
    </main>
  )
}

export default CaseStudiesPage 