import React from 'react';

const ClientLogos = () => {
  const logos = [
    { name: "IIT Madras", logo: "🏛️" },
    { name: "Nvidia", logo: "🟢" },
    { name: "Startup India", logo: "🇮🇳" },
    { name: "Startup TN", logo: "🌿" },
    { name: "Microsoft Startup Hub", logo: "🪟" },
    { name: "MSME India", logo: "🏭" }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Glass Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Backed by the{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Best in Innovation
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Endorsed by industry leaders to deliver impact at scale through innovation and trust.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {logos.map((company, index) => (
            <div key={index} className="group">
              <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 text-center">
                {/* Glass effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{company.logo}</div>
                  <h3 className="text-sm font-medium text-white/80">{company.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-level encryption and compliance with SOC2, HIPAA, and GDPR standards."
              },
              {
                icon: "⚡",
                title: "99.99% Uptime",
                description: "Reliable infrastructure with guaranteed uptime for mission-critical operations."
              },
              {
                icon: "🌍",
                title: "Global Reach",
                description: "Deploy voice agents in 30+ languages across multiple time zones."
              }
            ].map((indicator, index) => (
              <div key={index} className="group">
                <div className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 text-center">
                  {/* Glass effect glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-3xl mb-4">{indicator.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{indicator.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{indicator.description}</p>
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

export default ClientLogos; 