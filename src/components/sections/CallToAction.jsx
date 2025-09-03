import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Background Glass Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionize
            </span>{' '}
            your conversations?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover how Interacts AI is helping businesses streamline communication and enhance customer experiences with intelligent voice bots.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="group">
              <div className="relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/30">
                {/* Glass effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/30">
                {/* Glass effect glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <button className="px-8 py-3 bg-white/20 text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What are the pricing options for Interacts AI voice bot services?",
                  answer: "We offer three main plans: Starter ($99/month), Professional ($299/month), and Enterprise (custom pricing). All plans include our core AI voice agent technology with different feature sets and call volumes."
                },
                {
                  question: "Does your voice bot support multiple languages?",
                  answer: "Yes! Our AI voice agents support over 100 languages, ensuring global reach and enhanced customer experiences for businesses operating internationally."
                },
                {
                  question: "How customizable is the voice bot for industry-specific needs?",
                  answer: "Highly customizable! We tailor every detail to fit your unique business requirements, from industry-specific terminology to custom workflows and integrations."
                },
                {
                  question: "What kind of support do Enterprise clients receive?",
                  answer: "Enterprise clients receive dedicated account management, custom development, advanced security features, SLA guarantees, and priority support for mission-critical operations."
                }
              ].map((faq, index) => (
                <div key={index} className="group">
                  <div className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Glass effect glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-all duration-300"></div>
                    
                    <div className="relative z-10">
                      <h4 className="text-lg font-bold text-white mb-3">{faq.question}</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

