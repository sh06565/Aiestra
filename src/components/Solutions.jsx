import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Bot, MessageCircle, Brain, Zap, Shield } from 'lucide-react'

const Solutions = ({ onBookDemo }) => {
  const solutions = [
    {
      icon: Mic,
      title: 'AI Voice Agents',
      description: 'Intelligent voice agents that understand natural language, process speech in real-time, and respond with human-like conversations.',
      features: ['Natural language processing', 'Real-time speech recognition', 'Multi-language support', 'Voice emotion detection'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Bot,
      title: 'Agentic AI Agents',
      description: 'Autonomous AI agents that can reason, plan, and execute complex tasks independently without human intervention.',
      features: ['Autonomous decision making', 'Task planning & execution', 'Self-learning capabilities', 'Multi-step reasoning'],
      color: 'from-secondary-500 to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Autonomous Chatbots',
      description: 'Self-learning chatbots that continuously improve through interactions and handle complex conversations autonomously.',
      features: ['Self-learning algorithms', 'Context awareness', 'Multi-turn conversations', 'Continuous improvement'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Multi-Modal AI Agents',
      description: 'AI agents that can process and respond to text, voice, images, and video simultaneously for comprehensive interactions.',
      features: ['Text & voice processing', 'Image & video analysis', 'Cross-modal understanding', 'Unified responses'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-Time AI Agents',
      description: 'High-performance AI agents that process and respond to inputs in milliseconds for instant interactions.',
      features: ['Sub-second response times', 'High throughput processing', 'Scalable architecture', 'Low latency'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure AI Agents',
      description: 'Enterprise-grade AI agents with built-in security, privacy protection, and compliance features.',
      features: ['End-to-end encryption', 'Privacy compliance', 'Audit trails', 'Secure deployment'],
      color: 'from-red-500 to-orange-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="solutions" className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-sora font-bold mb-4">
            Autonomous AI{' '}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From voice agents to autonomous chatbots, our AI agents work independently 
            to solve complex business challenges with human-like intelligence.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass dark:glass-dark rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-h4 font-sora font-semibold mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-h3 font-sora font-semibold mb-4">
              Ready to Deploy Autonomous AI Agents?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how our AI agents can transform your business operations and customer interactions.
            </p>
            <motion.button
              onClick={onBookDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Schedule AI Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions 