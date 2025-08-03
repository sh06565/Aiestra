import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Clock, DollarSign, CheckCircle } from 'lucide-react'

const CaseStudies = ({ onBookDemo }) => {
  const caseStudies = [
    {
      id: 'ecommerce-voice',
      title: 'E-commerce Voice Assistant',
      company: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'High cart abandonment rates and poor customer support response times',
      solution: 'Implemented AI voice agents for 24/7 customer support and order tracking',
      results: {
        metrics: [
          { label: 'Cart abandonment reduction', value: '67%', icon: TrendingUp },
          { label: 'Customer satisfaction', value: '94%', icon: Users },
          { label: 'Response time improvement', value: '85%', icon: Clock },
          { label: 'Revenue increase', value: '$2.4M', icon: DollarSign }
        ],
        highlights: [
          'Voice agents handle 80% of customer inquiries automatically',
          'Average response time reduced from 4 hours to 30 seconds',
          'Customer support costs reduced by 60%',
          'Order tracking accuracy improved to 99.8%'
        ]
      },
      featured: true
    },
    {
      id: 'healthcare-automation',
      title: 'Healthcare Appointment Scheduling',
      company: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Manual appointment scheduling causing long wait times and scheduling conflicts',
      solution: 'Deployed intelligent chatbot system for automated appointment booking and management',
      results: {
        metrics: [
          { label: 'Appointment booking time', value: '90%', icon: Clock },
          { label: 'Patient satisfaction', value: '91%', icon: Users },
          { label: 'Staff efficiency', value: '75%', icon: TrendingUp },
          { label: 'No-show reduction', value: '45%', icon: CheckCircle }
        ],
        highlights: [
          'Automated system handles 70% of appointment bookings',
          'Average booking time reduced from 15 minutes to 2 minutes',
          'Staff can focus on complex patient care tasks',
          'Automated reminders reduce no-shows significantly'
        ]
      }
    },
    {
      id: 'manufacturing-ai',
      title: 'Manufacturing Quality Control',
      company: 'Precision Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Manual quality inspection causing delays and inconsistent results',
      solution: 'Integrated AI vision systems for automated quality control and defect detection',
      results: {
        metrics: [
          { label: 'Defect detection accuracy', value: '99.2%', icon: CheckCircle },
          { label: 'Production speed', value: '40%', icon: TrendingUp },
          { label: 'Cost savings', value: '$1.8M', icon: DollarSign },
          { label: 'Quality improvement', value: '85%', icon: Users }
        ],
        highlights: [
          'AI system processes 10,000+ parts per hour',
          'Real-time defect detection prevents costly recalls',
          'Predictive maintenance reduces downtime by 60%',
          'Quality control costs reduced by 70%'
        ]
      }
    },
    {
      id: 'financial-advisory',
      title: 'Financial Advisory Chatbot',
      company: 'WealthFirst Bank',
      industry: 'Financial Services',
      challenge: 'Limited advisor availability and inconsistent financial guidance',
      solution: 'Developed AI-powered financial advisory chatbot for personalized investment guidance',
      results: {
        metrics: [
          { label: 'Client engagement', value: '300%', icon: TrendingUp },
          { label: 'Investment accuracy', value: '92%', icon: CheckCircle },
          { label: 'Service availability', value: '24/7', icon: Clock },
          { label: 'Revenue growth', value: '$3.2M', icon: DollarSign }
        ],
        highlights: [
          'Chatbot serves 5,000+ clients daily',
          'Personalized investment recommendations based on risk profile',
          'Real-time market analysis and portfolio updates',
          'Client retention improved by 45%'
        ]
      }
    },
    {
      id: 'logistics-optimization',
      title: 'Logistics Route Optimization',
      company: 'Global Logistics Ltd.',
      industry: 'Logistics',
      challenge: 'Inefficient route planning causing delivery delays and high fuel costs',
      solution: 'Implemented AI-powered route optimization system with real-time traffic analysis',
      results: {
        metrics: [
          { label: 'Delivery time reduction', value: '35%', icon: Clock },
          { label: 'Fuel cost savings', value: '28%', icon: DollarSign },
          { label: 'Customer satisfaction', value: '96%', icon: Users },
          { label: 'Route efficiency', value: '42%', icon: TrendingUp }
        ],
        highlights: [
          'AI optimizes routes for 500+ vehicles daily',
          'Real-time traffic integration reduces delays',
          'Predictive analytics prevent delivery issues',
          'Carbon footprint reduced by 25%'
        ]
      }
    },
    {
      id: 'education-platform',
      title: 'Educational AI Tutor',
      company: 'EduTech Innovations',
      industry: 'Education',
      challenge: 'One-size-fits-all learning approach limiting student engagement and progress',
      solution: 'Created personalized AI tutoring system with adaptive learning algorithms',
      results: {
        metrics: [
          { label: 'Student engagement', value: '85%', icon: Users },
          { label: 'Learning improvement', value: '40%', icon: TrendingUp },
          { label: 'Completion rates', value: '92%', icon: CheckCircle },
          { label: 'Cost per student', value: '60%', icon: DollarSign }
        ],
        highlights: [
          'Personalized learning paths for 10,000+ students',
          'Real-time progress tracking and adaptive content',
          '24/7 availability for homework help',
          'Teacher workload reduced by 50%'
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
              Real Results, Real Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how leading companies are transforming their businesses with our AI solutions and achieving measurable results.
            </p>
          </motion.div>

          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-32"
          >
            {caseStudies.filter(study => study.featured).map((study, index) => (
              <div key={study.id} className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-12 hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-2xl blur-sm -z-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500 ml-4">{study.company}</span>
                  </div>
                  
                  <h2 className="text-4xl font-medium text-black mb-6 leading-tight">
                    {study.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                    <div>
                      <h3 className="text-xl font-medium text-black mb-4">The Challenge</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-black mb-4">Our Solution</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {study.results.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="flex justify-center mb-3">
                          <metric.icon size={24} className="text-gray-400" />
                        </div>
                        <div className="text-2xl font-semibold text-black mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h3 className="text-xl font-medium text-black mb-4">Key Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {study.results.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start">
                          <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            {caseStudies.filter(study => !study.featured).map((study, index) => (
              <motion.div
                key={study.id}
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
                        {study.industry}
                      </span>
                      <span className="text-sm text-gray-500">{study.company}</span>
                    </div>
                    
                    <h3 className="text-2xl font-medium text-black leading-tight">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-black mb-2">Challenge</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-black mb-2">Solution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Quick Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.metrics.slice(0, 4).map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-lg font-semibold text-black mb-1">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform duration-300 pt-4">
                      <span className="text-base">View full case study</span>
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
                Ready to achieve similar results?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Join the growing list of companies transforming their business with AI. Our team will work closely with you to implement solutions that deliver measurable impact.
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

export default CaseStudies 