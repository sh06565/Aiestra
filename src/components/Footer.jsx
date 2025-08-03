import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import config from '../config/environment'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Platform', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Research', href: '/case-studies' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Resources', href: '/about' }
    ],
    support: [
      { name: 'Contact', href: `mailto:${config.contact.email}` }
    ]
  }

  return (
    <footer className="bg-orange-500 text-white">
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
                <h3 className="text-2xl font-normal text-white lowercase tracking-wide mb-6">
                  aiestra
                </h3>
                
                <p className="text-white/90 mb-8 max-w-md text-lg leading-relaxed">
                  Human-centered AI solutions that transform businesses. 
                  Deploy machine learning that puts people first.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/80">
                    <span className="text-sm">{config.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <span className="text-sm">{config.contact.phone}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Product Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-medium mb-6 text-white">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
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
              <h4 className="font-medium mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
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
            className="border-t border-white/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © {currentYear} Aiestra. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  to="/privacy"
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 