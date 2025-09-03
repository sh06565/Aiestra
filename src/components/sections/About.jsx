import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Users, TrendingUp } from 'lucide-react'

const About = () => {
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
              Not Just AI Chat —{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                AI Voice Agents
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aiestra specializes in voice-first AI solutions optimized for lead capture and ROI. 
              We help businesses never miss a call, qualify leads instantly, and scale operations 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Shield size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Private & Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security with end-to-end encryption. Your data stays private and compliant.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Zap size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant lead qualification and response times. Convert callers before they hang up.
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
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Human-Like</h3>
              <p className="text-gray-600 leading-relaxed">
                Natural conversations that feel human. Advanced speech recognition and natural responses.
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
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">ROI Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Proven to increase qualified leads and close rates. Measurable results from day one.
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Always Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                  37%
                </div>
                <div className="text-gray-600">Average Lead Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                  10,000+
                </div>
                <div className="text-gray-600">Calls Handled Daily</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

