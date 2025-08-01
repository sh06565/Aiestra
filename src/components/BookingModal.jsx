import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, Users, Zap, Heart, Mail, Phone, Star } from 'lucide-react'
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

  const features = [
    {
      icon: Clock,
      title: "30-minute personalized demo",
      subtitle: "Tailored to your needs",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Q&A with our AI experts",
      subtitle: "Get your questions answered",
      color: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      icon: Zap,
      title: "Live AI solution walkthrough",
      subtitle: "See it in action",
      color: "from-purple-500 to-pink-500",
      delay: 0.3
    },
    {
      icon: Calendar,
      title: "Custom implementation roadmap",
      subtitle: "Your path to success",
      color: "from-orange-500 to-red-500",
      delay: 0.4
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 modal-backdrop"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              duration: 0.4
            }}
            className="relative w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 flex flex-col max-h-[95vh] sm:max-h-[90vh] md:max-h-[85vh]"
          >
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            {/* Enhanced Close Button */}
            <motion.button
              onClick={handleCloseClick}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-2 right-2 z-50 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:bg-white dark:hover:bg-gray-800 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
              aria-label="Close modal"
              type="button"
            >
              <X size={16} className="sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors" />
            </motion.button>

            {/* Scrollable Content */}
            <div className="relative z-10 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
              {/* Enhanced Header */}
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center space-x-2 mb-3 sm:mb-4 px-3 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20 backdrop-blur-sm"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center icon-bounce">
                    <Calendar size={10} className="sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">Book Your Demo</span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight"
                >
                  Schedule Your{' '}
                  <span className="gradient-text">AI Demo</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto"
                >
                  Book a personalized demo with our AI experts. See how our intelligent solutions can transform your business and create meaningful connections with your customers.
                </motion.p>
              </div>

              {/* Google Calendar Embed */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center icon-bounce">
                      <Clock size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 dark:text-gray-200">
                      Select a time that works best for you:
                    </p>
                  </div>
                  <div 
                    ref={modalRef}
                    className="inline-block"
                  />
                </motion.div>

                {/* Enhanced Features Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-gray-800/80 dark:to-gray-900/80 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4 lg:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center icon-bounce">
                      <Heart size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-100">What to Expect:</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + feature.delay }}
                        className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group"
                      >
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <feature.icon size={14} className="sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-100 mb-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                            {feature.title}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                            {feature.subtitle}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Contact Info */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-blue-200/50 dark:border-purple-500/20"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-2 sm:mb-3 lg:mb-4">
                      <Star size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-500" />
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100">Need Help?</h4>
                      <Star size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-500" />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 lg:space-x-6">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <Mail size={12} className="sm:w-4 sm:h-4 text-blue-500" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Email:</span>
                        <a 
                          href={`mailto:${config.contact.email}`}
                          className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-xs sm:text-sm"
                        >
                          {config.contact.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <Phone size={12} className="sm:w-4 sm:h-4 text-green-500" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Call:</span>
                        <a 
                          href={`tel:${config.contact.phone}`}
                          className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors text-xs sm:text-sm"
                        >
                          {config.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal 