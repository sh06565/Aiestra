import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Navbar, Footer } from './components'
import { Home, SolutionsPage, Services, Industries, Insights, Contact, NotFound } from './pages'
import { ThemeProvider } from './context'
import { validateAppConfig, logConfigStatus } from './utils/validateConfig'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

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
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navbar />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/solutions/:solutionId" element={<SolutionsPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>

          <Footer />
          <SpeedInsights />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App 