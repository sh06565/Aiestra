import React from 'react';
import MagicBento from '../ui/MagicBento';

const About = () => {
  const customCards = [
    {
      color: '#f8fafc',
      title: 'Intelligent Call Routing',
      description: 'AI-powered call distribution ensures customers reach the right department or agent instantly, reducing wait times and improving satisfaction.',
      label: 'Routing'
    },
    {
      color: '#f1f5f9',
      title: '24/7 Availability',
      description: 'Never miss a customer call again. Our AI agents handle inquiries around the clock, providing consistent service quality.',
      label: 'Always On'
    },
    {
      color: '#e2e8f0',
      title: 'Multi-Language Support',
      description: 'Break down language barriers with support for 30+ languages, ensuring global customers feel understood and valued.',
      label: 'Global'
    },
    {
      color: '#f8fafc',
      title: 'Smart Analytics',
      description: 'Gain deep insights into customer interactions, call patterns, and agent performance with comprehensive analytics and reporting.',
      label: 'Insights'
    },
    {
      color: '#f1f5f9',
      title: 'Seamless Integration',
      description: 'Connect with your existing CRM, helpdesk, and business tools for a unified customer experience across all touchpoints.',
      label: 'Connect'
    },
    {
      color: '#e2e8f0',
      title: 'Custom Workflows',
      description: 'Tailor AI responses and workflows to match your brand voice, business processes, and specific industry requirements.',
      label: 'Custom'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Background Glass Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-6">
              FEATURES
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Smart Features to Drive Growth
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Harness the power of AI to transform your customer interactions, streamline operations, and unlock new growth opportunities with intelligent automation.
            </p>
            
            {/* Explore Features Button */}
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
              Explore Features
            </button>
          </div>

          {/* MagicBento Grid with Full Animations */}
          <div className="flex justify-center">
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
              customCards={customCards}
            />
          </div>

          {/* Additional Features Highlight */}
          <div className="mt-20 text-center">
            {/* <div className="inline-flex items-center space-x-8 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-6 rounded-2xl"> */}
              {/* <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-lg font-semibold text-white">AI-Powered Automation</span>
              </div> */}
              {/* <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-lg font-semibold text-white">Enterprise Security</span>
              </div> */}
              {/* <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-lg font-semibold text-white">Omnichannel Support</span>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

