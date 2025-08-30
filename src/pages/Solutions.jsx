import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { Solutions } from '../components'

const SolutionsPage = ({ onBookDemo }) => {
  const { solutionId } = useParams()

  // If no solutionId, show the main solutions overview
  if (!solutionId) {
    return <Solutions onBookDemo={onBookDemo} />
  }

  const solutions = {
    'voice-agents': {
      title: 'AI Voice Agents',
      subtitle: 'VOICE AI',
      description: 'Natural voice interactions that understand context and respond with human-like intelligence.',
      longDescription: 'Transform customer interactions with AI voice agents that understand natural speech, maintain context across conversations, and provide intelligent responses in real-time.',
      features: [
        'Natural speech recognition and synthesis',
        'Context awareness across conversations',
        'Multi-language support',
        'Real-time processing and response',
        'Emotion detection and response',
        'Integration with existing systems'
      ],
      demo: {
        type: 'voice',
        title: 'Voice Agent Demo',
        messages: [
          { type: 'user', text: 'Hello, I need help with my order' },
          { type: 'agent', text: 'Hi! I can help you with your order. I can see you have an order #12345. What would you like to know?' },
          { type: 'user', text: 'When will it be delivered?' },
          { type: 'agent', text: 'Your order is scheduled for delivery tomorrow between 2-4 PM. Would you like me to send you a notification when it\'s out for delivery?' }
        ]
      }
    },
    'agentic-chatbots': {
      title: 'Agentic AI Chatbots',
      subtitle: 'AGENTIC AI',
      description: 'Intelligent conversational agents that can understand, reason, and take actions autonomously.',
      longDescription: 'Deploy intelligent conversational agents that can understand complex queries, reason through multi-step processes, and take autonomous actions to solve problems.',
      features: [
        'Autonomous decision making',
        'Multi-step reasoning capabilities',
        'Context understanding and memory',
        'Action execution and task completion',
        'Learning from interactions',
        'Integration with business systems'
      ],
      demo: {
        type: 'agentic',
        title: 'Agentic Chatbot Demo',
        messages: [
          { type: 'user', text: 'I need to book a meeting room and order lunch for tomorrow' },
          { type: 'agent', text: 'I\'ll help you with that. Let me check available meeting rooms and lunch options for tomorrow.' },
          { type: 'user', text: 'Great, what\'s available?' },
          { type: 'agent', text: 'I found Conference Room A available at 12 PM and can order sandwiches from the deli. I\'ve booked the room and placed the order. You\'ll receive confirmations shortly.' }
        ]
      }
    },
    'embedded-ai': {
      title: 'Embedded AI Systems',
      subtitle: 'EMBEDDED AI',
      description: 'AI seamlessly integrated into your existing applications and workflows.',
      longDescription: 'Integrate AI capabilities directly into your existing applications, workflows, and business processes for seamless automation and intelligent decision-making.',
      features: [
        'Seamless application integration',
        'Workflow automation and optimization',
        'Real-time data processing',
        'Scalable architecture design',
        'Custom model deployment',
        'Performance monitoring and analytics'
      ],
      demo: {
        type: 'embedded',
        title: 'Embedded AI Demo',
        messages: [
          { type: 'user', text: 'Can you analyze this customer data and suggest improvements?' },
          { type: 'agent', text: 'I\'ve analyzed the customer data and identified several opportunities. The AI system has processed 10,000+ records and found patterns.' },
          { type: 'user', text: 'What are the key insights?' },
          { type: 'agent', text: 'Key insights: 1) 40% of customers prefer mobile interactions, 2) Peak usage is 2-4 PM, 3) Support tickets reduced by 60% with AI integration.' }
        ]
      }
    },
    'agentic-automations': {
      title: 'Agentic AI Automations',
      subtitle: 'AUTOMATION AI',
      description: 'Intelligent automation systems that can learn, adapt, and optimize processes autonomously.',
      longDescription: 'Deploy intelligent automation systems that continuously learn from data, adapt to changing conditions, and optimize business processes for maximum efficiency.',
      features: [
        'Process optimization and learning',
        'Adaptive workflow management',
        'Performance monitoring and analytics',
        'Predictive maintenance capabilities',
        'Continuous improvement algorithms',
        'Multi-system integration'
      ],
      demo: {
        type: 'automation',
        title: 'Automation Demo',
        messages: [
          { type: 'user', text: 'How is the automation system performing this week?' },
          { type: 'agent', text: 'The automation system has processed 15,000 tasks this week with 99.2% accuracy. I\'ve identified 3 optimization opportunities.' },
          { type: 'user', text: 'What optimizations can we implement?' },
          { type: 'agent', text: 'Recommended optimizations: 1) Reduce processing time by 25% with parallel workflows, 2) Implement predictive scheduling, 3) Add real-time monitoring alerts.' }
        ]
      }
    }
  }

  const solution = solutions[solutionId]

  if (!solution) {
    return (
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-normal text-black mb-4">Solution not found</h1>
            <p className="text-gray-600 mb-8">The solution you're looking for doesn't exist.</p>
            <Link to="/solutions" className="btn-primary">
              Back to Solutions
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* Solution Page */}
      <section className="bg-white min-h-screen">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-8">
                  {/* Category Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {solution.subtitle}
                    </span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-normal text-black leading-tight"
                  >
                    {solution.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                  >
                    {solution.longDescription}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-medium text-black">Key Features</h3>
                    <ul className="space-y-3">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <button
                      onClick={onBookDemo}
                      className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                      <span className="mr-2">Request a demo</span>
                      <ArrowRight size={20} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Interactive Demo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Blur Background */}
                <div className="blur-background absolute inset-0 rounded-lg"></div>
                
                {/* Demo Container */}
                <div className="chat-interface p-8 relative z-10">
                  {/* Demo Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">{solution.demo.title}</span>
                  </div>

                  {/* Chat Interface */}
                  <div className="space-y-4">
                    {solution.demo.messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`rounded-lg px-4 py-3 max-w-xs ${
                          message.type === 'user' 
                            ? 'bg-gray-100 text-gray-800' 
                            : 'bg-gray-900 text-white'
                        }`}>
                          {message.type === 'agent' && (
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-gray-400">AI Assistant</span>
                            </div>
                          )}
                          <p className="text-sm">
                            {message.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SolutionsPage 