import React from 'react';

const CoreBenefits = () => {
  const benefits = [
    {
      title: "24/7 Availability",
      description: "Voice AI agents are always on, so you can handle calls after hours without paying for night shifts or weekend coverage.",
      // icon: "🎧⏰"
    },
    {
      title: "Cost-Effectiveness",
      description: "Automate high-volume tasks and reduce the need for extra hires — cutting costs without slowing down your service.",
      // icon: "💰📈"
    },
    {
      title: "Scalability",
      description: "Scale instantly without changing your setup. Voice agents can handle thousands of calls at once with no drop in quality.",
      // icon: "📊🚀"
    },
    {
      title: "Improved Efficiency",
      description: "Let AI handle bookings, order updates, and simple troubleshooting so your team can focus on what's complex or high-value.",
      // icon: "💡⚡"
    },
    {
      title: "Natural Language Understanding",
      description: "Well-trained AI can interpret unclear or messy speech — so customers don't need to speak perfectly to get help.",
      // icon: "💬📖"
    },
    {
      title: "Personalized Interactions",
      description: "Voice agents use CRM and past interactions to tailor responses, making repeat calls faster, smarter, and more useful.",
      // icon: "❤️💬"
    },
    {
      title: "Consistent Quality",
      description: "AI responds the same way every time — no fatigue, no mood swings, no missed steps between shifts.",
      // icon: "✅🛡️"
    },
    {
      title: "Multilingual Support",
      description: "Deploy voice agents in 30+ languages so customers can get help in their native language without waiting for translation.",
      // icon: "🌍👥"
    }
  ];

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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Why AI Voice Agents Make a Difference
            </h2>
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
                AI Voice Agents help teams stay available 24/7, reduce call volume for human reps, and cut costs without sacrificing service. It's faster to launch, easier to manage, and built to scale.
              </p>
              <div className="lg:flex-shrink-0">
                <button className="px-8 py-4 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-lg border border-purple-600/30">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Benefits Grid - 2 rows x 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                  {/* Glass effect glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-4xl mb-6">{benefit.icon}</div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/80 leading-relaxed text-base">
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
