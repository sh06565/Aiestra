import React from 'react'
import { motion } from 'framer-motion'
import { Database, Brain, Rocket, ArrowRight, Mic, Bot, MessageCircle } from 'lucide-react'

const HowItWorks = ({ onBookDemo }) => {
  const steps = [
    {
      icon: Database,
      title: 'Connect & Train',
      description: 'Integrate your data sources and train AI agents on your specific domain, processes, and business logic.',
      details: [
        'Data integration & preprocessing',
        'Agent training & fine-tuning',
        'Domain-specific knowledge base'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Agent Development',
      description: 'Develop autonomous AI agents with reasoning capabilities, task planning, and decision-making abilities.',
      details: [
        'Autonomous reasoning engine',
        'Task planning & execution',
        'Multi-modal processing'
      ],
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Rocket,
      title: 'Deploy & Scale',
      description: 'Deploy AI agents in production with autonomous operation, continuous learning, and enterprise scaling.',
      details: [
        'Autonomous deployment',
        'Continuous learning',
        'Enterprise scaling'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const agentTypes = [
    {
      icon: Mic,
      title: 'Voice Agents',
      description: 'Natural language processing with real-time speech recognition and human-like responses.',
      color: 'from-primary-500 to-secondary-500'
    },
    {
      icon: Bot,
      title: 'Agentic AI',
      description: 'Autonomous reasoning and decision-making with complex task execution capabilities.',
      color: 'from-secondary-500 to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Autonomous Chat',
      description: 'Self-learning chatbots that improve through interactions and handle complex conversations.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const stepVariants = {
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
    <section id="how-it-works" className="section-padding">
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
            How AI Agents{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From development to autonomous operation, our AI agents learn, reason, and act independently 
            to solve complex business challenges.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-green-500/30 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                  {index + 1}
                </div>

                {/* Step Card */}
                <div className="glass dark:glass-dark rounded-2xl p-8 text-center h-full relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <step.icon size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-h4 font-sora font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
                      >
                        <ArrowRight size={20} className="text-white" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Agent Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-h3 font-sora font-semibold text-center mb-8">
            Types of AI Agents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agentTypes.map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass dark:glass-dark rounded-2xl p-6 text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center mx-auto mb-4`}>
                  <agent.icon size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-sora font-semibold mb-2">
                  {agent.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {agent.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-h3 font-sora font-semibold mb-4">
              Start Your AI Agent Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Deploy autonomous AI agents that work independently to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={onBookDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Deploy AI Agents
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Documentation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks 