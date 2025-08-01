import React from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

const Loading = ({ 
  size = 'default', 
  text = 'Loading...', 
  showText = true,
  className = '',
  variant = 'spinner'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    default: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const textSizes = {
    sm: 'text-xs',
    default: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  const renderSpinner = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={`${sizeClasses[size]} ${className}`}
    >
      <Loader2 className="w-full h-full text-primary-500" />
    </motion.div>
  )

  const renderDots = () => (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 bg-primary-500 rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  )

  const renderPulse = () => (
    <motion.div
      className={`${sizeClasses[size]} bg-primary-500 rounded-full ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  )

  const renderBar = () => (
    <div className={`w-full max-w-xs ${className}`}>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </div>
  )

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots()
      case 'pulse':
        return renderPulse()
      case 'bar':
        return renderBar()
      case 'spinner':
      default:
        return renderSpinner()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderLoader()}
      {showText && text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-gray-600 dark:text-gray-400 ${textSizes[size]} text-center`}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

// Full screen loading component
export const FullScreenLoading = ({ text = 'Loading Aiestra...' }) => (
  <div className="fixed inset-0 bg-background-light dark:bg-background-dark flex items-center justify-center z-50">
    <div className="text-center">
      <Loading size="xl" text={text} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <h2 className="text-xl font-sora font-semibold gradient-text">Aiestra</h2>
        <p className="text-sm text-gray-500 mt-2">Human-centered AI, delivered</p>
      </motion.div>
    </div>
  </div>
)

// Skeleton loading component
export const Skeleton = ({ className = '', lines = 1, height = 'h-4' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`loading-skeleton ${height} rounded`}
        style={{
          width: i === lines - 1 ? '75%' : '100%'
        }}
      />
    ))}
  </div>
)

// Card skeleton
export const CardSkeleton = ({ className = '' }) => (
  <div className={`glass dark:glass-dark rounded-2xl p-6 ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 loading-skeleton rounded-lg" />
      <div className="flex-1">
        <div className="h-4 loading-skeleton rounded w-3/4 mb-2" />
        <div className="h-3 loading-skeleton rounded w-1/2" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 loading-skeleton rounded" />
      <div className="h-3 loading-skeleton rounded w-5/6" />
      <div className="h-3 loading-skeleton rounded w-4/6" />
    </div>
  </div>
)

export default Loading 