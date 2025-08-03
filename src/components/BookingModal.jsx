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
                <div class="text-center p-4">
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

  // Handle close button click
  const handleCloseClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onClose()
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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-medium text-black">
                  Schedule a Demo
                </h2>
                <button
                  onClick={handleCloseClick}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Book a personalized demo to see how our AI solutions can transform your business.
                </p>

                {/* Calendar Integration */}
                <div ref={modalRef} className="mb-6">
                  {/* Google Calendar will be loaded here */}
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 mb-2">
                    Can't find a time that works? Contact us directly:
                  </p>
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="text-sm text-black hover:underline"
                  >
                    {config.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal 