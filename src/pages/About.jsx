import React from 'react'
import { FAQ, Newsletter } from '../components'

const About = ({ onBookDemo }) => {
  return (
    <main className="pt-20">
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold gradient-text mb-6">
            About Aiestra
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing how businesses approach AI with human-centered solutions that prioritize user experience and ethical implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-sora font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To democratize AI technology by making it accessible, understandable, and beneficial for all businesses, regardless of size or industry.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that AI should enhance human capabilities, not replace them. Our solutions are designed to work alongside your team, amplifying their strengths and automating routine tasks.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-sora font-bold mb-6">Our Values</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span><strong>Human-Centered:</strong> Every solution starts with understanding human needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span><strong>Ethical AI:</strong> Responsible development and deployment practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span><strong>Transparency:</strong> Clear communication about how our AI works</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span><strong>Innovation:</strong> Constantly pushing the boundaries of what's possible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <FAQ onBookDemo={onBookDemo} />
      <Newsletter />
    </main>
  )
}

export default About 