import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mic, MessageCircle, Settings, Play, Square } from 'lucide-react'
import VapiWidget from './VapiWidget'

const VapiTest = () => {
  const [widgetMode, setWidgetMode] = useState('voice')
  const [showWidget, setShowWidget] = useState(true)

  const handleModeChange = (mode) => {
    setWidgetMode(mode)
    console.log('Widget mode changed to:', mode)
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-h1 font-sora font-bold mb-6">
            Vapi AI{' '}
            <span className="gradient-text">Widget Test</span>
          </h1>
          <p className="text-body text-gray-600 dark:text-gray-300">
            Test the Vapi AI widget functionality. Check the console for configuration status.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass dark:glass-dark rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-sora font-semibold mb-6">Widget Controls</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mode Selection */}
            <div>
              <h4 className="font-semibold mb-4">Widget Mode</h4>
              <div className="flex space-x-2">
                <button
                  onClick={() => setWidgetMode('voice')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    widgetMode === 'voice'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Mic size={16} />
                  <span>Voice</span>
                </button>
                
                <button
                  onClick={() => setWidgetMode('chat')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    widgetMode === 'chat'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <MessageCircle size={16} />
                  <span>Chat</span>
                </button>
              </div>
            </div>

            {/* Show/Hide Controls */}
            <div>
              <h4 className="font-semibold mb-4">Widget Visibility</h4>
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowWidget(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <Play size={16} />
                  <span>Show Widget</span>
                </button>
                
                <button
                  onClick={() => setShowWidget(false)}
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                >
                  <Square size={16} />
                  <span>Hide Widget</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Widget Test Area */}
        {showWidget && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass dark:glass-dark rounded-2xl p-8"
          >
            <h3 className="text-xl font-sora font-semibold mb-6">Widget Test Area</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The Vapi widget should appear below. If you don't see it, check the console for configuration errors.
            </p>
            
            <VapiWidget
              mode={widgetMode}
              onModeChange={handleModeChange}
              showModeSelector={true}
              className="min-h-[300px]"
            />
          </motion.div>
        )}

        {/* Configuration Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h3 className="text-xl font-sora font-semibold mb-6">Configuration Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Required Variables</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      VITE_VAPI_PUBLIC_KEY
                    </code>
                    <span className="text-yellow-500">Check console</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      VITE_VAPI_ASSISTANT_ID
                    </code>
                    <span className="text-yellow-500">Check console</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Troubleshooting</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Check browser console for errors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Verify .env file has Vapi credentials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Ensure internet connection for script loading</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default VapiTest 