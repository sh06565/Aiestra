import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle, Star } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate subscription
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail('')
  }

  const testimonials = [
    {
      text: '"The AI insights have transformed our decision-making process."',
      author: 'Sarah M.',
      role: 'CTO, TechCorp',
      rating: 5
    },
    {
      text: '"Incredible accuracy and easy integration with our existing systems."',
      author: 'Michael R.',
      role: 'VP Engineering, DataFlow',
      rating: 5
    },
    {
      text: '"The ROI we\'ve seen in just 3 months is remarkable."',
      author: 'Jennifer L.',
      role: 'Head of Analytics, CloudSync',
      rating: 5
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h2 font-sora font-bold mb-4">
              Stay Ahead with{' '}
              <span className="gradient-text">AI Insights</span>
            </h2>
            <p className="text-body text-gray-600 dark:text-gray-300 mb-8">
              Get the latest AI trends, case studies, and exclusive insights delivered to your inbox. 
              Join 10,000+ professionals staying ahead of the curve.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <span>Subscribe to Newsletter</span>
                <ArrowRight size={18} />
              </motion.button>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-600 dark:text-green-400"
                >
                  <CheckCircle size={16} />
                  <span className="text-sm">Successfully subscribed!</span>
                </motion.div>
              )}

              <p className="text-xs text-gray-500 dark:text-gray-400">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>

            {/* Benefits */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Weekly AI insights and trends</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Exclusive case studies and success stories</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Early access to new features and updates</span>
              </div>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-h3 font-sora font-semibold mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                See what our customers are saying about their AI transformation journey.
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass dark:glass-dark rounded-2xl p-6"
                >
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-600 dark:text-gray-300 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass dark:glass-dark rounded-2xl p-6"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">10K+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">4.9/5</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Average Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter 