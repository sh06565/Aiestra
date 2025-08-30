import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = ({ onBookDemo }) => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Organic Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black mb-8 leading-tight">
              The all-in-one platform for{' '}
              <span className="font-semibold">private and secure AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Aiestra empowers every business to harness the power of AI with intelligent voice agents, 
              agentic chatbots, and embedded systems that drive real results.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              onClick={onBookDemo}
              className="inline-flex items-center px-10 py-5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 text-lg"
            >
              <span className="mr-3">Request a demo</span>
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>

          {/* Main Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-2xl blur-sm -z-10"></div>
              
              {/* Chat Interface Header */}
              <div className="flex items-center mb-6">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-lg font-medium text-gray-700">Aiestra Knowledge Agent</span>
                <div className="ml-auto flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-500">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-xs lg:max-w-md px-4 py-3 bg-gray-200 text-black rounded-2xl">
                    <p className="text-sm leading-relaxed">
                      What are the key performance metrics for Q4?
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-xs lg:max-w-md px-4 py-3 bg-gray-700 text-white rounded-2xl">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-300">AI Assistant</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-3">
                      Here's what I found for Q4 performance metrics:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          <span className="text-purple-300 font-semibold">Revenue growth:</span> 27.6% compared to Q3
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          <span className="text-purple-300 font-semibold">Customer satisfaction:</span> 94.2% (up from 91.8%)
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          <span className="text-purple-300 font-semibold">Support tickets:</span> Reduced by 34% with AI automation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Features */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 border border-purple-100 text-center">
                    <div className="text-xs font-semibold text-purple-600 mb-1">RESEARCH</div>
                    <div className="text-xs text-gray-600">Data Analysis</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-100 text-center">
                    <div className="text-xs font-semibold text-purple-600 mb-1">AUTOMATE</div>
                    <div className="text-xs text-gray-600">Report Generation</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero