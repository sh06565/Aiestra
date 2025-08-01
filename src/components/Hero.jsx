import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight, BookOpen, Mic, Bot, MessageCircle, Shield, Zap, Heart } from 'lucide-react'
import ParticleNetwork from './ParticleNetwork'

const Hero = ({ onBookDemo }) => {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToNext = () => {
    const nextSection = document.getElementById('solutions')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Psychological Warmth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-light via-background-light/95 to-primary-50/40 dark:from-background-dark dark:via-background-dark/95 dark:to-primary-900/30" />
      
      {/* Particle Network with Emotional Connection */}
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="grid-custom items-center">
          {/* Text Content with Natural Connection */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="col-span-4 lg:col-span-7 text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center space-x-2 mb-6 p-3 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20"
            >
              <Heart size={16} className="text-green-500" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">Built for Humans</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-hero font-sora font-bold leading-tight mb-4 sm:mb-6"
            >
              AI That{' '}
              <span className="gradient-text">Gets You</span>
              <br />
              Like a Trusted Friend
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-body text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience AI that feels natural and intuitive. Our agents understand context, remember conversations, and respond with genuine care—making every interaction feel like talking to someone who truly knows you.
            </motion.p>

            {/* Trust Indicators - Cleaner Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6 sm:mb-8"
            >
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>99.9% accuracy</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span>Always available</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Privacy first</span>
              </div>
            </motion.div>

            {/* AI Expertise Highlights with Natural Appeal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="flex items-center space-x-3 p-4 glass dark:glass-dark rounded-2xl card-hover"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mic size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-xs sm:text-sm">Natural Conversations</div>
                  <div className="text-xs text-gray-500">Feels like talking to a friend</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="flex items-center space-x-3 p-4 glass dark:glass-dark rounded-2xl card-hover"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-secondary-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-xs sm:text-sm">Smart & Reliable</div>
                  <div className="text-xs text-gray-500">Always there when you need it</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="flex items-center space-x-3 p-4 glass dark:glass-dark rounded-2xl card-hover sm:col-span-2 lg:col-span-1"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-xs sm:text-sm">Learns & Grows</div>
                  <div className="text-xs text-gray-500">Gets better with every chat</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced CTA Buttons with Better UX */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={onBookDemo}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <span>See It in Action</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500/30 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center space-x-2 text-sm sm:text-base">
                  <BookOpen size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Learn More</span>
                </div>
              </motion.button>
            </motion.div>

            {/* Social Proof with Natural Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft"></div>
                <span>Trusted by 10,000+ businesses</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse-soft"></div>
                <span>99.9% satisfaction rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse-soft"></div>
                <span>Built with care</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Visual Element with 3D Effects */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="col-span-4 lg:col-span-5 relative hidden md:block"
          >
            <div className="relative">
              {/* AI Agent Cards with 3D Effects */}
              <motion.div
                animate={{ y: [0, -20, 0], rotateY: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-48 sm:w-64 h-32 sm:h-40 glass dark:glass-dark rounded-2xl p-4 sm:p-6 shadow-2xl card-3d"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse-soft"></div>
                  <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse-soft"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-soft"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-primary-500 font-mono">Learning...</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotateY: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-16 sm:top-20 right-0 w-44 sm:w-56 h-24 sm:h-32 glass dark:glass-dark rounded-2xl p-3 sm:p-4 shadow-2xl card-3d"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Voice Assistant</span>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft"></div>
                </div>
                <div className="text-lg sm:text-2xl font-bold gradient-text">Listening...</div>
                <div className="text-xs text-gray-500">Understanding you</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], rotateY: [0, 3, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="absolute bottom-0 left-8 sm:left-10 w-40 sm:w-48 h-24 sm:h-28 glass dark:glass-dark rounded-2xl p-3 sm:p-4 shadow-2xl card-3d"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span className="text-xs font-medium">Smart Assistant</span>
                </div>
                <div className="text-sm font-mono text-secondary-500">Thinking...</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.button
        ref={scrollRef}
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-primary-500 transition-colors duration-200"
        >
          <span className="text-xs font-medium">Discover More</span>
          <ChevronDown size={16} className="sm:w-5 sm:h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero 