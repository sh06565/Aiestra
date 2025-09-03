import React from 'react';
import LogoLoop from '../ui/LogoLoop';

const Integrations = () => {
  // Integration logos with relevant tech companies
  const integrationLogos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/3CX_logo.svg/2560px-3CX_logo.svg.png",
      alt: "3CX",
      href: "https://www.3cx.com",
      title: "3CX"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/RingCentral_logo.svg/2560px-RingCentral_logo.svg.png",
      alt: "RingCentral",
      href: "https://www.ringcentral.com",
      title: "RingCentral"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Verizon_2015_logo.svg/2560px-Verizon_2015_logo.svg.png",
      alt: "Verizon",
      href: "https://www.verizon.com",
      title: "Verizon"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Salesforce_logo.svg/2560px-Salesforce_logo.svg.png",
      alt: "Salesforce",
      href: "https://www.salesforce.com",
      title: "Salesforce"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      alt: "Google",
      href: "https://cloud.google.com",
      title: "Google Cloud"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Upwork_Logo.svg/2560px-Upwork_Logo.svg.png",
      alt: "Upwork",
      href: "https://www.upwork.com",
      title: "Upwork"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Zapier_logo.svg/2560px-Zapier_logo.svg.png",
      alt: "Zapier",
      href: "https://zapier.com",
      title: "Zapier"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Stripe_logo%2C_revised_2016.svg/2560px-Stripe_logo%2C_revised_2016.svg.png",
      alt: "Stripe",
      href: "https://stripe.com",
      title: "Stripe"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Genesys_logo.svg/2560px-Genesys_logo.svg.png",
      alt: "Genesys",
      href: "https://www.genesys.com",
      title: "Genesys"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Twilio_logo.svg/2560px-Twilio_logo.svg.png",
      alt: "Twilio",
      href: "https://www.twilio.com",
      title: "Twilio"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Avaya_logo.svg/2560px-Avaya_logo.svg.png",
      alt: "Avaya",
      href: "https://www.avaya.com",
      title: "Avaya"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Five9_logo.svg/2560px-Five9_logo.svg.png",
      alt: "Five9",
      href: "https://www.five9.com",
      title: "Five9"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/HubSpot_logo.svg/2560px-HubSpot_logo.svg.png",
      alt: "HubSpot",
      href: "https://www.hubspot.com",
      title: "HubSpot"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Zendesk_logo.svg/2560px-Zendesk_logo.svg.png",
      alt: "Zendesk",
      href: "https://www.zendesk.com",
      title: "Zendesk"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Freshdesk_logo.svg/2560px-Freshdesk_logo.svg.png",
      alt: "Freshdesk",
      href: "https://freshdesk.com",
      title: "Freshdesk"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/ServiceNow_logo.svg/2560px-ServiceNow_logo.svg.png",
      alt: "ServiceNow",
      href: "https://www.servicenow.com",
      title: "ServiceNow"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Atlassian_logo.svg/2560px-Atlassian_logo.svg.png",
      alt: "Jira",
      href: "https://www.atlassian.com/software/jira",
      title: "Jira"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-6">
              INTEGRATIONS
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Connect to Your CRM, Telephony & Tools
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
              No need to change your existing tools, aiestra connects to your tech stack with enterprise-grade APIs and out-of-the-box integrations. We work with platforms like Genesys, Twilio, Avaya, and Five9, CRMs like Salesforce, HubSpot, and Zendesk, and helpdesk systems including Freshdesk, ServiceNow, and Jira to streamline support, follow-ups, and lead conversions.
            </p>
            
            {/* Explore Integrations Button */}
            <button className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-lg hover:bg-gray-900 hover:text-white">
              Explore Integrations
            </button>
          </div>

          {/* Auto-Moving Logo Carousel */}
          <div className="relative">
            <div className="h-32 flex items-center justify-center">
              <LogoLoop
                logos={integrationLogos}
                speed={80}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Integration partners"
              />
            </div>
          </div>

          {/* Additional Integration Info */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Seamlessly integrate with your existing workflow. Our platform works with the tools you already trust, 
              making implementation fast and adoption smooth for your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
