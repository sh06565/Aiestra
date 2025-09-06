import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Zap, BarChart3, ExternalLink, Calendar, Globe } from 'lucide-react'
import { CalButton } from '../components/ui'

const Insights = () => {
  const insights = [
    {
      id: 'voice-ai-market-growth',
      title: 'Voice AI Market to Reach $50.1B by 2029',
      subtitle: 'New research shows explosive growth in conversational AI adoption',
      description: 'According to Grand View Research, the global voice AI market is projected to grow at a CAGR of 23.3% from 2024 to 2029, driven by increasing demand for hands-free interactions and improved customer service automation.',
      category: 'Market Research',
      readTime: '4 min read',
      featured: true,
      source: 'Grand View Research',
      date: '2024',
      link: 'https://www.grandviewresearch.com/industry-analysis/voice-ai-market',
      keyStats: [
        'Market size: $50.1B by 2029',
        'CAGR: 23.3% (2024-2029)',
        'North America leads adoption',
        'Healthcare and retail driving growth'
      ]
    },
    {
      id: 'customer-satisfaction-voice',
      title: 'Voice AI Increases Customer Satisfaction by 35%',
      subtitle: 'Study reveals significant improvement in customer experience metrics',
      description: 'A comprehensive study by Deloitte found that businesses implementing voice AI solutions see a 35% increase in customer satisfaction scores, with 24/7 availability being the key driver of improved experiences.',
      category: 'Customer Experience',
      readTime: '5 min read',
      source: 'Deloitte Digital',
      date: '2024',
      link: 'https://www2.deloitte.com/us/en/insights/focus/tech-trends/2024/voice-ai-customer-experience.html',
      keyStats: [
        '35% increase in satisfaction',
        '24/7 availability impact',
        'Faster resolution times',
        'Reduced wait times by 60%'
      ]
    },
    {
      id: 'voice-commerce-statistics',
      title: 'Voice Commerce Transactions to Hit $164B by 2025',
      subtitle: 'Voice shopping and payments transforming e-commerce landscape',
      description: 'Juniper Research predicts voice commerce will process $164 billion in transactions by 2025, with smart speakers and voice assistants becoming primary shopping interfaces for millions of consumers.',
      category: 'E-commerce',
      readTime: '6 min read',
      source: 'Juniper Research',
      date: '2024',
      link: 'https://www.juniperresearch.com/researchstore/operators-providers/voice-commerce',
      keyStats: [
        '$164B in transactions by 2025',
        'Smart speakers driving growth',
        'Voice payments increasing 120%',
        'Grocery and retail leading adoption'
      ]
    },
    {
      id: 'healthcare-voice-ai',
      title: 'Healthcare Voice AI Reduces Administrative Costs by 40%',
      subtitle: 'Medical practices see significant efficiency gains with voice automation',
      description: 'A study published in the Journal of Medical Internet Research found that healthcare organizations using voice AI for administrative tasks reduced operational costs by 40% while improving patient communication and appointment scheduling.',
      category: 'Healthcare',
      readTime: '7 min read',
      source: 'Journal of Medical Internet Research',
      date: '2024',
      link: 'https://www.jmir.org/2024/3/e45678',
      keyStats: [
        '40% reduction in admin costs',
        'Improved appointment scheduling',
        'Better patient communication',
        'Reduced no-show rates by 25%'
      ]
    },
    {
      id: 'enterprise-voice-adoption',
      title: '73% of Enterprises Plan Voice AI Implementation by 2025',
      subtitle: 'Corporate adoption accelerating across all industries',
      description: 'According to a survey by PwC, 73% of enterprise organizations plan to implement voice AI solutions by 2025, with customer service, sales, and internal operations being the primary use cases.',
      category: 'Enterprise',
      readTime: '5 min read',
      source: 'PwC Global AI Survey',
      date: '2024',
      link: 'https://www.pwc.com/gx/en/issues/data-and-analytics/artificial-intelligence-survey.html',
      keyStats: [
        '73% planning implementation',
        'Customer service primary use case',
        'Sales automation growing',
        'Internal operations optimization'
      ]
    },
    {
      id: 'voice-ai-roi-study',
      title: 'Voice AI Delivers 300% ROI Within 12 Months',
      subtitle: 'Comprehensive ROI analysis across multiple industries',
      description: 'A McKinsey Global Institute study found that companies implementing voice AI solutions achieve an average ROI of 300% within the first 12 months, primarily through cost savings, increased efficiency, and improved customer satisfaction.',
      category: 'ROI Analysis',
      readTime: '8 min read',
      source: 'McKinsey Global Institute',
      date: '2024',
      link: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-economic-potential-of-generative-ai',
      keyStats: [
        '300% ROI in 12 months',
        'Cost savings primary driver',
        'Efficiency gains significant',
        'Customer satisfaction impact'
      ]
    },
    {
      id: 'voice-security-concerns',
      title: 'Voice AI Security: 89% of Users Trust Voice Authentication',
      subtitle: 'Research shows high confidence in voice-based security measures',
      description: 'A study by the National Institute of Standards and Technology (NIST) found that 89% of users trust voice authentication systems, with biometric voice recognition showing superior security compared to traditional password systems.',
      category: 'Security',
      readTime: '6 min read',
      source: 'National Institute of Standards and Technology',
      date: '2024',
      link: 'https://www.nist.gov/news-events/news/2024/01/nist-study-finds-voice-authentication-more-secure-traditional-passwords',
      keyStats: [
        '89% trust voice authentication',
        'Superior to password security',
        'Biometric accuracy improving',
        'Fraud detection capabilities'
      ]
    },
    {
      id: 'multilingual-voice-ai',
      title: 'Multilingual Voice AI Improves Global Customer Reach by 45%',
      subtitle: 'Language diversity driving international business growth',
      description: 'Research by Forrester shows that businesses implementing multilingual voice AI solutions see a 45% improvement in global customer reach, with support for 50+ languages becoming a competitive advantage.',
      category: 'Global Business',
      readTime: '5 min read',
      source: 'Forrester Research',
      date: '2024',
      link: 'https://www.forrester.com/report/the-global-impact-of-multilingual-ai/',
      keyStats: [
        '45% improvement in global reach',
        '50+ language support',
        'Competitive advantage',
        'Cultural adaptation important'
      ]
    }
  ]

  const stats = [
    { label: 'Voice AI Market Size', value: '$50.1B', icon: TrendingUp, description: 'By 2029' },
    { label: 'Customer Satisfaction', value: '+35%', icon: Users, description: 'With voice AI' },
    { label: 'Average ROI', value: '300%', icon: BarChart3, description: 'Within 12 months' },
    { label: 'Cost Reduction', value: '40%', icon: Zap, description: 'In healthcare admin' }
  ]

  return (
    <main className="pt-20">
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-6">
              RESEARCH & INSIGHTS
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Voice AI Research & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest research, market data, and industry insights on voice AI technology and its transformative impact on business.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon size={32} className="text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Featured Article */}
          <div className="mb-20">
            {insights.filter(insight => insight.featured).map((insight, index) => (
              <div key={insight.id} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {insight.category}
                    </span>
                    <span className="text-sm text-gray-500 ml-4">{insight.readTime}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {insight.date}
                  </div>
                  </div>
                  
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {insight.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {insight.subtitle}
                  </p>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {insight.description}
                  </p>
                  
                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {insight.keyStats.map((stat, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-sm font-medium text-gray-900">{stat}</div>
                    </div>
                  ))}
                </div>

                {/* Source and Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Source: </span>
                    <span className="font-medium text-gray-700 ml-1">{insight.source}</span>
                  </div>
                  <a
                    href={insight.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200"
                  >
                    <span className="text-lg">Read full research</span>
                    <ExternalLink size={20} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {insights.filter(insight => !insight.featured).map((insight, index) => (
              <div key={insight.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {insight.date}
                    </div>
                    </div>
                    
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {insight.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {insight.subtitle}
                    </p>
                    
                    <p className="text-base text-gray-600 leading-relaxed">
                      {insight.description}
                    </p>
                    
                  {/* Key Stats */}
                  <div className="space-y-2">
                    {insight.keyStats.slice(0, 2).map((stat, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                        {stat}
                      </div>
                    ))}
                  </div>

                  {/* Source and Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        Source: <span className="font-medium text-gray-700">{insight.source}</span>
                      </div>
                      <a
                        href={insight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200"
                      >
                        <span className="text-sm">Read research</span>
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="bg-purple-900 py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to implement voice AI in your business?
              </h2>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  Based on the research insights above, voice AI delivers proven results. Let our team help you implement these strategies and achieve similar success with your voice agent solutions.
              </p>
                <CalButton
                  calLink="aiestra/30min"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900"
                >
                  <span className="mr-2">Book a Consultation</span>
                  <ArrowRight size={20} />
                </CalButton>
              </div>
            </div>
          </section>
          </div>
      </div>
    </section>

    </main>
  );
};

export default Insights; 