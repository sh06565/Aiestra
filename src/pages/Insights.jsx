import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Zap, BarChart3 } from 'lucide-react'

const Insights = ({ onBookDemo }) => {
  const insights = [
    {
      id: 'ai-adoption-trends',
      title: 'AI Adoption Trends 2024',
      subtitle: 'How businesses are transforming with intelligent automation',
      description: 'Discover the latest trends in AI adoption across industries and how leading companies are leveraging intelligent automation to drive growth.',
      category: 'Industry Trends',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 'voice-commerce',
      title: 'The Rise of Voice Commerce',
      subtitle: 'Transforming customer interactions through natural language',
      description: 'Explore how voice-enabled AI is revolutionizing customer service and e-commerce, creating more intuitive and accessible shopping experiences.',
      category: 'Technology',
      readTime: '7 min read'
    },
    {
      id: 'automation-roi',
      title: 'Measuring AI Automation ROI',
      subtitle: 'Quantifying the business impact of intelligent systems',
      description: 'Learn how to measure and maximize the return on investment from AI automation initiatives, with real-world case studies and metrics.',
      category: 'Business Strategy',
      readTime: '6 min read'
    },
    {
      id: 'customer-experience',
      title: 'AI-Powered Customer Experience',
      subtitle: 'Building deeper connections through intelligent interactions',
      description: 'See how AI is enhancing customer experience across touchpoints, from initial contact to post-purchase support and retention.',
      category: 'Customer Experience',
      readTime: '8 min read'
    },
    {
      id: 'enterprise-integration',
      title: 'Enterprise AI Integration',
      subtitle: 'Seamlessly embedding intelligence into existing workflows',
      description: 'Discover best practices for integrating AI solutions into enterprise environments while maintaining security, compliance, and operational efficiency.',
      category: 'Implementation',
      readTime: '10 min read'
    },
    {
      id: 'future-of-work',
      title: 'The Future of Work with AI',
      subtitle: 'How intelligent automation is reshaping the workplace',
      description: 'Explore how AI is augmenting human capabilities and creating new opportunities for collaboration, creativity, and productivity.',
      category: 'Workplace',
      readTime: '9 min read'
    }
  ]

  const stats = [
    { label: 'Companies using AI', value: '87%', icon: TrendingUp },
    { label: 'Average ROI increase', value: '340%', icon: BarChart3 },
    { label: 'Customer satisfaction', value: '94%', icon: Users },
    { label: 'Time saved per task', value: '65%', icon: Zap }
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
              AI Insights & Trends
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay ahead with the latest insights on AI adoption, industry trends, and transformative business strategies.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon size={32} className="text-gray-400" />
                </div>
                <div className="text-3xl font-semibold text-black mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-32"
          >
            {insights.filter(insight => insight.featured).map((insight, index) => (
              <div key={insight.id} className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-12 hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-2xl blur-sm -z-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {insight.category}
                    </span>
                    <span className="text-sm text-gray-500 ml-4">{insight.readTime}</span>
                  </div>
                  
                  <h2 className="text-4xl font-medium text-black mb-6 leading-tight">
                    {insight.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {insight.subtitle}
                  </p>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {insight.description}
                  </p>
                  
                  <button className="inline-flex items-center text-black font-medium hover:translate-x-2 transition-transform duration-300">
                    <span className="text-lg">Read full article</span>
                    <ArrowRight size={24} className="ml-3" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            {insights.filter(insight => !insight.featured).map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:border-gray-300 group-hover:bg-white/90">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-2xl blur-sm -z-10"></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                      <span className="text-sm text-gray-500">{insight.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-medium text-black leading-tight">
                      {insight.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {insight.subtitle}
                    </p>
                    
                    <p className="text-base text-gray-600 leading-relaxed">
                      {insight.description}
                    </p>
                    
                    <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform duration-300 pt-4">
                      <span className="text-base">Read more</span>
                      <ArrowRight size={20} className="ml-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-medium text-black mb-8">
                Ready to implement these insights?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Transform your business with AI solutions that deliver measurable results. Our team of experts will help you implement these strategies effectively.
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

export default Insights 