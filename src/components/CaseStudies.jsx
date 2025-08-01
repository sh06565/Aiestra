import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Mic, Bot, MessageCircle, Heart, Star, Shield, Zap } from 'lucide-react'

const CaseStudies = ({ onBookDemo }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const caseStudies = [
    {
      company: 'TechFlow Inc.',
      industry: 'E-commerce',
      title: 'AI That Understands Customers',
      description: 'TechFlow transformed their customer service with AI that doesn\'t just solve problems—it understands context and responds naturally. The result? Customers who feel heard and valued.',
      results: [
        { icon: TrendingUp, label: 'Customer satisfaction', value: '4.9/5', color: 'text-green-500' },
        { icon: Users, label: 'Customer connection', value: '98%', color: 'text-blue-500' },
        { icon: DollarSign, label: 'Revenue increase', value: '+45%', color: 'text-purple-500' }
      ],
      quote: '"Our AI doesn\'t just answer questions—it understands context, remembers preferences, and creates genuine connections. Our customers feel like they\'re talking to someone who truly knows them."',
      author: 'Sarah Chen',
      role: 'VP of Customer Success',
      agentType: 'Smart Voice AI',
      icon: Mic,
      quality: 'Natural',
      trustScore: '99.9%'
    },
    {
      company: 'HealthSync',
      industry: 'Healthcare',
      title: 'Trustworthy AI for Patient Care',
      description: 'HealthSync implemented AI that patients trust with their most sensitive information. The AI builds confidence through transparency, understanding, and reliable support.',
      results: [
        { icon: TrendingUp, label: 'Patient trust', value: '96%', color: 'text-green-500' },
        { icon: Users, label: 'Care outcomes', value: '+40%', color: 'text-blue-500' },
        { icon: DollarSign, label: 'Efficiency gains', value: '3.2x', color: 'text-purple-500' }
      ],
      quote: '"Our AI creates a comfortable space where patients feel safe sharing their concerns. It\'s not just about medical accuracy—it\'s about building trust and providing support when people need it most."',
      author: 'Dr. Michael Rodriguez',
      role: 'Chief Medical Officer',
      agentType: 'Trustworthy AI',
      icon: Bot,
      quality: 'Reliable',
      trustScore: '100%'
    },
    {
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      title: 'Natural Conversations in Banking',
      description: 'FinTech Solutions deployed AI that makes complex financial decisions feel personal and approachable. The AI understands financial concerns and provides reassurance through natural, caring conversations.',
      results: [
        { icon: TrendingUp, label: 'User confidence', value: '94%', color: 'text-green-500' },
        { icon: Users, label: 'Engagement rate', value: '+60%', color: 'text-blue-500' },
        { icon: DollarSign, label: 'Trust metrics', value: '4.8/5', color: 'text-purple-500' }
      ],
      quote: '"Financial decisions are deeply personal and often stressful. Our AI provides the support and trust that customers need, making complex financial conversations feel natural and reassuring."',
      author: 'Jennifer Park',
      role: 'Head of Digital Innovation',
      agentType: 'Natural AI',
      icon: MessageCircle,
      quality: 'Supportive',
      trustScore: '98.5%'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCaseStudy = caseStudies[currentIndex]
  const CurrentIcon = currentCaseStudy.icon

  return (
    <section id="case-studies" className="section-padding bg-gradient-to-br from-gray-50/50 via-background-light to-primary-50/30 dark:from-gray-900/50 dark:via-background-dark dark:to-primary-900/20">
      <div className="container-custom">
        {/* Section Header with Natural Connection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 mb-6 p-3 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
          >
            <Heart size={16} className="text-purple-500" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-400">Real Stories, Real Results</span>
          </motion.div>

          <h2 className="text-h2 font-sora font-bold mb-6">
            Success Stories That{' '}
            <span className="gradient-text">Inspire</span>
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
            Discover how our intelligent AI is transforming businesses by creating genuine connections and meaningful relationships. 
            These aren't just success metrics—they're stories of trust, understanding, and real transformation.
          </p>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            <div className="flex items-center space-x-2">
              <Star size={16} className="text-yellow-500" />
              <span className="text-sm font-medium">4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart size={16} className="text-red-500" />
              <span className="text-sm font-medium">98% Customer Connection</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-green-500" />
              <span className="text-sm font-medium">100% Trust Score</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Case Study Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass dark:glass-dark rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content with Natural Depth */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg sm:text-xl">
                        {currentCaseStudy.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-sora font-semibold">
                        {currentCaseStudy.company}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {currentCaseStudy.industry}
                      </p>
                    </div>
                  </div>

                  {/* Quality Badge */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center`}>
                      <CurrentIcon size={16} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary-500">
                        {currentCaseStudy.agentType}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Heart size={12} className="text-red-500" />
                        <span className="text-xs text-gray-500">{currentCaseStudy.quality}</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-h3 font-sora font-semibold mb-4 leading-tight">
                    {currentCaseStudy.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-sm sm:text-base">
                    {currentCaseStudy.description}
                  </p>

                  {/* Enhanced Results with Natural Context */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {currentCaseStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 border border-primary-500/10"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <result.icon size={24} className={result.color} />
                        </div>
                        <div className="text-2xl font-bold gradient-text mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {result.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Quote with Natural Impact */}
                  <blockquote className="border-l-4 border-primary-500 pl-6 mb-6 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 p-4 rounded-r-2xl">
                    <p className="text-gray-600 dark:text-gray-300 italic mb-4 text-sm sm:text-base leading-relaxed">
                      "{currentCaseStudy.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {currentCaseStudy.author}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {currentCaseStudy.role}
                      </div>
                    </div>
                  </blockquote>

                  {/* Trust Score */}
                  <div className="flex items-center space-x-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                    <Shield size={16} className="text-green-500" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">
                      Trust Score: {currentCaseStudy.trustScore}
                    </span>
                  </div>
                </div>

                {/* Enhanced Visual with Natural Context */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <CurrentIcon size={32} className="sm:w-10 sm:h-10 text-white" />
                      </div>
                      <h5 className="text-lg sm:text-xl font-semibold mb-3">{currentCaseStudy.agentType}</h5>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                        Creating {currentCaseStudy.quality.toLowerCase()} experiences
                      </p>
                      
                      {/* Quality Indicator */}
                      <div className="flex items-center justify-center space-x-2">
                        <Heart size={16} className="text-red-500 animate-pulse-soft" />
                        <span className="text-xs text-gray-500">Intelligent & Caring</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 glass dark:glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 shadow-lg"
              aria-label="Previous case study"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Enhanced Dots */}
            <div className="flex items-center space-x-3">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 glass dark:glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 shadow-lg"
              aria-label="Next case study"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Enhanced CTA with Better UX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="glass dark:glass-dark rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart size={24} className="text-red-500" />
              <h3 className="text-h3 font-sora font-semibold">
                Ready to Create Your Success Story?
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Join the companies that are building meaningful relationships with their customers through intelligent AI. 
              Let's create a story of trust, understanding, and real transformation together.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                Intelligent & Caring
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                Trust-Building
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                User-Focused
              </div>
            </div>

            <motion.button
              onClick={onBookDemo}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500/30 text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <span>Start Your AI Journey</span>
                <Zap size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies 