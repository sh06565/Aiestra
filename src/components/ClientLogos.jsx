import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle } from 'lucide-react'

const ClientLogos = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudSync', logo: 'CS' },
    { name: 'FutureTech', logo: 'FT' },
    { name: 'SmartSolutions', logo: 'SS' },
    { name: 'DigitalEdge', logo: 'DE' },
    { name: 'NextGen', logo: 'NG' }
  ]

  const certifications = [
    {
      icon: Shield,
      title: 'SOC 2 Type II',
      description: 'Enterprise-grade security compliance'
    },
    {
      icon: Award,
      title: 'ISO 27001',
      description: 'Information security management'
    },
    {
      icon: CheckCircle,
      title: 'GDPR Compliant',
      description: 'Data protection and privacy'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-sora font-bold mb-4">
            Trusted by Industry{' '}
            <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join hundreds of companies that trust Aether to power their AI initiatives 
            with enterprise-grade security and reliability.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center"
              >
                <div className="w-20 h-20 glass dark:glass-dark rounded-xl flex items-center justify-center group hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-secondary-500/10 transition-all duration-300">
                  <span className="text-lg font-bold text-gray-600 dark:text-gray-300 group-hover:gradient-text transition-all duration-300">
                    {client.logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-h3 font-sora font-semibold mb-8">
            Enterprise-Grade Security & Compliance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass dark:glass-dark rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon size={32} className="text-primary-500" />
                </div>
                <h4 className="text-lg font-sora font-semibold mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientLogos 