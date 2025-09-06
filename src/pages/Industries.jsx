import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Building, ShoppingCart, Scale, Car, GraduationCap, Home, Utensils } from 'lucide-react'
import { CalButton } from '../components/ui'

const Industries = () => {
  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Enhance patient care with intelligent voice agents that handle appointment scheduling, patient inquiries, and medical information requests.',
      icon: <Heart className="w-8 h-8" />,
      challenges: [
        'High call volume during peak hours',
        'Complex appointment scheduling',
        'Patient information requests',
        'Insurance verification needs'
      ],
      solutions: [
        '24/7 appointment scheduling and rescheduling',
        'Patient information and FAQ handling',
        'Insurance verification and pre-authorization',
        'Medication reminders and follow-up calls'
      ],
      benefits: [
        'Reduced wait times for patients',
        'Improved appointment efficiency',
        'Enhanced patient satisfaction',
        'Cost savings on administrative tasks'
      ],
      useCases: [
        'Medical practice appointment scheduling',
        'Hospital patient information line',
        'Pharmacy prescription reminders',
        'Telehealth appointment coordination'
      ]
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      description: 'Streamline property inquiries, lead qualification, and client communication with intelligent voice agents.',
      icon: <Home className="w-8 h-8" />,
      challenges: [
        'High volume of property inquiries',
        'Lead qualification and nurturing',
        'After-hours client communication',
        'Appointment scheduling coordination'
      ],
      solutions: [
        'Property information and availability inquiries',
        'Lead qualification and scoring',
        'Open house scheduling and reminders',
        'Client follow-up and nurturing campaigns'
      ],
      benefits: [
        'Faster lead response times',
        'Improved lead qualification',
        'Increased conversion rates',
        'Better client experience'
      ],
      useCases: [
        'Property listing inquiries',
        'Buyer and seller lead qualification',
        'Open house scheduling',
        'Client relationship management'
      ]
    },
    {
      id: 'e-commerce',
      title: 'E-commerce',
      description: 'Provide exceptional customer support and sales assistance with AI voice agents that understand your products and customers.',
      icon: <ShoppingCart className="w-8 h-8" />,
      challenges: [
        'High customer service volume',
        'Product information requests',
        'Order status inquiries',
        'Return and refund processing'
      ],
      solutions: [
        'Product recommendations and information',
        'Order tracking and status updates',
        'Return and refund assistance',
        'Upselling and cross-selling opportunities'
      ],
      benefits: [
        'Reduced customer service costs',
        'Improved customer satisfaction',
        'Increased sales conversion',
        '24/7 customer support availability'
      ],
      useCases: [
        'Product information and recommendations',
        'Order status and tracking',
        'Customer support and returns',
        'Sales and upselling campaigns'
      ]
    },
    {
      id: 'legal',
      title: 'Legal Services',
      description: 'Enhance client communication and case management with professional voice agents that understand legal processes.',
      icon: <Scale className="w-8 h-8" />,
      challenges: [
        'Client intake and consultation scheduling',
        'Case status updates and communication',
        'Document and deadline reminders',
        'After-hours client inquiries'
      ],
      solutions: [
        'Client intake and consultation scheduling',
        'Case status updates and communication',
        'Document and deadline reminders',
        'Legal information and FAQ handling'
      ],
      benefits: [
        'Improved client communication',
        'Reduced administrative overhead',
        'Better case management',
        'Enhanced client satisfaction'
      ],
      useCases: [
        'Law firm client intake',
        'Case status communication',
        'Consultation scheduling',
        'Legal information hotline'
      ]
    },
    {
      id: 'automotive',
      title: 'Automotive',
      description: 'Streamline service appointments, sales inquiries, and customer support with intelligent voice agents.',
      icon: <Car className="w-8 h-8" />,
      challenges: [
        'Service appointment scheduling',
        'Vehicle information requests',
        'Parts and service inquiries',
        'Customer follow-up and retention'
      ],
      solutions: [
        'Service appointment scheduling and reminders',
        'Vehicle information and specifications',
        'Parts availability and pricing',
        'Customer satisfaction surveys'
      ],
      benefits: [
        'Improved service efficiency',
        'Better customer experience',
        'Increased service revenue',
        'Enhanced customer retention'
      ],
      useCases: [
        'Dealership service scheduling',
        'Vehicle sales inquiries',
        'Parts and service information',
        'Customer satisfaction follow-up'
      ]
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Enhance student and parent communication with voice agents that handle enrollment, scheduling, and information requests.',
      icon: <GraduationCap className="w-8 h-8" />,
      challenges: [
        'Student enrollment and registration',
        'Parent communication and updates',
        'Schedule and event information',
        'Administrative inquiry handling'
      ],
      solutions: [
        'Student enrollment and registration',
        'Parent communication and updates',
        'Schedule and event information',
        'Administrative support and FAQ'
      ],
      benefits: [
        'Improved communication efficiency',
        'Reduced administrative workload',
        'Better parent engagement',
        'Enhanced student experience'
      ],
      useCases: [
        'School enrollment and registration',
        'Parent communication system',
        'Event and schedule information',
        'Administrative support hotline'
      ]
    },
    {
      id: 'hospitality',
      title: 'Hospitality',
      description: 'Enhance guest experience with voice agents that handle reservations, concierge services, and guest inquiries.',
      icon: <Utensils className="w-8 h-8" />,
      challenges: [
        'Reservation management and booking',
        'Guest service requests',
        'Concierge and information services',
        'After-hours guest support'
      ],
      solutions: [
        'Reservation booking and modifications',
        'Guest service and concierge requests',
        'Local information and recommendations',
        'Guest satisfaction and feedback'
      ],
      benefits: [
        'Improved guest satisfaction',
        'Reduced staff workload',
        'Increased booking efficiency',
        'Enhanced guest experience'
      ],
      useCases: [
        'Hotel reservation system',
        'Restaurant booking and inquiries',
        'Concierge and guest services',
        'Guest satisfaction surveys'
      ]
    },
    {
      id: 'professional-services',
      title: 'Professional Services',
      description: 'Streamline client communication and service delivery with intelligent voice agents for consulting, accounting, and other professional services.',
      icon: <Building className="w-8 h-8" />,
      challenges: [
        'Client consultation scheduling',
        'Service information and pricing',
        'Project status updates',
        'Client relationship management'
      ],
      solutions: [
        'Consultation and meeting scheduling',
        'Service information and pricing',
        'Project status and updates',
        'Client onboarding and support'
      ],
      benefits: [
        'Improved client communication',
        'Reduced administrative costs',
        'Better project management',
        'Enhanced client satisfaction'
      ],
      useCases: [
        'Consulting firm client intake',
        'Accounting firm tax season support',
        'Marketing agency client communication',
        'Professional service scheduling'
      ]
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
                INDUSTRY SOLUTIONS
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Industry-Specific Voice Agent Solutions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Tailored AI voice agent solutions designed for your industry's unique challenges, processes, and customer needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Challenges:</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 mt-2"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {industry.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                          {benefit}
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

      {/* Use Cases Section */}
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
                REAL-WORLD APPLICATIONS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Common Use Cases Across Industries
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                See how different industries are leveraging AI voice agents to solve their unique challenges and improve customer experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.slice(0, 4).map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
                      {industry.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{industry.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2"></div>
                        {useCase}
                      </li>
                    ))}
                  </ul>
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
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Let's discuss how our industry-specific voice agent solutions can address your unique challenges and drive better results.
              </p>
              <CalButton
                calLink="aiestra/30min"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900"
              >
                <span className="mr-2">Book a Consultation</span>
                <ArrowRight size={20} />
              </CalButton>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Industries
