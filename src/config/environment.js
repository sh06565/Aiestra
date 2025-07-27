// Environment Configuration for Aiestra
// This file centralizes all environment variables and provides fallbacks

const config = {
  // Google Calendar Configuration
  calendar: {
    schedulingUrl: import.meta.env.VITE_GOOGLE_CALENDAR_SCHEDULING_URL,
    buttonColor: import.meta.env.VITE_CALENDAR_BUTTON_COLOR || '#00FFC8',
    buttonLabel: import.meta.env.VITE_CALENDAR_BUTTON_LABEL || 'Book an appointment',
  },

  // Contact Information
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'sales@aiestra.com',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+1 (555) 123-4567',
    address: import.meta.env.VITE_CONTACT_ADDRESS || 'San Francisco, CA',
  },

  // API Keys (for future use)
  api: {
    openai: import.meta.env.VITE_OPENAI_API_KEY || '',
    anthropic: import.meta.env.VITE_ANTHROPIC_API_KEY || '',
    googleAI: import.meta.env.VITE_GOOGLE_AI_API_KEY || '',
    stripe: {
      public: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
      secret: import.meta.env.VITE_STRIPE_SECRET_KEY || '',
    },
    sendgrid: import.meta.env.VITE_SENDGRID_API_KEY || '',
  },

  // Analytics and Tracking
  analytics: {
    googleAnalytics: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
    mixpanel: import.meta.env.VITE_MIXPANEL_TOKEN || '',
  },

  // Feature Flags
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableDebugMode: import.meta.env.VITE_ENABLE_DEBUG_MODE === 'true',
    environment: import.meta.env.VITE_ENVIRONMENT || 'development',
  },

  // Database Configuration (for future backend integration)
  database: {
    url: import.meta.env.VITE_DATABASE_URL || '',
    user: import.meta.env.VITE_DATABASE_USER || '',
    password: import.meta.env.VITE_DATABASE_PASSWORD || '',
  },

  // Authentication (for future use)
  auth: {
    secret: import.meta.env.VITE_AUTH_SECRET || '',
    jwtSecret: import.meta.env.VITE_JWT_SECRET || '',
  },
}

// Helper function to check if we're in development
export const isDevelopment = () => config.features.environment === 'development'

// Helper function to check if analytics should be enabled
export const shouldEnableAnalytics = () => config.features.enableAnalytics

// Helper function to get API key safely
export const getApiKey = (service) => {
  const key = config.api[service]
  if (!key && isDevelopment()) {
    console.warn(`API key for ${service} is not configured`)
  }
  return key
}

// Helper function to validate required environment variables
export const validateEnvironment = () => {
  const required = [
    'VITE_GOOGLE_CALENDAR_SCHEDULING_URL',
    'VITE_CONTACT_EMAIL',
  ]

  const missing = required.filter(key => !import.meta.env[key])
  
  if (missing.length > 0 && isDevelopment()) {
    console.warn('Missing required environment variables:', missing)
    console.warn('Please check your .env file')
  }

  return missing.length === 0
}

// Helper function to check if Google Calendar is properly configured
export const isGoogleCalendarConfigured = () => {
  const url = import.meta.env.VITE_GOOGLE_CALENDAR_SCHEDULING_URL
  return url && url.length > 0 && !url.includes('YOUR_SCHEDULE_ID')
}

export default config 