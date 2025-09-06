import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is aiestra?",
      answer: "aiestra is an AI-powered voice agent platform that helps businesses automate customer interactions, reduce call volume, and provide 24/7 support through intelligent voice conversations."
    },
    {
      question: "Does aiestra offer a free trial?",
      answer: "Yes, we offer a comprehensive free trial that allows you to test our AI voice agents with your own workflows and integrations before making a commitment."
    },
    {
      question: "We already have a support team. Why use aiestra?",
      answer: "aiestra complements your existing team by handling routine inquiries, after-hours support, and high-volume calls, allowing your human agents to focus on complex issues and high-value interactions."
    },
    {
      question: "Is aiestra secure and compliant?",
      answer: "Absolutely. We maintain enterprise-level security with SOC2, HIPAA, GDPR, and PCI DSS compliance. All data is encrypted, stored in-house, and never shared with third parties."
    },
    {
      question: "Can I customize aiestra for my workflows?",
      answer: "Yes, aiestra is highly customizable. You can train the AI on your specific knowledge base, customize responses, integrate with your existing tools, and adapt workflows to match your business processes."
    },
    {
      question: "Can aiestra integrate with our current tools?",
      answer: "Yes, we support 200+ integrations including major CRMs like Salesforce and HubSpot, telephony platforms like Twilio and Genesys, and helpdesk systems like Zendesk and ServiceNow."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can get started in as little as 24 hours. Our platform is designed for rapid deployment with pre-built templates, easy integration setup, and comprehensive onboarding support."
    },
    {
      question: "What if the AI says something off-brand?",
      answer: "aiestra uses strict guardrails and approved knowledge sources to ensure all responses align with your brand voice and policies. The AI is trained on your specific content and cannot deviate from approved information."
    },
    {
      question: "What happens if the AI gets stuck?",
      answer: "Our AI is designed with fallback mechanisms and seamless human handoff capabilities. If the AI encounters an issue, it can transfer the call to a human agent while maintaining context and conversation history."
    },
    {
      question: "Can aiestra filter spam calls?",
      answer: "Yes, aiestra includes advanced spam detection and call filtering capabilities. It can identify and block unwanted calls while ensuring legitimate customers always get through to receive the support they need."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Title and Introduction */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full uppercase tracking-wide">
                FAQ
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Everything You Need to Know About aiestra's AI Voice Agents
              </h2>
            </div>

            {/* Right Column - FAQ List */}
            <div className="space-y-0">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                      {item.question}
                    </span>
                    <span className={`text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </button>
                  
                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 pb-4 sm:pb-6' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-600 leading-relaxed pr-4 sm:pr-8 text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* See More FAQs Link */}
              <div className="pt-8">
                <button className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
                  See more FAQs →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 