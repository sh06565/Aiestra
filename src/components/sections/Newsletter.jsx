import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Glass Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Stay{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Updated
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Get the latest insights on AI voice technology, industry trends, and tips to optimize your customer interactions.
          </p>

          {/* Newsletter Form */}
          <div className="group mb-16">
            <div className="relative max-w-2xl mx-auto">
              <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Glass effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:bg-white/20 transition-all duration-300"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-white/60 text-sm mt-4">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "Expert Insights",
                description: "Access to industry experts and thought leaders sharing their knowledge on AI and customer experience."
              },
              {
                icon: "🚀",
                title: "Latest Updates",
                description: "Be the first to know about new features, integrations, and platform improvements."
              },
              {
                icon: "💡",
                title: "Best Practices",
                description: "Learn proven strategies and tips to maximize the value of your AI voice agents."
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 text-center">
                  {/* Glass effect glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
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

export default Newsletter; 