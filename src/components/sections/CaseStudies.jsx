import React from 'react';

const CaseStudies = () => {
  const testimonials = [
    {
      name: "Manu Arora",
      role: "Chief Executive Officer",
      company: "Ami Berg",
      content: "The Enterprise plan transformed our customer engagement. The Interacts AI team customized the voice bot to match our unique industry needs, helping us handle inquiries with precision and saving significant operational costs.",
      avatar: "👨‍💼",
      interactions: "12"
    },
    {
      name: "Dr. R. Sivaprakash",
      role: "Founder and CEO",
      company: "Tech Innovations",
      content: "Interacts AI has redefined customer service for us. The 24/7 multilingual support has drastically improved our global client experience. Their team's support during onboarding was phenomenal, ensuring smooth implementation.",
      avatar: "👨‍🔬",
      interactions: "8"
    },
    {
      name: "Mikhael Cook",
      role: "Chief Executive Officer",
      company: "Growth Dynamics",
      content: "Our customer engagement has never been better. The AI's real-time responses and seamless CRM integration have helped us boost lead conversions and streamline our workflows as we scale rapidly.",
      avatar: "👨‍💻",
      interactions: "15"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Glass Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Visionary Leaders
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed">
            Interacts AI empowers serial entrepreneurs, innovators, and high-achievers to scale their businesses effortlessly.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="relative p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                {/* Glass effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                      <p className="text-white/70 text-lg">{testimonial.role}</p>
                      <p className="text-cyan-400 text-lg">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed text-lg mb-8">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg text-white/60">Track Interactions</div>
                    <div className="text-3xl font-bold text-cyan-400">{testimonial.interactions}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Bob Smith",
              role: "Industry Analyst",
              content: "This AI solution has brought unmatched efficiency to our workflows. The detailed call analytics have helped us cut costs and deliver better outcomes.",
              avatar: "👨‍💼"
            },
            {
              name: "Eva Green",
              role: "Operations Director",
              content: "Thanks to Interacts AI, we've streamlined operations and achieved higher customer satisfaction rates. I highly recommend it for teams focused on efficiency.",
              avatar: "👩‍💼"
            },
            {
              name: "Frank Moore",
              role: "Project Manager",
              content: "Interacts AI integrates effortlessly with our tools like HubSpot and Google Calendar. It has completely transformed how our team collaborates and manages tasks.",
              avatar: "👨‍💻"
            },
            {
              name: "Grace Hall",
              role: "Marketing Specialist",
              content: "The intuitive dashboard makes it easy for my team to analyze call performance and access transcriptions. It's been a game-changer for our marketing strategies.",
              avatar: "👩‍🎨"
            }
          ].map((testimonial, index) => (
            <div key={index} className="group">
              <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Glass effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-white/70 text-base">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed">{testimonial.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

