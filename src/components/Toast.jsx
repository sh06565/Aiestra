import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { useToast } from '../context/AppContext'

const Toast = () => {
  const { toast, clearToast } = useToast()

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        clearToast()
      }, toast.duration || 5000)

      return () => clearTimeout(timer)
    }
  }, [toast, clearToast])

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} />
      case 'error':
        return <AlertCircle size={20} />
      case 'warning':
        return <AlertTriangle size={20} />
      case 'info':
        return <Info size={20} />
      default:
        return <Info size={20} />
    }
  }

  const getToastClasses = (type) => {
    const baseClasses = 'toast flex items-center justify-between p-4 rounded-lg shadow-lg max-w-sm'
    
    switch (type) {
      case 'success':
        return `${baseClasses} bg-green-500 text-white`
      case 'error':
        return `${baseClasses} bg-red-500 text-white`
      case 'warning':
        return `${baseClasses} bg-yellow-500 text-white`
      case 'info':
        return `${baseClasses} bg-blue-500 text-white`
      default:
        return `${baseClasses} bg-gray-800 text-white`
    }
  }

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-4 right-4 z-50"
          role="alert"
          aria-live="assertive"
        >
          <div className={getToastClasses(toast.type)}>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {getIcon(toast.type)}
              </div>
              <div className="flex-1">
                {toast.title && (
                  <h4 className="font-medium text-sm">
                    {toast.title}
                  </h4>
                )}
                {toast.message && (
                  <p className="text-sm opacity-90">
                    {toast.message}
                  </p>
                )}
              </div>
            </div>
            
            <button
              onClick={clearToast}
              className="flex-shrink-0 ml-3 p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast 