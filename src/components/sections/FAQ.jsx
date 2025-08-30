import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = ({ onBookDemo }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How autonomous are your AI agents?',
      answer: 'Our AI agents operate with 99% autonomy, making independent decisions and executing complex tasks without human intervention. They can reason, plan, and adapt to new situations while maintaining safety protocols.'
    },
    {
      question: 'What types of AI agents do you offer?',
      answer: 'We specialize in three main types: Voice Agents for natural conversations, Agentic AI for autonomous reasoning and decision-making, and Autonomous Chatbots that learn and improve continuously through interactions.'
    },
    {
      question: 'How do your voice agents handle natural language?',
      answer: 'Our voice agents use advanced natural language processing to understand context, intent, and emotion. They can handle multi-turn conversations, recognize accents, and respond with human-like speech patterns.'
    },
    {
      question: 'Can AI agents learn and improve over time?',
      answer: 'Yes, all our AI agents are designed for continuous learning. They analyze interactions, identify patterns, and automatically improve their responses and decision-making capabilities without manual intervention.'
    },
    {
      question: 'How secure are autonomous AI agents?',
      answer: 'Our AI agents include enterprise-grade security with end-to-end encryption, privacy compliance (GDPR, SOC 2), audit trails, and secure deployment protocols. They operate within defined safety boundaries.'
    },
    {
      question: 'What\'s the deployment timeline for AI agents?',
      answer: 'Most AI agents can be deployed in 2-4 weeks. Voice agents and chatbots are typically faster (2-3 weeks), while complex agentic AI systems may take 3-4 weeks for full autonomous operation.'
    },
    {
      question: 'Do AI agents require ongoing maintenance?',
      answer: 'Our AI agents are designed for minimal maintenance. They self-optimize, handle updates autonomously, and only require human oversight for major strategic changes or new capabilities.'
    },
    {
      question: 'How do you ensure AI agent safety and compliance?',
      answer: 'We implement multiple safety layers including decision boundaries, human oversight capabilities, compliance monitoring, and ethical AI frameworks. All agents operate within predefined safety parameters.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
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
            AI Agent{' '}
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our autonomous AI agents, voice agents, and chatbot capabilities.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass dark:glass-dark rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-sora font-semibold pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-primary-500" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      id={`faq-answer-${index}`}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-h3 font-sora font-semibold mb-4">
              Ready to Deploy AI Agents?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team is here to help you understand how autonomous AI agents can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={onBookDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Schedule AI Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Contact Support
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 