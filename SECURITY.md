# Security Guide for Aiestra

This document outlines security best practices for managing API keys, secrets, and sensitive configuration in the Aiestra project.

## 🔐 Environment Variables

### Current Setup
The project uses Vite's environment variable system with the `VITE_` prefix. All environment variables are centralized in `src/config/environment.js`.

### Required Environment Variables

#### Google Calendar Integration
```bash
VITE_GOOGLE_CALENDAR_SCHEDULING_URL=https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID?gv=true
VITE_CALENDAR_BUTTON_COLOR=#00FFC8
VITE_CALENDAR_BUTTON_LABEL=Book an appointment
```

#### Contact Information
```bash
VITE_CONTACT_EMAIL=hello@aiestra.ai
VITE_CONTACT_PHONE=+1 (555) 123-4567
VITE_CONTACT_ADDRESS=San Francisco, CA
```

### Optional Environment Variables (for future features)

#### AI API Keys
```bash
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key_here
```

#### Payment Processing
```bash
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key_here
VITE_STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
```

#### Email Services
```bash
VITE_SENDGRID_API_KEY=your_sendgrid_api_key_here
```

#### Analytics
```bash
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here
VITE_MIXPANEL_TOKEN=your_mixpanel_token_here
```

## 🛡️ Security Best Practices

### 1. Environment File Management

#### Never Commit .env Files
```bash
# Add to .gitignore
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

#### Use Environment-Specific Files
```bash
.env.development    # Development environment
.env.production     # Production environment
.env.staging        # Staging environment
```

### 2. API Key Security

#### Generate Strong Keys
- Use at least 32 characters for secrets
- Include a mix of letters, numbers, and special characters
- Use different keys for each environment

#### Rotate Keys Regularly
- Set up a schedule for key rotation
- Monitor API usage for unusual activity
- Have a plan for key revocation

#### Store Keys Securely
- Use a secrets management service in production
- Never hardcode keys in source code
- Use environment variables or secure vaults

### 3. Google Calendar Setup

#### Getting Your Scheduling URL
1. Go to Google Calendar
2. Create a new calendar or use existing one
3. Go to Settings > Calendars > [Your Calendar]
4. Scroll down to "Integrate calendar"
5. Copy the "Public URL to this calendar"
6. Add `?gv=true` to the end for the scheduling view

#### Security Considerations
- The scheduling URL is public but limited to your calendar
- Users can only book appointments, not view your full calendar
- Consider using a dedicated calendar for bookings

### 4. Development vs Production

#### Development
```bash
# .env.development
VITE_ENVIRONMENT=development
VITE_ENABLE_DEBUG_MODE=true
VITE_GOOGLE_CALENDAR_SCHEDULING_URL=https://calendar.google.com/calendar/appointments/schedules/DEV_SCHEDULE_ID?gv=true
```

#### Production
```bash
# .env.production
VITE_ENVIRONMENT=production
VITE_ENABLE_DEBUG_MODE=false
VITE_GOOGLE_CALENDAR_SCHEDULING_URL=https://calendar.google.com/calendar/appointments/schedules/PROD_SCHEDULE_ID?gv=true
```

## 🔧 Configuration Management

### Environment Validation
The project includes validation in `src/config/environment.js`:

```javascript
import { validateEnvironment } from '../config/environment'

// Validate on app startup
if (!validateEnvironment()) {
  console.error('Missing required environment variables')
}
```

### Safe API Key Access
```javascript
import { getApiKey } from '../config/environment'

// Safely get API key with fallback
const openaiKey = getApiKey('openai')
if (openaiKey) {
  // Use the key
}
```

## 🚨 Security Checklist

### Before Deployment
- [ ] All API keys are set in environment variables
- [ ] No hardcoded secrets in source code
- [ ] .env files are in .gitignore
- [ ] Different keys for dev/staging/production
- [ ] Google Calendar URL is correct
- [ ] Contact information is updated
- [ ] Analytics IDs are configured (if using)

### Regular Maintenance
- [ ] Rotate API keys quarterly
- [ ] Review API usage logs
- [ ] Update dependencies for security patches
- [ ] Monitor for unusual activity
- [ ] Backup configuration securely

### Emergency Procedures
- [ ] Have a plan to revoke compromised keys
- [ ] Know how to quickly update environment variables
- [ ] Have backup contact information
- [ ] Document incident response procedures

## 📞 Support

For security-related questions:
- Email: hello@aiestra.ai
- Create an issue in the repository
- Contact the development team

## 🔗 Additional Resources

- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Google Calendar API Documentation](https://developers.google.com/calendar)
- [OpenAI API Security](https://platform.openai.com/docs/guides/safety-best-practices)
- [Stripe Security](https://stripe.com/docs/security)

---

**Remember**: Security is an ongoing process. Regularly review and update your security practices as the application evolves. 