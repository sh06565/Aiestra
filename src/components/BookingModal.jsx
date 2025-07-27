import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import config from '../config/environment'

const BookingModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Load Google Calendar scripts when modal opens
      const loadGoogleCalendar = () => {
        // Load CSS
        const link = document.createElement('link')
        link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css'
        link.rel = 'stylesheet'
        document.head.appendChild(link)

        // Load JS
        const script = document.createElement('script')
        script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js'
        script.async = true
        script.onload = () => {
          // Initialize calendar after script loads
          if (window.calendar && window.calendar.schedulingButton && config.calendar.schedulingUrl) {
            window.calendar.schedulingButton.load({
              url: config.calendar.schedulingUrl,
              color: config.calendar.buttonColor,
              label: config.calendar.buttonLabel,
              target: modalRef.current,
            })
          } else {
            console.error('Google Calendar scheduling URL is not configured')
            // Show fallback message
            if (modalRef.current) {
              modalRef.current.innerHTML = `
                <div class="text-center p-8">
                  <p class="text-red-500 mb-4">Calendar booking is not configured</p>
                  <p class="text-gray-600">Please contact us at ${config.contact.email} to schedule a demo.</p>
                </div>
              `
            }
          }
        }
        document.head.appendChild(script)
      }

      loadGoogleCalendar()
    }
  }, [isOpen])

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl glass dark:glass-dark rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={16} />
            </motion.button>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-h2 font-sora font-bold mb-4">
                Schedule Your{' '}
                <span className="gradient-text">AI Demo</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Book a personalized demo with our AI experts. See how our solutions can transform your business.
              </p>
            </div>

            {/* Google Calendar Embed */}
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Select a time that works best for you:
                </p>
                <div 
                  ref={modalRef}
                  className="inline-block"
                />
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl p-6">
                <h3 className="font-sora font-semibold mb-3">What to Expect:</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>30-minute personalized demo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span>Live AI solution walkthrough</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    <span>Q&A with our AI experts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Custom implementation roadmap</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                <p>Questions? Contact us at <span className="text-primary-500">{config.contact.email}</span></p>
                <p>or call <span className="text-primary-500">{config.contact.phone}</span></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal 