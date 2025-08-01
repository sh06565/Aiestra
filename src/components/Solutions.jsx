import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Bot, MessageCircle, Brain, Zap, Shield, Heart, Users, Lock, Star, ArrowRight } from 'lucide-react'

const Solutions = ({ onBookDemo }) => {
  const solutions = [
    {
      icon: Mic,
      title: 'Voice AI That Feels Natural',
      description: 'AI that understands not just your words, but the meaning behind them. Our voice assistants recognize context, respond naturally, and create conversations that feel effortless and genuine.',
      features: ['Natural understanding', 'Context awareness', 'Conversational flow', 'Personal touch'],
      color: 'from-primary-500 to-primary-600',
      trustLevel: '99.9%',
      badge: 'Most Popular'
    },
    {
      icon: Bot,
      title: 'Smart AI You Can Trust',
      description: 'AI that makes decisions with transparency and reliability. Built with clear reasoning, human oversight, and safety-first principles, ensuring every action is trustworthy and aligned with your needs.',
      features: ['Clear decision-making', 'Human oversight', 'Explainable AI', 'Safety first'],
      color: 'from-secondary-500 to-purple-500',
      trustLevel: '100%',
      badge: 'Fully Secure'
    },
    {
      icon: MessageCircle,
      title: 'Conversational AI That Cares',
      description: 'Chatbots that remember your preferences, understand your needs, and respond with genuine helpfulness. Every conversation feels personal and meaningful.',
      features: ['Memory & context', 'Personalized responses', 'Natural flow', 'Helpful interactions'],
      color: 'from-green-500 to-emerald-500',
      trustLevel: '98.5%',
      badge: 'User-Focused'
    },
    {
      icon: Brain,
      title: 'Multi-Sensory AI',
      description: 'AI that sees, hears, and understands like a human. Processes text, voice, images, and video with natural intelligence, creating comprehensive understanding of your needs.',
      features: ['Multi-modal processing', 'Natural understanding', 'Context awareness', 'Human-like perception'],
      color: 'from-purple-500 to-pink-500',
      trustLevel: '99.2%',
      badge: 'Advanced AI'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast AI',
      description: 'AI that responds instantly while maintaining quality. Delivers natural responses in milliseconds, ensuring your users never wait and always feel valued.',
      features: ['Instant responses', 'High accuracy', 'Scalable performance', 'Real-time processing'],
      color: 'from-yellow-500 to-orange-500',
      trustLevel: '99.8%',
      badge: 'Ultra Fast'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade AI',
      description: 'AI you can trust with your most sensitive data. Built with enterprise-grade security, privacy protection, and compliance, ensuring your information is always safe.',
      features: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Zero data breaches'],
      color: 'from-red-500 to-orange-500',
      trustLevel: '100%',
      badge: 'Enterprise Ready'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="solutions" className="section-padding bg-gradient-to-br from-gray-50/50 via-background-light to-primary-50/30 dark:from-gray-900/50 dark:via-background-dark dark:to-primary-900/20">
      <div className="container-custom">
        {/* Section Header with Natural Trust */}
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
            className="inline-flex items-center space-x-2 mb-6 p-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20"
          >
            <Shield size={16} className="text-blue-500" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Trusted by 10,000+ Businesses</span>
          </motion.div>

          <h2 className="text-h2 font-sora font-bold mb-6">
            AI Solutions That{' '}
            <span className="gradient-text">Work for You</span>
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
            Experience AI that doesn't just solve problems—it understands your needs, builds relationships, and creates meaningful connections. 
            Every solution is designed to feel natural, trustworthy, and genuinely helpful.
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
              <span className="text-sm font-medium">99.9% Customer Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={16} className="text-blue-500" />
              <span className="text-sm font-medium">10M+ Interactions Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock size={16} className="text-green-500" />
              <span className="text-sm font-medium">Zero Security Breaches</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Solutions Grid with Natural Appeal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="glass dark:glass-dark rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-2xl card-3d">
                {/* Trust Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <solution.icon size={28} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-700 dark:text-primary-400 mb-1">
                      {solution.badge}
                    </div>
                    <div className="text-xs text-gray-500">{solution.trustLevel} Reliable</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-h4 font-sora font-semibold mb-4 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {solution.description}
                </p>

                {/* Features with Natural Appeal */}
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Natural Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <Heart size={14} className="text-red-500" />
                    <span className="text-xs text-gray-500">Built with care</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section with Better UX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="glass dark:glass-dark rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart size={20} className="text-red-500" />
              <h3 className="text-h3 font-sora font-semibold">
                Ready to Experience Better AI?
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Join thousands of businesses that trust our AI to understand their users, build meaningful relationships, and create exceptional experiences that feel natural and helpful.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                SOC 2 Certified
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                GDPR Compliant
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                24/7 Support
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
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions 