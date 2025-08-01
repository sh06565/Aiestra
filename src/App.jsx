import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
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
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles size={24} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400 mb-1">
              Aiestra
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">AI Solutions</p>
            <p className="text-sm text-gray-500 mt-2">Loading human-centered AI...</p>
          </div>
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