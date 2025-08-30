import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Solutions = ({ onBookDemo }) => {
  const solutions = [
    {
      id: 'voice-agents',
      title: 'AI Voice Agents',
      description: 'Natural voice interactions that understand context and respond with human-like intelligence.',
      features: ['Natural speech recognition', 'Context awareness', 'Multi-language support', 'Real-time processing'],
      color: 'from-blue-500 to-purple-500',
      isPrimary: true,
      demo: {
        title: 'Voice Agent Demo',
        messages: [
          { type: 'user', text: 'Hello, I need help with my order' },
          { type: 'ai', text: 'Hi! I can help you with your order. I can see you have an order #12345. What would you like to know?' },
          { type: 'user', text: 'When will it be delivered?' },
          { type: 'ai', text: 'Your order is scheduled for delivery tomorrow between 2-4 PM. Would you like me to send you a notification when it\'s out for delivery?' }
        ]
      }
    },
    {
      id: 'agentic-chatbots',
      title: 'Agentic AI Chatbots',
      description: 'Intelligent conversational agents that can understand, reason, and take actions autonomously.',
      features: ['Autonomous decision making', 'Context understanding', 'Multi-step reasoning', 'Action execution'],
      color: 'from-green-500 to-emerald-500',
      demo: {
        title: 'Agentic Chatbot Demo',
        messages: [
          { type: 'user', text: 'I need to schedule a meeting with the team' },
          { type: 'ai', text: 'I\'ll help you schedule that meeting. I can see your calendar and your team\'s availability. What time works best for you?' },
          { type: 'user', text: 'Tomorrow at 2 PM' },
          { type: 'ai', text: 'Perfect! I\'ve scheduled the meeting for tomorrow at 2 PM and sent invites to your team. I\'ve also reserved the conference room and added it to everyone\'s calendar.' }
        ]
      }
    },
    {
      id: 'embedded-ai',
      title: 'Embedded AI Systems',
      description: 'AI seamlessly integrated into your existing applications and workflows.',
      features: ['Seamless integration', 'Workflow automation', 'Real-time processing', 'Scalable architecture'],
      color: 'from-purple-500 to-pink-500',
      demo: {
        title: 'Embedded AI Demo',
        messages: [
          { type: 'user', text: 'Analyze this customer feedback' },
          { type: 'ai', text: 'I\'ve analyzed the feedback and identified key themes: product quality (positive), delivery speed (needs improvement), and customer service (excellent). I\'ve also flagged 3 urgent issues for immediate attention.' },
          { type: 'user', text: 'Generate a response template' },
          { type: 'ai', text: 'Here\'s a personalized response template based on the feedback patterns. I\'ve included specific solutions for the delivery issues and highlighted the positive aspects to maintain customer satisfaction.' }
        ]
      }
    },
    {
      id: 'agentic-automations',
      title: 'Agentic AI Automations',
      description: 'Intelligent automation systems that can learn, adapt, and optimize processes autonomously.',
      features: ['Process optimization', 'Learning capabilities', 'Adaptive workflows', 'Performance monitoring'],
      color: 'from-orange-500 to-red-500',
      demo: {
        title: 'Automation Demo',
        messages: [
          { type: 'user', text: 'Optimize our inventory management' },
          { type: 'ai', text: 'I\'ve analyzed your inventory patterns and identified optimization opportunities. I\'ve automatically adjusted reorder points and created a predictive model that reduces stockouts by 40%.' },
          { type: 'user', text: 'Show me the savings' },
          { type: 'ai', text: 'Based on the optimizations, you\'ll save approximately $15,000 monthly in carrying costs and reduce stockouts by 40%. The system will continue learning and improving over time.' }
        ]
      }
    }
  ]

  return (
    <section className="bg-white py-32">
      {/* Blur Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-100/15 to-red-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black mb-12 leading-tight">
              AI Solutions that work for you
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your business with intelligent AI solutions designed for real-world applications.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group cursor-pointer ${solution.isPrimary ? 'lg:col-span-2' : ''}`}
              >
                <Link to={`/solutions/${solution.id}`}>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-10 h-full hover:shadow-xl transition-all duration-500 hover:border-gray-300 group-hover:bg-white/90">
                    {/* Subtle blur effect behind each card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-2xl blur-sm -z-10"></div>
                    
                    {/* Content */}
                    <div className="space-y-8 relative z-10">
                      <h3 className="text-4xl font-medium text-black leading-tight">
                        {solution.title}
                      </h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-4">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-base text-gray-600">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Chat Interface Demo */}
                      <div className="mt-8">
                        <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-200/50">
                          <div className="flex items-center mb-4">
                            <div className="flex space-x-2 mr-3">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            <span className="text-sm text-gray-500 font-medium">{solution.demo.title}</span>
                          </div>
                          
                          <div className="space-y-4">
                            {solution.demo.messages.map((message, msgIndex) => (
                              <div key={msgIndex} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                                  message.type === 'user' 
                                    ? 'bg-gray-200 text-black' 
                                    : 'bg-gray-700 text-white'
                                }`}>
                                  {message.type === 'ai' && (
                                    <div className="flex items-center mb-2">
                                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                                      <span className="text-xs text-gray-300">AI Assistant</span>
                                    </div>
                                  )}
                                  <p className="text-sm leading-relaxed">{message.text}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform duration-300 pt-6">
                        <span className="text-xl">Learn more</span>
                        <ArrowRight size={24} className="ml-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-medium text-black mb-8">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Our AI solutions are designed to integrate seamlessly with your existing systems and workflows, providing immediate value while scaling with your business needs.
              </p>
              <button
                onClick={onBookDemo}
                className="inline-flex items-center px-10 py-5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 text-lg"
              >
                <span className="mr-3">Request a demo</span>
                <ArrowRight size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Solutions 