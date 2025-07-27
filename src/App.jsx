import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import HowItWorks from './components/HowItWorks'
import CaseStudies from './components/CaseStudies'
import ClientLogos from './components/ClientLogos'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import ThemeProvider from './context/ThemeContext'
import { validateAppConfig, logConfigStatus } from './utils/validateConfig'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    // Validate configuration on startup
    validateAppConfig()
    logConfigStatus()

    // Simulate loading time for smooth initial render
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Function to open booking modal
  const openBookingModal = () => {
    setIsBookingModalOpen(true)
  }

  // Function to close booking modal
  const closeBookingModal = () => {
    setIsBookingModalOpen(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-sora font-semibold gradient-text">Aiestra</h2>
          <p className="text-sm text-gray-500 mt-2">Loading human-centered AI...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navbar onBookDemo={openBookingModal} />
        
        <main>
          <Hero onBookDemo={openBookingModal} />
          <Solutions onBookDemo={openBookingModal} />
          <HowItWorks onBookDemo={openBookingModal} />
          <CaseStudies onBookDemo={openBookingModal} />
          <ClientLogos />
          <FAQ onBookDemo={openBookingModal} />
          <Newsletter />
        </main>

        <Footer />
        <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      </div>
    </ThemeProvider>
  )
}

export default App 