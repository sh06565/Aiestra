import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Calendar } from 'lucide-react'

const CallToAction = ({ onBookDemo }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-cyan-500 to-indigo-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 leading-tight">
              Ready to Never Miss a Lead Again?
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Join hundreds of businesses already scaling with AI voice agents. 
              See how Aiestra can transform your lead capture and boost your ROI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={onBookDemo}
              className="inline-flex items-center px-10 py-5 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-500 text-lg"
            >
              <Calendar size={24} className="mr-3" />
              <span>Book a Demo</span>
              <ArrowRight size={24} className="ml-3" />
            </button>
            
            <button className="inline-flex items-center px-10 py-5 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-500 text-lg">
              <Phone size={24} className="mr-3" />
              <span>Hear Our AI in Action</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">14 Days</div>
                <div className="text-cyan-100">Free Trial</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">No Setup</div>
                <div className="text-cyan-100">Fees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-cyan-100">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

