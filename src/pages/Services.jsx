import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Settings, Code, Headphones, BarChart3, Users, Shield, Clock, CheckCircle } from 'lucide-react'
import { CalButton } from '../components/ui'

const Services = () => {
  const services = [
    {
      id: 'implementation',
      title: 'Implementation & Setup',
      description: 'Complete end-to-end implementation of your AI voice agent solution with seamless integration into your existing systems.',
      icon: <Settings className="w-8 h-8" />,
      features: [
        'System architecture design and planning',
        'Integration with existing CRM and business tools',
        'Custom workflow configuration',
        'Data migration and setup',
        'Testing and quality assurance',
        'Go-live support and monitoring'
      ],
      timeline: '2-4 weeks',
      deliverables: [
        'Fully configured voice agent system',
        'Integration documentation',
        'User training materials',
        'Performance monitoring dashboard'
      ]
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Tailored AI voice agent development to meet your specific business requirements and unique use cases.',
      icon: <Code className="w-8 h-8" />,
      features: [
        'Custom conversation flows and logic',
        'Specialized industry integrations',
        'Advanced AI model training',
        'Custom reporting and analytics',
        'API development and customization',
        'Third-party system integrations'
      ],
      timeline: '4-8 weeks',
      deliverables: [
        'Custom-built voice agent solution',
        'Source code and documentation',
        'Integration APIs',
        'Custom training materials'
      ]
    },
    {
      id: 'training-support',
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing support to ensure your team can effectively manage and optimize your voice agents.',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Administrator training sessions',
        'End-user onboarding programs',
        'Best practices workshops',
        'Performance optimization guidance',
        'Regular check-ins and reviews',
        '24/7 technical support'
      ],
      timeline: 'Ongoing',
      deliverables: [
        'Training certification programs',
        'Support documentation',
        'Regular performance reports',
        'Optimization recommendations'
      ]
    },
    {
      id: 'integration-services',
      title: 'Integration Services',
      description: 'Seamless integration of your voice agents with existing business systems, CRMs, and third-party applications.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        'CRM system integration (Salesforce, HubSpot, etc.)',
        'Calendar and scheduling system connections',
        'Payment processing integrations',
        'Database and data warehouse connections',
        'API development and management',
        'Real-time data synchronization'
      ],
      timeline: '1-3 weeks',
      deliverables: [
        'Integrated system architecture',
        'API documentation',
        'Data flow diagrams',
        'Integration testing reports'
      ]
    },
    {
      id: 'maintenance',
      title: 'Ongoing Maintenance',
      description: 'Continuous monitoring, updates, and optimization to ensure your voice agents perform at peak efficiency.',
      icon: <Shield className="w-8 h-8" />,
      features: [
        '24/7 system monitoring and alerting',
        'Regular performance optimization',
        'Security updates and patches',
        'Feature enhancements and improvements',
        'Data backup and disaster recovery',
        'Compliance monitoring and reporting'
      ],
      timeline: 'Ongoing',
      deliverables: [
        'Monthly performance reports',
        'System health dashboards',
        'Security compliance reports',
        'Optimization recommendations'
      ]
    },
    {
      id: 'consultation',
      title: 'Strategic Consultation',
      description: 'Expert guidance on AI voice agent strategy, implementation planning, and business process optimization.',
      icon: <Headphones className="w-8 h-8" />,
      features: [
        'AI strategy development and planning',
        'Business process analysis and optimization',
        'ROI analysis and cost-benefit studies',
        'Technology roadmap development',
        'Change management support',
        'Executive briefings and presentations'
      ],
      timeline: '1-2 weeks',
      deliverables: [
        'Strategic implementation plan',
        'ROI analysis report',
        'Technology roadmap',
        'Executive presentation materials'
      ]
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your business needs, current systems, and goals to create a comprehensive implementation plan.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team designs and develops your custom voice agent solution with your specific requirements in mind.',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Integration & Testing',
      description: 'We integrate your solution with existing systems and conduct thorough testing to ensure optimal performance.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Training & Launch',
      description: 'We train your team and launch your voice agent solution with ongoing support and monitoring.',
      icon: <Users className="w-6 h-6" />
    }
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-6">
                PROFESSIONAL SERVICES
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Implementation & Support Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                From initial consultation to ongoing maintenance, we provide comprehensive services to ensure your AI voice agent solution delivers maximum value and performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.timeline}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Deliverables:</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <CalButton
                    calLink="aiestra/30min"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    <span className="mr-2">Book a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </CalButton>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-6">
                OUR PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                How We Work With You
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our proven 4-step process ensures successful implementation and optimal performance of your AI voice agent solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto text-purple-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Let's discuss your specific needs and create a customized service plan that delivers the results you're looking for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CalButton
                  calLink="aiestra/30min"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900"
                >
                  <span className="mr-2">Book a Consultation</span>
                  <ArrowRight size={20} />
                </CalButton>
                <CalButton
                  calLink="aiestra/30min"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-purple-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900"
                >
                  <span className="mr-2">Book a Consultation</span>
                  <ArrowRight size={20} />
                </CalButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
