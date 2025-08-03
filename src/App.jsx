import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SolutionsPage from './pages/Solutions'
import CaseStudies from './pages/CaseStudies'
import Insights from './pages/Insights'
import Company from './pages/Company'
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
    }, 500)

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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-normal text-black lowercase tracking-wide mb-2">
            aiestra
          </h2>
          <p className="text-sm text-gray-500">Loading...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar onBookDemo={openBookingModal} />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home onBookDemo={openBookingModal} />} />
              <Route path="/solutions" element={<SolutionsPage onBookDemo={openBookingModal} />} />
              <Route path="/solutions/:solutionId" element={<SolutionsPage onBookDemo={openBookingModal} />} />
              <Route path="/case-studies" element={<CaseStudies onBookDemo={openBookingModal} />} />
              <Route path="/insights" element={<Insights onBookDemo={openBookingModal} />} />
              <Route path="/company" element={<Company onBookDemo={openBookingModal} />} />
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