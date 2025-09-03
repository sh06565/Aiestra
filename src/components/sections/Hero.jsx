import React, { useState, useEffect } from 'react';
import Orb from '../ui/Orb';

const Hero = () => {
  const [currentQuery, setCurrentQuery] = useState(0);
  
  const suggestedQueries = [
    "What is Aiestra's pricing?",
    "How does AI automation work?",
    "Show me case studies",
    "What industries do you serve?",
    "How to get started?",
    "What are your key features?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuery((prev) => (prev + 1) % suggestedQueries.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Animated Orb Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Orb
          hoverIntensity={0.8}
          rotateOnHover={true}
          hue={220}
          forceHoverState={false}
        />
      </div>

      {/* Central Content - Perfectly Centered */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* "New Background" Tag */}
        <div className="mb-8">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-600/30 rounded-full text-gray-300 text-sm font-medium"> */}
            {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> */}
              {/* <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" /> */}
            {/* </svg> */}
            {/* New Background */}
          {/* </div> */}
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="block">Never Miss a Lead Again</span>
          <span className="block">
            <span className="text-white">Scale with </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI Voice Agents!
            </span>
          </span>
        </h1>

        {/* Interactive "Try it out" Section */}
        <div className="mt-16 space-y-8">
          {/* Microphone Button */}
          <div className="flex justify-center">
            <button className="group relative">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
                <svg className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-20 h-20 bg-purple-500/20 rounded-full blur-xl scale-150 group-hover:scale-175 transition-all duration-300"></div>
            </button>
          </div>

          {/* "Try it out" Text */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Try it out
            </p>
          </div>

          {/* Suggested Query Glass Effect */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="px-8 py-4 bg-white/5 backdrop-blur-md border border-purple-400/30 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <p className="text-white/90 text-lg md:text-xl font-medium">
                  Try asking: <span className="text-white font-semibold">
                    {suggestedQueries[currentQuery]}
                  </span>
                </p>
              </div>
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-purple-500/10 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Right Demo Toggle */}
      {/* <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 text-gray-400">
        <span className="text-sm font-medium">Demo Content</span>
        <div className="relative">
          <input type="checkbox" id="demo-toggle" className="sr-only" />
          <label htmlFor="demo-toggle" className="block w-12 h-6 bg-gray-700 rounded-full cursor-pointer transition-colors duration-200">
            <div className="w-5 h-5 bg-white rounded-full transform transition-transform duration-200 translate-x-1 translate-y-0.5"></div>
          </label>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;