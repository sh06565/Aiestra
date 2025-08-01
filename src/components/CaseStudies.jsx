import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Mic, Bot, MessageCircle } from 'lucide-react'

const CaseStudies = ({ onBookDemo }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const caseStudies = [
    {
      company: 'TechFlow Inc.',
      industry: 'E-commerce',
      title: 'AI Voice Agent for Customer Service',
      description: 'TechFlow deployed our autonomous voice agents to handle customer inquiries 24/7 with natural conversations.',
      results: [
        { icon: TrendingUp, label: 'Reduced call wait time', value: '85%', color: 'text-green-500' },
        { icon: Users, label: 'Customer satisfaction', value: '4.8/5', color: 'text-blue-500' },
        { icon: DollarSign, label: 'Cost savings', value: '$2.1M', color: 'text-purple-500' }
      ],
      quote: '"Our AI voice agents handle 80% of customer inquiries autonomously, providing instant, accurate responses that customers love."',
      author: 'Sarah Chen',
      role: 'VP of Customer Success',
      agentType: 'Voice Agent',
      icon: Mic
    },
    {
      company: 'HealthSync',
      industry: 'Healthcare',
      title: 'Agentic AI for Patient Care',
      description: 'HealthSync implemented autonomous AI agents that reason about patient data and provide personalized care recommendations.',
      results: [
        { icon: TrendingUp, label: 'Diagnosis accuracy', value: '96%', color: 'text-green-500' },
        { icon: Users, label: 'Patient outcomes', value: 'Improved 40%', color: 'text-blue-500' },
        { icon: DollarSign, label: 'Care efficiency', value: '3.2x', color: 'text-purple-500' }
      ],
      quote: '"Our agentic AI autonomously analyzes patient data and provides insights that help doctors make better decisions."',
      author: 'Dr. Michael Rodriguez',
      role: 'Chief Medical Officer',
      agentType: 'Agentic AI',
      icon: Bot
    },
    {
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      title: 'Autonomous Chatbot for Banking',
      description: 'FinTech Solutions deployed self-learning chatbots that handle complex financial queries and transactions autonomously.',
      results: [
        { icon: TrendingUp, label: 'Query resolution', value: '94%', color: 'text-green-500' },
        { icon: Users, label: 'User engagement', value: 'Increased 60%', color: 'text-blue-500' },
        { icon: DollarSign, label: 'Operational savings', value: '$1.8M', color: 'text-purple-500' }
      ],
      quote: '"Our autonomous chatbots learn from every interaction and continuously improve their ability to serve customers."',
      author: 'Jennifer Park',
      role: 'Head of Digital Innovation',
      agentType: 'Autonomous Chat',
      icon: MessageCircle
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
    <section id="case-studies" className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-h2 font-sora font-bold mb-4">
            AI Agent{' '}
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            See how leading companies are deploying autonomous AI agents to transform their operations 
            and deliver exceptional customer experiences.
          </p>
        </motion.div>

        {/* Case Study Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass dark:glass-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        {currentCaseStudy.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-sora font-semibold">
                        {currentCaseStudy.company}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {currentCaseStudy.industry}
                      </p>
                    </div>
                  </div>

                  {/* Agent Type Badge */}
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center`}>
                      <CurrentIcon size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-primary-500">
                      {currentCaseStudy.agentType}
                    </span>
                  </div>

                  <h4 className="text-h3 font-sora font-semibold mb-3 sm:mb-4">
                    {currentCaseStudy.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    {currentCaseStudy.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {currentCaseStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                          <result.icon size={18} className={`sm:w-6 sm:h-6 ${result.color}`} />
                        </div>
                        <div className="text-xl sm:text-2xl font-bold gradient-text mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {result.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-primary-500 pl-4 sm:pl-6 mb-4 sm:mb-6">
                    <p className="text-gray-600 dark:text-gray-300 italic mb-3 sm:mb-4 text-sm sm:text-base">
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
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <CurrentIcon size={20} className="sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h5 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{currentCaseStudy.agentType} Dashboard</h5>
                      <p className="text-xs sm:text-sm text-gray-500">Real-time agent performance & analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center space-x-3 sm:space-x-4 mt-6 sm:mt-8">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 glass dark:glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              aria-label="Previous case study"
            >
              <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary-500' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 glass dark:glass-dark rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              aria-label="Next case study"
            >
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="glass dark:glass-dark rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-h3 font-sora font-semibold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
              Join the companies already transforming their operations with autonomous AI agents.
            </p>
            <motion.button
              onClick={onBookDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm sm:text-base"
            >
              Start Your AI Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies 