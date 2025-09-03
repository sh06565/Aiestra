import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Henry Ford",
      role: "Operations Analyst",
      content: "Thanks to Interacts AI, we've streamlined operations and achieved higher customer satisfaction rates. I highly recommend it for teams focused on efficiency.",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      name: "Ivy Wilson",
      role: "Business Consultant",
      content: "Interacts AI has become an indispensable tool for our team. The AI-powered insights help us solve problems faster and provide better customer experiences.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Jack Brown",
      role: "Performance Manager",
      content: "This AI solution has allowed us to exceed our performance targets. Its seamless CRM integration and analytics tools are a must-have for any business.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Kathy Adams",
      role: "Innovation Lead",
      content: "Interacts AI has opened new opportunities for innovation within our team. The system's capabilities have revolutionized how we handle customer engagement.",
      avatar: "👩‍🎨",
      rating: 5
    },
    {
      name: "Leo Carter",
      role: "Technology Strategist",
      content: "This technology is transformative. The voice bot and analytics features have brought unprecedented efficiency to our operations.",
      avatar: "👨‍🔬",
      rating: 5
    },
    {
      name: "Mia Turner",
      role: "Systems Integrator",
      content: "The seamless integration with our existing systems has made Interacts AI an invaluable part of our operations. It's simply revolutionary!",
      avatar: "👩‍💻",
      rating: 5
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
            Know Your Customers Like{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Never Before
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Understand your audience with AI-powered insights. From real-time transcriptions to behavioral summaries, gain the clarity you need to optimize engagement and improve outcomes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Glass effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-white/80 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "99.9%",
                label: "Uptime Guarantee",
                description: "Enterprise-grade reliability"
              },
              {
                number: "30+",
                label: "Languages Supported",
                description: "Global reach capability"
              },
              {
                number: "24/7",
                label: "Customer Support",
                description: "Always here to help"
              }
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Glass effect glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.description}</div>
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

export default Testimonials;
