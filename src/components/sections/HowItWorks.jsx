import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Brain, Calendar, TrendingUp, ArrowRight } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "Call Comes In",
      description: "Your AI agent answers every call 24/7, never missing a potential lead.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI Qualifies",
      description: "Advanced AI understands intent, qualifies leads instantly, and captures key information.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatically books appointments, sends confirmations, and syncs with your calendar.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "ROI Tracking",
      description: "Monitor performance, track conversions, and optimize for maximum results.",
      color: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-black mb-8 leading-tight">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From incoming call to qualified lead in seconds. Our AI voice agents handle the entire process automatically.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 via-indigo-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <step.icon size={40} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <ArrowRight size={24} className="text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workflow Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-black mb-4">Complete Workflow</h3>
              <p className="text-gray-600">See how a single call flows through our system</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Call Flow */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h4 className="font-medium text-black">Incoming Call</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• AI answers immediately</div>
                  <div>• Natural conversation starts</div>
                  <div>• Intent recognition active</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h4 className="font-medium text-black">Lead Qualification</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Questions asked naturally</div>
                  <div>• Information captured</div>
                  <div>• Lead scored instantly</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <h4 className="font-medium text-black">Action Taken</h4>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Appointment scheduled</div>
                  <div>• CRM updated</div>
                  <div>• Follow-up triggered</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

