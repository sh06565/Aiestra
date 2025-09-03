import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: "Seamless System Integration",
      description: "Easily connect our solutions with your existing tools like HubSpot, Slack, and Google Calendar. Simplify workflows and save valuable time with no learning curve.",
      icon: "🔌",
      highlight: "200+ Integrations Supported"
    },
    {
      title: "Analytics That Drive Results",
      description: "Track every call, analyze detailed metrics, and gain valuable insights into customer behavior to fuel smarter business decisions.",
      icon: "📊",
      highlight: "Real-time Insights"
    },
    {
      title: "Enterprise-Level Security",
      description: "We combine strong compliance, strict data control, and 99.99% uptime to meet the demands of enterprise-grade operations — without compromising speed or flexibility.",
      icon: "🛡️",
      highlight: "SOC2, HIPAA, GDPR-Compliant"
    }
  ];

  const features = [
    {
      title: "Strict Guardrails, No Hallucinations",
      description: "AI pulls from approved knowledge sources to ensure accurate, brand-safe replies. No guesswork or off-script responses, just clear boundaries.",
      icon: "🚫"
    },
    {
      title: "Data Managed In-House",
      description: "All customer data and call logs are encrypted and stored internally. Nothing goes to third parties, ensuring total control and compliance.",
      icon: "🏠"
    },
    {
      title: "PCI DSS Compliant",
      description: "Protect payment and cardholder data with built-in PCI DSS compliance. Ideal for secure workflows like payments or account verification.",
      icon: "💳"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Glass Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
            Explore More Powerful{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed">
            Unlock seamless integrations, actionable insights, and enhanced collaboration with AI.
          </p>
        </div>

        {/* Main Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          {solutions.map((solution, index) => (
            <div key={index} className="group">
              <div className="relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Glass effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-6">{solution.title}</h3>
                  <p className="text-white/80 leading-relaxed text-lg mb-6">{solution.description}</p>
                  <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium">
                    {solution.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Security & Compliance
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 text-center h-full">
                {/* Glass effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Optimize Your Workflow with Our Dashboard
          </h3>
          <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-16">
            Unlock the full potential of AI with a user-friendly dashboard designed to streamline operations and maximize efficiency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Gain Actionable Insights",
                description: "Dive deep into analytics with detailed call logs, performance metrics, and AI-driven insights. Empower your decisions with real-time data at your fingertips.",
                icon: "📈"
              },
              {
                title: "Run Outbound Campaigns",
                description: "Seamlessly execute outbound calls directly from the dashboard. Monitor progress, track outcomes, and optimize your outreach for maximum impact.",
                icon: "📞"
              },
              {
                title: "Access Recordings and Summaries",
                description: "Review call recordings, explore accurate transcriptions, and skim through AI-generated summaries to uncover valuable customer insights effortlessly.",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Glass effect glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                    <p className="text-white/80 leading-relaxed text-lg">{feature.description}</p>
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

export default Solutions; 