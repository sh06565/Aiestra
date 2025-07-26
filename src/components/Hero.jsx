import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, BookOpen, Mic, Bot, MessageCircle } from 'lucide-react'
import ParticleNetwork from './ParticleNetwork'

const Hero = ({ onBookDemo }) => {
  const scrollRef = useRef(null)

  const scrollToNext = () => {
    const nextSection = document.getElementById('solutions')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-light via-background-light/95 to-primary-50/30 dark:from-background-dark dark:via-background-dark/95 dark:to-primary-900/20" />
      
      {/* Particle Network */}
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="grid-custom items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-4 lg:col-span-7 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-hero font-sora font-bold leading-tight mb-6"
            >
              Autonomous AI{' '}
              <span className="gradient-text">Agents</span>
              <br />
              That Think & Act
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-body text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Deploy intelligent AI agents that understand, reason, and act autonomously. 
              From voice agents to autonomous chatbots, we build AI that works independently 
              to solve complex business challenges.
            </motion.p>

            {/* AI Expertise Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              <div className="flex items-center space-x-3 p-3 glass dark:glass-dark rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Mic size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Voice Agents</div>
                  <div className="text-xs text-gray-500">Natural conversations</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 glass dark:glass-dark rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Agentic AI</div>
                  <div className="text-xs text-gray-500">Autonomous reasoning</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 glass dark:glass-dark rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Autonomous Chat</div>
                  <div className="text-xs text-gray-500">Self-learning bots</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={onBookDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Book AI Demo</span>
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <BookOpen size={18} />
                <span>Explore Agents</span>
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span>99% autonomous accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
                <span>24/7 agent availability</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
                <span>Multi-modal AI agents</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-4 lg:col-span-5 relative"
          >
            <div className="relative">
              {/* AI Agent Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-64 h-40 glass dark:glass-dark rounded-xl p-6 shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-primary-500 font-mono">AI Agent Active</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-20 right-0 w-56 h-32 glass dark:glass-dark rounded-xl p-4 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Voice Agent</span>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold gradient-text">Listening...</div>
                <div className="text-xs text-gray-500">Natural language processing</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="absolute bottom-0 left-10 w-48 h-28 glass dark:glass-dark rounded-xl p-4 shadow-2xl"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span className="text-xs font-medium">Agentic AI</span>
                </div>
                <div className="text-sm font-mono text-secondary-500">Reasoning...</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        ref={scrollRef}
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-primary-500 transition-colors duration-200"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero 