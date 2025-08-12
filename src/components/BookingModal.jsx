import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { getCalApi } from "@calcom/embed-react"
import config from '../config/environment'

const BookingModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Load Cal.com when modal opens
      const loadCalCom = async () => {
        try {
          const cal = await getCalApi();
          
          // Initialize Cal.com in the modal
          if (modalRef.current) {
            cal("inline", {
              elementOrSelector: modalRef.current,
              calLink: "aiestra/30min",
              config: {
                layout: "month_view",
                hideEventTypeDetails: false
              }
            });
          }
        } catch (error) {
          console.error('Cal.com integration error:', error);
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

      loadCalCom();
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
                  {/* Cal.com will be loaded here */}
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