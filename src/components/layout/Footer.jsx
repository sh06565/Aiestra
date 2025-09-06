import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import config from '../../config/environment'
import { CalButton } from '../ui'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    solutions: [
      { name: 'Solutions', href: '/solutions' },
      { name: 'Services', href: '/services' },
      { name: 'Industries', href: '/industries' }
    ],
    company: [
      { name: 'Insights', href: '/insights' },
      { name: 'Contact', href: '/contact' }
    ],
    support: [
      { name: 'Book Consultation', href: '#', isCalButton: true }
    ]
  }

  return (
    <footer className="bg-purple-900 border-t border-purple-800">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white lowercase tracking-wide mb-6">
                  aiestra
                </h3>
                
                <p className="text-purple-100 mb-8 max-w-md text-lg leading-relaxed">
                  Human-centered AI solutions that transform businesses. 
                  Deploy machine learning that puts people first.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-purple-200">
                    <span className="text-sm">{config.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-purple-200">
                    <span className="text-sm">{config.contact.phone}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Solutions Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-6 text-white">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-purple-200 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-purple-200 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    {link.isCalButton ? (
                      <CalButton
                        calLink="aiestra/30min"
                        className="text-purple-200 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
                      >
                        {link.name}
                      </CalButton>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-purple-200 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-purple-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-purple-300 text-sm">
                © {currentYear} Aiestra. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <span className="text-purple-300 text-sm">
                  AI Voice Agent Solutions
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 