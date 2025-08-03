import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Target, Eye, Heart } from 'lucide-react'

const Company = ({ onBookDemo }) => {
  const founders = [
    {
      name: 'Sarah Chen',
      title: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Former AI researcher at Google, leading our mission to democratize AI technology.'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Ex-Microsoft engineer with 15+ years in machine learning and enterprise AI solutions.'
    },
    {
      name: 'Priya Patel',
      title: 'CPO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Product visionary with experience scaling AI products at leading tech companies.'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Human-Centered AI',
      description: 'We believe AI should augment human capabilities, not replace them. Every solution we build puts people first.'
    },
    {
      icon: Target,
      title: 'Purpose-Driven Innovation',
      description: 'Our technology serves a higher purpose: solving real business challenges and creating meaningful impact.'
    },
    {
      icon: Eye,
      title: 'Transparency & Trust',
      description: 'We build AI systems that are explainable, ethical, and trustworthy. Your success and security are our priorities.'
    },
    {
      icon: Users,
      title: 'Collaborative Excellence',
      description: 'We thrive on diverse perspectives and collaborative problem-solving. Great ideas come from great teams.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Organic Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-32"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black mb-12 leading-tight">
                We're building the future of{' '}
                <span className="font-semibold">intelligent automation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Aiestra empowers every business to harness the power of AI, creating intelligent solutions that drive real results and transform how work gets done.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-medium text-black mb-8 leading-tight">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  To democratize AI technology and make intelligent automation accessible to businesses of all sizes. We believe that every organization deserves the power to transform their operations with cutting-edge AI solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through our platform, we're bridging the gap between complex AI research and practical business applications, enabling companies to achieve unprecedented efficiency, innovation, and growth.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-pink-100/30 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12">
                  <h3 className="text-3xl font-medium text-black mb-6 leading-tight">
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    A world where AI seamlessly integrates into every business process, where intelligent automation handles routine tasks, and where human creativity and strategic thinking drive innovation.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We envision a future where AI is not just a tool, but a trusted partner that amplifies human potential and enables organizations to achieve what was once impossible.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-3xl"></div>
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
                We're a collaborative team of experts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our diverse team brings together world-class AI researchers, engineers, and business strategists passionate about making AI accessible and impactful for every organization.
              </p>
            </motion.div>

            {/* Founders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-32"
            >
              <h3 className="text-3xl font-medium text-black mb-12 text-center">Founders</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {founders.map((founder, index) => (
                  <motion.div
                    key={founder.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h4 className="text-xl font-medium text-black mb-2">{founder.name}</h4>
                    <p className="text-sm text-gray-500 mb-4">{founder.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{founder.bio}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl font-medium text-black mb-12 text-center">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <value.icon size={48} className="text-gray-400" />
                    </div>
                    <h4 className="text-xl font-medium text-black mb-4">{value.title}</h4>
                    <p className="text-base text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-medium text-black mb-8">
                Join us in shaping the future
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Ready to transform your business with intelligent AI solutions? Let's work together to build something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onBookDemo}
                  className="inline-flex items-center px-10 py-5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 text-lg"
                >
                  <span className="mr-3">Request a demo</span>
                  <ArrowRight size={24} />
                </button>
                <button className="inline-flex items-center px-10 py-5 border border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 text-lg">
                  <span className="mr-3">Join our team</span>
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Company 