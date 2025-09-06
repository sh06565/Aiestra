import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Headphones, Calendar, Users, Globe, Shield } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { CalButton } from '../components/ui'

const SolutionsOverview = () => {
  const serviceSuites = [
    {
      id: 'customer-support',
      title: 'Customer Support Voice Agents',
      description: '24/7 intelligent customer support that handles inquiries, resolves issues, and provides instant assistance.',
      icon: <Headphones className="w-8 h-8" />,
      features: ['24/7 Availability', 'Issue Resolution', 'CRM Integration', 'Multi-language Support'],
      industries: ['E-commerce', 'SaaS', 'Healthcare', 'Financial Services']
    },
    {
      id: 'receptionist',
      title: 'Receptionist Voice Agents',
      description: 'Professional virtual receptionists that handle calls, route inquiries, and manage appointments.',
      icon: <Phone className="w-8 h-8" />,
      features: ['Call Routing', 'Appointment Scheduling', 'Visitor Information', 'Message Taking'],
      industries: ['Medical Practices', 'Legal Firms', 'Real Estate', 'Professional Services']
    },
    {
      id: 'sales-qualification',
      title: 'Sales & Lead Qualification',
      description: 'Intelligent lead qualification and sales support that identifies opportunities and nurtures prospects.',
      icon: <Users className="w-8 h-8" />,
      features: ['Lead Scoring', 'Prospect Gathering', 'Demo Scheduling', 'Pipeline Management'],
      industries: ['B2B Software', 'Real Estate', 'Financial Services', 'Insurance']
    },
    {
      id: 'appointment-booking',
      title: 'Appointment Booking Agents',
      description: 'Streamlined appointment scheduling that integrates with your calendar and reduces no-shows.',
      icon: <Calendar className="w-8 h-8" />,
      features: ['Calendar Integration', 'Automated Reminders', 'Rescheduling', 'Waitlist Management'],
      industries: ['Healthcare', 'Beauty & Wellness', 'Professional Services', 'Education']
    },
    {
      id: 'technical-support',
      title: 'Technical Support Agents',
      description: 'Expert technical support that troubleshoots issues and provides step-by-step guidance.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Troubleshooting', 'Knowledge Base', 'Remote Diagnostics', 'Escalation'],
      industries: ['Technology', 'Software', 'Electronics', 'Telecommunications']
    },
    {
      id: 'multi-language',
      title: 'Multi-language Support',
      description: 'Break language barriers with voice agents that communicate fluently in multiple languages.',
      icon: <Globe className="w-8 h-8" />,
      features: ['50+ Languages', 'Cultural Context', 'Accent Recognition', 'Localized Support'],
      industries: ['Global E-commerce', 'International Services', 'Travel & Hospitality', 'Education']
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
                VOICE AGENT SERVICES
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                AI Voice Agent Service Suites
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your business operations with intelligent voice agents designed for specific use cases. 
                From customer support to appointment booking, we provide comprehensive AI voice solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Suites Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceSuites.map((service, index) => (
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
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={`/solutions/${service.id}`}
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Let's discuss how our voice agent services can solve your specific business challenges. 
                Get a personalized consultation and see how we can help.
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

const SolutionsPage = () => {
  const { solutionId } = useParams()

  // If no solutionId, show the main solutions overview
  if (!solutionId) {
    return <SolutionsOverview />
  }

  const solutions = {
    'customer-support': {
      title: 'Customer Support Voice Agents',
      subtitle: 'CUSTOMER SERVICE',
      description: '24/7 intelligent customer support that handles inquiries, resolves issues, and provides instant assistance.',
      longDescription: 'Transform your customer support with AI voice agents that provide instant, intelligent responses to customer inquiries. Handle common questions, troubleshoot issues, and escalate complex problems seamlessly.',
      features: [
        '24/7 availability and instant response',
        'Natural language understanding for complex queries',
        'Integration with CRM and ticketing systems',
        'Multi-language support for global customers',
        'Escalation to human agents when needed',
        'Real-time analytics and performance tracking'
      ],
      industries: ['E-commerce', 'SaaS', 'Healthcare', 'Financial Services', 'Telecommunications'],
      demo: {
        type: 'voice',
        title: 'Customer Support Demo',
        messages: [
          { type: 'user', text: 'Hi, I\'m having trouble with my recent order' },
          { type: 'agent', text: 'Hello! I\'d be happy to help you with your order. I can see you have order #12345. What specific issue are you experiencing?' },
          { type: 'user', text: 'It says delivered but I never received it' },
          { type: 'agent', text: 'I understand your concern. Let me check the delivery details and initiate a trace. I\'ll also send you a replacement order right away. You should receive it within 2-3 business days.' }
        ]
      }
    },
    'receptionist': {
      title: 'Receptionist Voice Agents',
      subtitle: 'RECEPTION SERVICES',
      description: 'Professional virtual receptionists that handle calls, route inquiries, and manage appointments.',
      longDescription: 'Replace or supplement your reception staff with intelligent voice agents that can handle incoming calls, route inquiries to the right departments, schedule appointments, and provide basic information about your business.',
      features: [
        'Professional call handling and routing',
        'Appointment scheduling and calendar integration',
        'Visitor information and directions',
        'Call screening and message taking',
        'Integration with business directories',
        'Customizable greetings and responses'
      ],
      industries: ['Medical Practices', 'Legal Firms', 'Real Estate', 'Professional Services', 'Dental Offices'],
      demo: {
        type: 'voice',
        title: 'Receptionist Demo',
        messages: [
          { type: 'user', text: 'Good morning, I\'d like to schedule an appointment' },
          { type: 'agent', text: 'Good morning! I\'d be happy to help you schedule an appointment. I can see Dr. Smith has availability next Tuesday at 2 PM or Wednesday at 10 AM. Which works better for you?' },
          { type: 'user', text: 'Tuesday at 2 PM sounds perfect' },
          { type: 'agent', text: 'Excellent! I\'ve scheduled your appointment for Tuesday at 2 PM. You\'ll receive a confirmation email and text reminder. Is there anything else I can help you with?' }
        ]
      }
    },
    'sales-qualification': {
      title: 'Sales & Lead Qualification',
      subtitle: 'SALES AUTOMATION',
      description: 'Intelligent lead qualification and sales support that identifies opportunities and nurtures prospects.',
      longDescription: 'Boost your sales team\'s efficiency with AI voice agents that qualify leads, gather prospect information, schedule demos, and nurture potential customers through the sales funnel.',
      features: [
        'Automated lead qualification and scoring',
        'Prospect information gathering',
        'Demo scheduling and follow-up',
        'Sales pipeline management',
        'Integration with CRM systems',
        'Performance analytics and reporting'
      ],
      industries: ['B2B Software', 'Real Estate', 'Financial Services', 'Insurance', 'Consulting'],
      demo: {
        type: 'voice',
        title: 'Sales Qualification Demo',
        messages: [
          { type: 'user', text: 'I\'m interested in your software solution' },
          { type: 'agent', text: 'Great! I\'d love to learn more about your needs. What size is your company and what challenges are you looking to solve?' },
          { type: 'user', text: 'We\'re a 50-person company and need better customer management' },
          { type: 'agent', text: 'Perfect! Our CRM solution is ideal for companies your size. I\'d like to schedule a personalized demo with our sales team. Are you available for a 30-minute call this week?' }
        ]
      }
    },
    'appointment-booking': {
      title: 'Appointment Booking Agents',
      subtitle: 'SCHEDULING AUTOMATION',
      description: 'Streamlined appointment scheduling that integrates with your calendar and reduces no-shows.',
      longDescription: 'Simplify appointment booking with intelligent voice agents that check availability, schedule appointments, send reminders, and handle rescheduling requests automatically.',
      features: [
        'Real-time calendar integration',
        'Automated appointment reminders',
        'Rescheduling and cancellation handling',
        'Waitlist management',
        'Multi-location support',
        'Reduced no-shows with smart reminders'
      ],
      industries: ['Healthcare', 'Beauty & Wellness', 'Professional Services', 'Education', 'Automotive'],
      demo: {
        type: 'voice',
        title: 'Appointment Booking Demo',
        messages: [
          { type: 'user', text: 'I need to book a haircut for next week' },
          { type: 'agent', text: 'I\'d be happy to help you book a haircut! I can see we have availability next Tuesday at 3 PM, Wednesday at 11 AM, or Friday at 2 PM. Which works best for you?' },
          { type: 'user', text: 'Tuesday at 3 PM works great' },
          { type: 'agent', text: 'Perfect! I\'ve booked your haircut for Tuesday at 3 PM with Sarah. You\'ll receive a confirmation text and email. We\'ll also send you a reminder 24 hours before your appointment.' }
        ]
      }
    },
    'technical-support': {
      title: 'Technical Support Agents',
      subtitle: 'TECHNICAL ASSISTANCE',
      description: 'Expert technical support that troubleshoots issues and provides step-by-step guidance.',
      longDescription: 'Provide instant technical support with AI voice agents that can troubleshoot common issues, guide users through solutions, and escalate complex technical problems to your support team.',
      features: [
        'Step-by-step troubleshooting guidance',
        'Integration with knowledge bases',
        'Remote diagnostic capabilities',
        'Escalation to technical specialists',
        'Multi-channel support (phone, chat, email)',
        'Performance tracking and improvement'
      ],
      industries: ['Technology', 'Software', 'Electronics', 'Telecommunications', 'IoT Devices'],
      demo: {
        type: 'voice',
        title: 'Technical Support Demo',
        messages: [
          { type: 'user', text: 'My internet keeps disconnecting' },
          { type: 'agent', text: 'I can help you troubleshoot that. Let\'s start by checking your router. Can you tell me if the lights on your router are solid or blinking?' },
          { type: 'user', text: 'They\'re blinking red' },
          { type: 'agent', text: 'The blinking red lights indicate a connection issue. Let\'s try resetting your router. I\'ll guide you through the process step by step.' }
        ]
      }
    },
    'multi-language': {
      title: 'Multi-language Support',
      subtitle: 'GLOBAL SUPPORT',
      description: 'Break language barriers with voice agents that communicate fluently in multiple languages.',
      longDescription: 'Serve your global customer base with AI voice agents that can communicate fluently in multiple languages, understand cultural nuances, and provide localized support.',
      features: [
        'Support for 50+ languages',
        'Cultural context understanding',
        'Accent and dialect recognition',
        'Localized responses and information',
        'Seamless language switching',
        'Regional compliance and regulations'
      ],
      industries: ['Global E-commerce', 'International Services', 'Travel & Hospitality', 'Education', 'Healthcare'],
      demo: {
        type: 'voice',
        title: 'Multi-language Demo',
        messages: [
          { type: 'user', text: 'Hola, necesito ayuda con mi pedido' },
          { type: 'agent', text: '¡Hola! Me complace ayudarte con tu pedido. Puedo ver que tienes el pedido #12345. ¿En qué puedo asistirte?' },
          { type: 'user', text: '¿Cuándo llegará mi pedido?' },
          { type: 'agent', text: 'Tu pedido está programado para llegar mañana entre las 2-4 PM. ¿Te gustaría que te envíe una notificación cuando esté en camino?' }
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
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Industries */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-medium text-black">Industries We Serve</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <CalButton
                      calLink="aiestra/30min"
                      className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      <span className="mr-2">Book a Consultation</span>
                      <ArrowRight size={20} />
                    </CalButton>
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