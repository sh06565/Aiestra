import React from 'react';

const CoreBenefits = () => {
  const benefits = [
    {
      title: "24/7 Availability",
      description: "Voice AI agents are always on, so you can handle calls after hours without paying for night shifts or weekend coverage.",
      icon: "headset"
    },
    {
      title: "Cost-Effectiveness",
      description: "Automate high-volume tasks and reduce the need for extra hires — cutting costs without slowing down your service.",
      icon: "dollar"
    },
    {
      title: "Scalability",
      description: "Scale instantly without changing your setup. Voice agents can handle thousands of calls at once with no drop in quality.",
      icon: "chart"
    },
    {
      title: "Improved Efficiency",
      description: "Let AI handle bookings, order updates, and simple troubleshooting so your team can focus on what's complex or high-value.",
      icon: "lightbulb"
    },
    {
      title: "Natural Language Understanding",
      description: "Well-trained AI can interpret unclear or messy speech — so customers don't need to speak perfectly to get help.",
      icon: "book"
    },
    {
      title: "Personalized Interactions",
      description: "Voice agents use CRM and past interactions to tailor responses, making repeat calls faster, smarter, and more useful.",
      icon: "user"
    },
    {
      title: "Consistent Quality",
      description: "AI responds the same way every time — no fatigue, no mood swings, no missed steps between shifts.",
      icon: "shield"
    },
    {
      title: "Multilingual Support",
      description: "Deploy voice agents in 30+ languages so customers can get help in their native language without waiting for translation.",
      icon: "globe"
    }
  ];

  const getIconComponent = (iconName) => {
    const iconClasses = "w-8 h-8 text-purple-600";
    
    switch (iconName) {
      case "headset":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        );
      case "dollar":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        );
      case "chart":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case "lightbulb":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "book":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "user":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case "shield":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "globe":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      {/* Background Glass Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-block px-4 py-2 bg-purple-300/20 text-purple-200 text-sm font-medium rounded-full mb-6">
              BENEFITS OF AI VOICE AGENTS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Why AI Voice Agents Make a Difference
            </h2>
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
                AI Voice Agents help teams stay available 24/7, reduce call volume for human reps, and cut costs without sacrificing service. It's faster to launch, easier to manage, and built to scale.
              </p>
              <div className="lg:flex-shrink-0">
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg border border-purple-600/30">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Benefits Grid - 3 columns layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="relative p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                  {/* Glass effect glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Icon with light background */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                      {getIconComponent(benefit.icon)}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBenefits;
