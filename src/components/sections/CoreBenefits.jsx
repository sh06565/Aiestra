import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, Zap } from 'lucide-react'

const CoreBenefits = () => {
  return (
    <section className="py-32 relative bg-white">
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
  )
}

export default CoreBenefits
