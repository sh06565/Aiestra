import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react'
import { useApp } from '../../context'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })

    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo)

    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />
    }

    return this.props.children
  }
}

const ErrorFallback = ({ error, errorInfo }) => {
  const { actions } = useApp()

  const handleReload = () => {
    window.location.reload()
  }

  const handleGoHome = () => {
    window.location.href = '/'
  }

  const handleGoBack = () => {
    window.history.back()
  }

  const handleReportError = () => {
    const errorReport = {
      message: error?.message || 'Unknown error',
      stack: error?.stack || '',
      componentStack: errorInfo?.componentStack || '',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }

    // Log to console for now, in production you'd send to an error reporting service
    console.error('Error Report:', errorReport)

    // Show toast notification
    actions.showToast({
      type: 'info',
      title: 'Error Reported',
      message: 'Thank you for reporting this issue. We\'ll investigate and fix it.',
      duration: 5000
    })
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="glass dark:glass-dark rounded-2xl p-8 text-center">
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <AlertTriangle size={32} className="text-white" />
          </motion.div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-sora font-bold mb-4"
          >
            Oops! Something went wrong
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 mb-6"
          >
            We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
          </motion.p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && error && (
            <motion.details
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 text-left"
            >
              <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Error Details (Development)
              </summary>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-xs font-mono text-gray-600 dark:text-gray-400 overflow-auto max-h-32">
                <div className="mb-2">
                  <strong>Error:</strong> {error.message}
                </div>
                {error.stack && (
                  <div>
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap">{error.stack}</pre>
                  </div>
                )}
              </div>
            </motion.details>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <motion.button
              onClick={handleReload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <RefreshCw size={18} />
              <span>Reload Page</span>
            </motion.button>

            <div className="grid grid-cols-2 gap-3">
              <motion.button
                onClick={handleGoHome}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Home size={18} />
                <span>Go Home</span>
              </motion.button>

              <motion.button
                onClick={handleGoBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <ArrowLeft size={18} />
                <span>Go Back</span>
              </motion.button>
            </div>

            <motion.button
              onClick={handleReportError}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary w-full"
            >
              Report This Error
            </motion.button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400">
              If this problem persists, please contact our support team at{' '}
              <a href="mailto:support@aiestra.com" className="text-primary-500 hover:underline">
                support@aiestra.com
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ErrorBoundary 