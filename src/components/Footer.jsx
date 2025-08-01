import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import config from '../config/environment'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Solutions', href: '/solutions' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    company: [
      { name: 'About', href: '/about' }
    ],
    support: [
      { name: 'Contact', href: `mailto:${config.contact.email}` }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/aiestra', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/aiestra', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/aiestra', label: 'GitHub' }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-sora font-bold gradient-text">Aiestra</span>
              </div>
              
              <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Human-centered AI solutions that transform businesses. 
                Deploy machine learning that puts people first.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail size={14} className="sm:w-4 sm:h-4" />
                  <a 
                    href={`mailto:${config.contact.email}`}
                    className="text-xs sm:text-sm hover:text-primary-500 transition-colors"
                  >
                    {config.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                  <a 
                    href={`tel:${config.contact.phone}`}
                    className="text-xs sm:text-sm hover:text-primary-500 transition-colors"
                  >
                    {config.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{config.contact.address}</span>
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
            <h3 className="font-sora font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200 text-xs sm:text-sm"
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
            <h3 className="font-sora font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200 text-xs sm:text-sm"
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
            <h3 className="font-sora font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Aiestra AI. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={14} className="sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 