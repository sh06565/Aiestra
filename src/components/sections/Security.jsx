import React from 'react';
import '../../styles/Security.css';

const Security = () => {
  const securityFeatures = [
    {
      title: "Strict Guardrails, No Hallucinations",
      description: "AI pulls from approved knowledge sources to ensure accurate, brand-safe replies. No guesswork or off-script responses, just clear boundaries.",
      icon: "Shield"
    },
    {
      title: "SOC2, HIPAA, GDPR-Compliant",
      description: "Fully compliant with US & EU data regulations. Your sensitive data is handled securely, with built-in privacy protections across every interaction.",
      icon: "Check"
    },
    {
      title: "200+ Integrations Supported",
      description: "Connect phone systems, CRMs, and calendars using SIP or API. Data flows in real time for fast setup and deep sync with your tools.",
      icon: "Link"
    },
    {
      title: "Data Managed In-House",
      description: "All customer data and call logs are encrypted and stored internally. Nothing goes to third parties, ensuring total control and compliance.",
      icon: "Database"
    },
    {
      title: "PCI DSS Compliant",
      description: "Protect payment and cardholder data with built-in PCI DSS compliance. Ideal for secure workflows like payments or account verification.",
      icon: "Lock"
    },
    {
      title: "Pen Tests & Unit Testing",
      description: "We run ongoing security testing to identify and fix vulnerabilities early. Every system is monitored and validated for safe, stable performance.",
      icon: "Target"
    }
  ];

  const getIconComponent = (iconName) => {
    const iconClasses = "w-6 h-6 text-purple-600";
    
    switch (iconName) {
      case "Shield":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "Check":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case "Link":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
      case "Database":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        );
      case "Lock":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case "Target":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Visual Graphic with Grid Background */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl opacity-60" 
                     style={{
                       backgroundImage: `
                         linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)
                       `,
                       backgroundSize: '20px 20px'
                     }}>
                </div>
                
                {/* Central Purple Lock */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl flex items-center justify-center shadow-2xl z-10">
                    <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>

                {/* Connecting Lines - Concentric Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 border border-gray-300/30 rounded-full"></div>
                  <div className="absolute w-48 h-48 sm:w-64 sm:h-64 border border-gray-300/20 rounded-full"></div>
                  <div className="absolute w-32 h-32 sm:w-48 sm:h-48 border border-gray-300/10 rounded-full"></div>
                </div>

                {/* Orbital Animation Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                    {/* Orbital Path */}
                    <div className="absolute inset-0 border border-gray-300/20 rounded-full"></div>
                    
                    {/* Orbiting Icons Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* AICPA SOC 2 */}
                      <div className="absolute animate-orbit-1">
                        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex flex-col items-center justify-center shadow-xl">
                          <span className="text-white text-xs font-bold text-center leading-tight">
                            <span className="block">AICPA</span>
                            <span className="block">SOC 2</span>
                            <span className="block text-xs opacity-80">on track</span>
                          </span>
                        </div>
                      </div>

                      {/* GDPR */}
                      <div className="absolute animate-orbit-2">
                        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex flex-col items-center justify-center shadow-xl relative">
                          <div className="absolute inset-2 border border-white/30 rounded-full"></div>
                          <span className="text-white text-sm sm:text-lg font-bold">GDPR</span>
                          <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                          <div className="absolute -top-2 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"></div>
                          <div className="absolute -bottom-1 -right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"></div>
                        </div>
                      </div>

                      {/* HIPAA */}
                      <div className="absolute animate-orbit-3">
                        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-xl">
                          <span className="text-white text-sm sm:text-lg font-bold">HIPAA</span>
                        </div>
                      </div>

                      {/* PCI DSS */}
                      <div className="absolute animate-orbit-4">
                        <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex flex-col items-center justify-center shadow-xl">
                          <span className="text-white text-xs font-bold text-center leading-tight">
                            <span className="block">PCI DSS</span>
                            <span className="block">COMPLIANT</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content and Security Features */}
            <div className="space-y-8">
              {/* Section Header */}
              <div className="mb-12">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full mb-4">
                  SECURITY
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Enterprise-Level Security
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  We combine strong compliance, strict data control, and 99.99% uptime to meet the demands of enterprise-grade operations — without compromising speed or flexibility.
                </p>
              </div>

              {/* Security Features Grid - 2 columns x 3 rows */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-purple-300">
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          {getIconComponent(feature.icon)}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Security Info */}
          {/* <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-purple-50 to-blue-50 px-8 py-6 rounded-2xl border border-purple-200">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-lg font-semibold text-gray-800">99.99% Uptime</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-lg font-semibold text-gray-800">End-to-End Encryption</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg font-semibold text-gray-800">Global Compliance</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Security;
