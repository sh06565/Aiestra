import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mic, MessageCircle, Settings, Play, Square, Volume2, MessageSquare } from 'lucide-react'
import VapiWidget from './VapiWidget'

const VapiDemo = () => {
  const [selectedMode, setSelectedMode] = useState('voice')
  const [widgetMode, setWidgetMode] = useState('voice')
  const [showWidget, setShowWidget] = useState(false)

  const modes = [
    {
      id: 'voice',
      name: 'Voice Agent',
      description: 'Natural voice conversations with real-time speech recognition',
      icon: Mic,
      color: 'from-primary-500 to-primary-600',
      features: [
        'Real-time speech recognition',
        'Natural language processing',
        'Voice emotion detection',
        'Multi-language support'
      ]
    },
    {
      id: 'chat',
      name: 'Chat Agent',
      description: 'Text-based conversations with autonomous AI responses',
      icon: MessageCircle,
      color: 'from-secondary-500 to-purple-500',
      features: [
        'Autonomous responses',
        'Context awareness',
        'Multi-turn conversations',
        'Self-learning capabilities'
      ]
    }
  ]

  const handleModeChange = (mode) => {
    setSelectedMode(mode)
    setWidgetMode(mode)
  }

  const handleWidgetModeChange = (mode) => {
    setWidgetMode(mode)
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container-custom py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-h1 font-sora font-bold mb-6">
            Vapi AI{' '}
            <span className="gradient-text">Agent Demo</span>
          </h1>
          <p className="text-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience our autonomous AI agents in action. Switch between voice and chat modes 
            to see how our AI handles natural conversations and complex interactions.
          </p>
        </motion.div>

        {/* Mode Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {modes.map((mode) => (
            <motion.div
              key={mode.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleModeChange(mode.id)}
              className={`cursor-pointer p-8 rounded-2xl transition-all duration-300 ${
                selectedMode === mode.id
                  ? 'glass dark:glass-dark border-2 border-primary-500'
                  : 'glass dark:glass-dark hover:shadow-lg'
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${mode.color} rounded-xl flex items-center justify-center`}>
                  <mode.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-sora font-semibold">{mode.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{mode.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {mode.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Demo Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={() => setShowWidget(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              <Play size={20} />
              <span>Start Demo</span>
            </button>
            
            <button
              onClick={() => setShowWidget(false)}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Square size={20} />
              <span>Stop Demo</span>
            </button>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Current Mode: <span className="font-semibold text-primary-500">{selectedMode}</span>
          </p>
        </motion.div>

        {/* Widget Demo */}
        {showWidget && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-sora font-semibold">AI Agent Demo</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {selectedMode === 'voice' ? (
                      <Volume2 size={16} className="text-primary-500" />
                    ) : (
                      <MessageSquare size={16} className="text-secondary-500" />
                    )}
                    <span className="text-sm font-medium capitalize">{selectedMode}</span>
                  </div>
                </div>
              </div>
              
              <VapiWidget
                mode={widgetMode}
                onModeChange={handleWidgetModeChange}
                showModeSelector={true}
                className="min-h-[400px]"
              />
            </div>
          </motion.div>
        )}

        {/* Configuration Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h3 className="text-xl font-sora font-semibold mb-6">Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Environment Variables</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      VITE_VAPI_PUBLIC_KEY
                    </code>
                    <span className="text-green-500">✓ Required</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      VITE_VAPI_ASSISTANT_ID
                    </code>
                    <span className="text-green-500">✓ Required</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Mode switching (Voice/Chat)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Real-time configuration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Secure environment variables</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Responsive design</span>
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

export default VapiDemo 