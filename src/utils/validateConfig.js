import config, { validateEnvironment, isDevelopment, isGoogleCalendarConfigured } from '../config/environment'

/**
 * Validates the application configuration
 * Logs warnings for missing optional configurations
 * Logs errors for missing required configurations
 */
export const validateAppConfig = () => {
  console.log('🔍 Validating Aiestra configuration...')
  
  const issues = []
  const warnings = []

  // Check required environment variables
  if (!validateEnvironment()) {
    issues.push('Missing required environment variables')
  }

  // Check Google Calendar configuration
  if (!isGoogleCalendarConfigured()) {
    issues.push('Google Calendar scheduling URL is not properly configured')
  }

  // Check contact information
  if (!config.contact.email || config.contact.email === 'hello@aiestra.ai') {
    warnings.push('Contact email is using default value')
  }

  if (!config.contact.phone || config.contact.phone === '+1 (555) 123-4567') {
    warnings.push('Contact phone is using default value')
  }

  // Check API keys (optional but warn if not set)
  const apiKeys = ['openai', 'anthropic', 'googleAI', 'stripe.public', 'stripe.secret', 'sendgrid']
  apiKeys.forEach(key => {
    const value = key.includes('.') 
      ? key.split('.').reduce((obj, k) => obj?.[k], config.api)
      : config.api[key]
    
    if (!value && isDevelopment()) {
      warnings.push(`${key} API key is not configured (optional)`)
    }
  })

  // Check analytics configuration
  if (!config.analytics.googleAnalytics && isDevelopment()) {
    warnings.push('Google Analytics ID is not configured (optional)')
  }

  // Log results
  if (issues.length > 0) {
    console.error('❌ Configuration issues found:')
    issues.forEach(issue => console.error(`  - ${issue}`))
    console.error('\nPlease check your .env file and SECURITY.md for setup instructions.')
  }

  if (warnings.length > 0 && isDevelopment()) {
    console.warn('⚠️  Configuration warnings:')
    warnings.forEach(warning => console.warn(`  - ${warning}`))
  }

  if (issues.length === 0 && warnings.length === 0) {
    console.log('✅ Configuration validated successfully!')
  } else if (issues.length === 0) {
    console.log('✅ Required configuration is valid (warnings are optional)')
  }

  return {
    isValid: issues.length === 0,
    issues,
    warnings
  }
}

/**
 * Logs current configuration (without sensitive data)
 */
export const logConfigStatus = () => {
  if (!isDevelopment()) return // Only log in development

  console.log('📋 Current configuration:')
  console.log(`  Environment: ${config.features.environment}`)
  console.log(`  Debug Mode: ${config.features.enableDebugMode}`)
  console.log(`  Analytics: ${config.features.enableAnalytics}`)
  console.log(`  Contact Email: ${config.contact.email}`)
  console.log(`  Calendar URL: ${isGoogleCalendarConfigured() ? '✅ Configured' : '❌ Not configured'}`)
  
  // Check API keys (just show if they're set, not the actual values)
  const apiStatus = Object.keys(config.api).map(key => {
    const value = config.api[key]
    return `${key}: ${value ? '✅ Set' : '❌ Not set'}`
  }).join(', ')
  
  console.log(`  API Keys: ${apiStatus}`)
}

export default validateAppConfig 