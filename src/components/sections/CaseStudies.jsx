import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react'

const CaseStudies = () => {
  return (
    <section className="py-24 bg-gray-50">
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
              Real Results from Real Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how businesses are transforming their operations with AI voice agents.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Real Estate
                  </span>
                </div>
                
                <h3 className="text-3xl font-medium text-black mb-6">
                  Real Estate Firm Increased Qualified Leads by 37%
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  "Aiestra's AI voice agents transformed our lead capture process. We were missing 60% of after-hours calls, 
                  but now every call is answered and qualified instantly. Our sales team focuses on closing deals, not answering basic questions."
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">JS</span>
                  </div>
                  <div>
                    <div className="font-medium text-black">John Smith</div>
                    <div className="text-gray-600">CEO, Premier Real Estate</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-xl">
                  <div className="flex justify-center mb-4">
                    <TrendingUp size={32} className="text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">37%</div>
                  <div className="text-gray-600">More Qualified Leads</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-xl">
                  <div className="flex justify-center mb-4">
                    <Users size={32} className="text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">24/7</div>
                  <div className="text-gray-600">Call Coverage</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-xl">
                  <div className="flex justify-center mb-4">
                    <Calendar size={32} className="text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">85%</div>
                  <div className="text-gray-600">Appointment Rate</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-xl">
                  <div className="flex justify-center mb-4">
                    <DollarSign size={32} className="text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">3.2x</div>
                  <div className="text-gray-600">ROI Increase</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

