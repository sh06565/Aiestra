import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI voice agents.",
      features: [
        "Up to 1,000 calls/month",
        "Basic voice agent setup",
        "Email support",
        "Standard integrations",
        "Call recordings",
        "Basic analytics"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses that need advanced features and scalability.",
      features: [
        "Up to 10,000 calls/month",
        "Advanced voice agent customization",
        "Priority support",
        "Advanced integrations",
        "Real-time transcription",
        "Advanced analytics & reporting",
        "Multi-language support",
        "CRM integration"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements.",
      features: [
        "Unlimited calls",
        "Custom voice agent development",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "White-label options",
        "SLA guarantees",
        "On-premise deployment options"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Glass Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Choose the plan that fits your business needs. All plans include our core AI voice agent technology.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`group ${plan.popular ? 'lg:scale-105' : ''}`}>
              <div className={`relative p-8 bg-white/5 backdrop-blur-md border rounded-2xl transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 h-full ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-400/10 to-blue-400/10' 
                  : 'border-white/10'
              }`}>
                {/* Glass effect glow */}
                <div className={`absolute inset-0 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'bg-gradient-to-br from-purple-500/5 to-cyan-500/5'
                }`}></div>
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-sm font-bold rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/70 text-lg">{plan.period}</span>
                    </div>
                    <p className="text-white/80 text-sm">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:from-cyan-500 hover:to-blue-500'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
                    }`}>
                      {plan.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="group">
            <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
              {/* Glass effect glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">All Plans Include</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "24/7 AI voice agent availability",
                    "Secure data encryption",
                    "Regular updates & improvements",
                    "Mobile app access",
                    "API access",
                    "Community support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

