import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Orb from '../ui/Orb';

const Hero = ({ onBookDemo }) => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Animated Orb Background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.6}
          rotateOnHover={true}
          hue={180}
          forceHoverState={false}
        />
      </div>

      {/* Optional Gradient Layers for Soft Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black mb-8 leading-tight">
              Never Miss a Lead Again —{' '}
              <span className="font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Scale with AI Voice Agents
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Voice AI Agents help businesses capture every opportunity, boost ROI, and scale without missing a lead. 
              24/7 intelligent call handling that converts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                onClick={onBookDemo}
                className="inline-flex items-center px-10 py-5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 text-lg"
              >
                <span className="mr-3">Book a Demo</span>
                <ArrowRight size={24} />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="inline-flex items-center px-10 py-5 bg-white text-black font-medium rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-lg"
              >
                <Play size={20} className="mr-3" />
                <span>See It in Action</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;