import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Shield, Zap, Users, MessageCircle, Bot, Cpu, Settings, TrendingUp, BookOpen, Calculator, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = ({ onBookDemo }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Organic Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black mb-8 leading-tight">
                The all-in-one platform for{' '}
                <span className="font-semibold">private and secure AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Aiestra empowers every business to harness the power of AI with intelligent voice agents, 
                agentic chatbots, and embedded systems that drive real results.
              </p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                onClick={onBookDemo}
                className="inline-flex items-center px-10 py-5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 text-lg"
              >
                <span className="mr-3">Request a demo</span>
                <ArrowRight size={24} />
              </motion.button>
            </motion.div>

            {/* Main Demo Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative mb-32"
            >
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-2xl blur-sm -z-10"></div>
                
                {/* Chat Interface Header */}
                <div className="flex items-center mb-6">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-lg font-medium text-gray-700">Aiestra Knowledge Agent</span>
                  <div className="ml-auto flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-500">Online</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="max-w-xs lg:max-w-md px-4 py-3 bg-gray-200 text-black rounded-2xl">
                      <p className="text-sm leading-relaxed">
                        What are the key performance metrics for Q4?
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="max-w-xs lg:max-w-md px-4 py-3 bg-gray-700 text-white rounded-2xl">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-300">AI Assistant</span>
                      </div>
                      <p className="text-sm leading-relaxed mb-3">
                        Here's what I found for Q4 performance metrics:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">
                            <span className="text-purple-300 font-semibold">Revenue growth:</span> 27.6% compared to Q3
                          </span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">
                            <span className="text-purple-300 font-semibold">Customer satisfaction:</span> 94.2% (up from 91.8%)
                          </span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">
                            <span className="text-purple-300 font-semibold">AI adoption rate:</span> 85% across all departments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Citations */}
                  <div className="ml-4">
                    <div className="flex items-center text-sm text-gray-500 cursor-pointer">
                      <span className="mr-2">Citations</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="mt-2 flex items-center text-xs text-gray-400">
                      <div className="w-4 h-4 bg-red-500 rounded mr-2 flex items-center justify-center">
                        <span className="text-white text-xs">PDF</span>
                      </div>
                      <span>Q4 Performance Report 2024.pdf</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Real AI Capabilities Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-medium text-black mb-8">
                Real AI, Real Results
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                See how businesses are transforming their operations with intelligent AI agents that understand, learn, and act autonomously.
              </p>
              
              {/* AI Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <MessageCircle size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">Natural Conversations</h3>
                  <p className="text-sm text-gray-600">
                    AI that understands context and responds with human-like intelligence
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <Bot size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">Autonomous Actions</h3>
                  <p className="text-sm text-gray-600">
                    Agents that can reason, make decisions, and execute tasks independently
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <Cpu size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">Seamless Integration</h3>
                  <p className="text-sm text-gray-600">
                    Embed AI into your existing workflows and applications effortlessly
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-medium text-black mb-8 leading-tight">
                State-of-the-art AI solutions for enterprise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Unlock the unlimited potential of AI with our comprehensive platform – designed to meet the diverse needs of modern businesses.
              </p>
            </motion.div>

            {/* Three Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-gray-900 text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl blur-sm -z-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium mb-4">Voice Agents</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Transform customer interactions with natural voice AI that understands context and responds with human-like intelligence.
                  </p>
                  <Link to="/solutions/voice-agents" className="inline-flex items-center text-white font-medium hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative bg-purple-50 border border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-2xl blur-sm -z-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium text-black mb-4">Agentic Chatbots</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Intelligent conversational agents that can understand, reason, and take actions autonomously.
                  </p>
                  <Link to="/solutions/agentic-chatbots" className="inline-flex items-center text-black font-medium hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative bg-blue-50 border border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-2xl blur-sm -z-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium text-black mb-4">Embedded AI</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Seamlessly integrate AI into your existing applications and workflows for enhanced productivity.
                  </p>
                  <Link to="/solutions/embedded-ai" className="inline-flex items-center text-black font-medium hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Demo Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-100/15 to-indigo-100/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-medium text-black mb-8 leading-tight">
                Advanced AI capabilities for enterprise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Unlock the full potential of AI with our comprehensive suite of intelligent agents and tools – designed to transform how you work.
              </p>
            </motion.div>

            {/* Two Panel Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left Panel - Voice Agent */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-gray-900 text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl blur-sm -z-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium mb-4">Voice Agent</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Transform customer interactions with natural voice AI that understands context, remembers conversations, and responds with genuine intelligence.
                  </p>
                  <Link to="/solutions/voice-agents" className="inline-flex items-center text-white font-medium hover:translate-x-2 transition-transform duration-300">
                    <span>Learn more</span>
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
                {/* Abstract shape behind panel */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
              </motion.div>

              {/* Right Panel - AI Assistant Demo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative bg-purple-50 border border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-2xl blur-sm -z-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-medium text-black">AI Assistant Demo</h3>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-600 mb-6">
                    Experience how our AI assistant can help with research, analysis, and task automation.
                  </p>
                  
                  {/* Demo Conversation */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-end">
                      <div className="max-w-xs px-3 py-2 bg-gray-200 text-black rounded-lg text-sm">
                        Can you analyze our Q4 sales data?
                      </div>
                    </div>
                    
                    <div className="flex justify-start">
                      <div className="max-w-xs px-3 py-2 bg-purple-100 text-black rounded-lg text-sm">
                        <div className="flex items-center mb-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-xs text-gray-500">AI Assistant</span>
                        </div>
                        <p>I've analyzed your Q4 data. Revenue increased 23% with strong growth in the enterprise segment.</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="max-w-xs px-3 py-2 bg-gray-200 text-black rounded-lg text-sm">
                        Generate a summary report
                      </div>
                    </div>
                    
                    <div className="flex justify-start">
                      <div className="max-w-xs px-3 py-2 bg-purple-100 text-black rounded-lg text-sm">
                        <div className="flex items-center mb-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-xs text-gray-500">AI Assistant</span>
                        </div>
                        <p>✅ Report generated and saved to your dashboard</p>
                      </div>
                    </div>
                  </div>

                  {/* Demo Features */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-purple-100 text-center">
                      <div className="text-xs font-semibold text-purple-600 mb-1">RESEARCH</div>
                      <div className="text-xs text-gray-600">Data Analysis</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-purple-100 text-center">
                      <div className="text-xs font-semibold text-purple-600 mb-1">AUTOMATE</div>
                      <div className="text-xs text-gray-600">Report Generation</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-green-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-orange-100/15 to-yellow-100/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-medium text-black mb-8 leading-tight">
                Build high-impact applications grounded in your data
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <Zap size={48} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-medium text-black mb-4">Scalable</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Take applications from proof of concept to full production with enterprise-focused models that limit costs while maximizing performance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <CheckCircle size={48} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-medium text-black mb-4">Accurate</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fine-tune our models with retrieval-augmented generation (RAG) for verifiable outputs grounded in your sources of truth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <Shield size={48} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-medium text-black mb-4">Secure</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Keep critical data protected with enterprise-grade security, advanced access controls, and private deployment options.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero