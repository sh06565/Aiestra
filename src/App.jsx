import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SolutionsPage from './pages/Solutions'
import CaseStudiesPage from './pages/CaseStudies'
import About from './pages/About'
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
      <Router>
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
          <Navbar onBookDemo={openBookingModal} />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home onBookDemo={openBookingModal} />} />
              <Route path="/solutions" element={<SolutionsPage onBookDemo={openBookingModal} />} />
              <Route path="/case-studies" element={<CaseStudiesPage onBookDemo={openBookingModal} />} />
              <Route path="/about" element={<About onBookDemo={openBookingModal} />} />
            </Routes>
          </AnimatePresence>

          <Footer />
          <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App 