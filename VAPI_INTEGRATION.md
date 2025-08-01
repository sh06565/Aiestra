# Vapi AI Integration Guide

This guide explains how to integrate Vapi AI voice and chat agents into your Aiestra application.

## 🎯 Overview

The Vapi AI integration provides:
- **Voice Agents**: Real-time speech recognition and natural voice conversations
- **Chat Agents**: Text-based conversations with autonomous AI responses
- **Mode Switching**: Seamless switching between voice and chat modes
- **Secure Configuration**: Environment-based configuration management
- **Customizable UI**: Full control over widget appearance and behavior

## 🔧 Setup Instructions

### 1. Get Your Vapi AI Credentials

1. Sign up at [Vapi AI](https://vapi.ai)
2. Create a new project
3. Get your **Public Key** and **Assistant ID** from the dashboard
4. Configure your assistant with the desired capabilities

### 2. Configure Environment Variables

Add these to your `.env` file:

```bash
# Required Vapi Configuration
VITE_VAPI_PUBLIC_KEY=your_vapi_public_key_here
VITE_VAPI_ASSISTANT_ID=your_vapi_assistant_id_here

# Optional Customization
VITE_VAPI_THEME=dark
VITE_VAPI_TITLE=AIESTRA
VITE_VAPI_ACCENT_COLOR=#14B8A6
```

### 3. Basic Usage

```jsx
import VapiWidget from './components/VapiWidget'

function App() {
  return (
    <div>
      <VapiWidget 
        mode="voice" 
        showModeSelector={true}
      />
    </div>
  )
}
```

## 🎮 Component API

### VapiWidget Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'voice' \| 'chat'` | `'voice'` | Initial widget mode |
| `onModeChange` | `function` | - | Callback when mode changes |
| `showModeSelector` | `boolean` | `true` | Show mode switching buttons |
| `className` | `string` | `''` | Additional CSS classes |

### Mode-Specific Configurations

#### Voice Mode
- **Size**: Compact
- **Features**: Real-time speech, transcript display
- **UI**: Floating button with voice interface

#### Chat Mode
- **Size**: Full
- **Features**: Text-based conversations
- **UI**: Chat interface with message history

## 🎨 Customization

### Environment Variables for Styling

```bash
# Colors
VITE_VAPI_BASE_BG_COLOR=#000000
VITE_VAPI_ACCENT_COLOR=#14B8A6
VITE_VAPI_CTA_BUTTON_COLOR=#000000
VITE_VAPI_CTA_BUTTON_TEXT_COLOR=#ffffff

# Layout
VITE_VAPI_BORDER_RADIUS=large
VITE_VAPI_SIZE=compact
VITE_VAPI_POSITION=bottom-right

# Content
VITE_VAPI_TITLE=AIESTRA
VITE_VAPI_START_BUTTON_TEXT=Start Call
VITE_VAPI_END_BUTTON_TEXT=End Call
VITE_VAPI_CTA_SUBTITLE=Aiestra is online for consultation
VITE_VAPI_CHAT_FIRST_MESSAGE=Hey, How can I help you today?
VITE_VAPI_CHAT_PLACEHOLDER=Type your message...

# Features
VITE_VAPI_VOICE_SHOW_TRANSCRIPT=true
VITE_VAPI_CONSENT_REQUIRED=true
```

### Advanced Configuration

```jsx
// Custom mode switching
const [widgetMode, setWidgetMode] = useState('voice')

const handleModeChange = (newMode) => {
  setWidgetMode(newMode)
  // Additional logic here
}

<VapiWidget 
  mode={widgetMode}
  onModeChange={handleModeChange}
  showModeSelector={true}
/>
```

## 🔒 Security Features

### Environment Variable Validation
- Automatic validation of required credentials
- Development warnings for missing configuration
- Secure fallbacks for missing values

### Configuration Security
- All sensitive data stored in environment variables
- No hardcoded credentials in source code
- Validation on application startup

## 🚀 Usage Examples

### 1. Basic Voice Agent
```jsx
<VapiWidget mode="voice" />
```

### 2. Chat-Only Agent
```jsx
<VapiWidget 
  mode="chat" 
  showModeSelector={false}
/>
```

### 3. Custom Styled Agent
```jsx
// In your .env file:
VITE_VAPI_THEME=light
VITE_VAPI_ACCENT_COLOR=#00FFC8
VITE_VAPI_TITLE=My AI Assistant

// In your component:
<VapiWidget mode="voice" className="custom-styles" />
```

### 4. Demo Page Integration
```jsx
import VapiDemo from './components/VapiDemo'

function App() {
  return (
    <div>
      <VapiDemo />
    </div>
  )
}
```

## 🔧 Troubleshooting

### Common Issues

#### 1. Widget Not Loading
**Symptoms**: Widget shows "Vapi AI Not Configured"
**Solution**: 
- Check that `VITE_VAPI_PUBLIC_KEY` and `VITE_VAPI_ASSISTANT_ID` are set
- Verify credentials in Vapi dashboard
- Check browser console for errors

#### 2. Script Loading Issues
**Symptoms**: "Failed to load Vapi AI script"
**Solution**:
- Check internet connection
- Verify CDN access
- Try refreshing the page

#### 3. Mode Switching Not Working
**Symptoms**: Mode selector doesn't change widget behavior
**Solution**:
- Check that `onModeChange` callback is working
- Verify widget recreation logic
- Check browser console for errors

### Debug Mode

Enable debug mode to see detailed logs:

```bash
VITE_ENABLE_DEBUG_MODE=true
```

## 📊 Analytics & Monitoring

### Built-in Monitoring
- Configuration validation on startup
- Script loading status
- Mode switching events
- Error logging

### Custom Analytics
```jsx
const handleModeChange = (mode) => {
  // Track mode changes
  analytics.track('vapi_mode_change', { mode })
  
  // Update widget
  setWidgetMode(mode)
}
```

## 🎯 Best Practices

### 1. Configuration Management
- Use environment-specific `.env` files
- Never commit real credentials to version control
- Rotate API keys regularly

### 2. User Experience
- Provide clear mode switching options
- Show loading states during initialization
- Handle errors gracefully

### 3. Performance
- Script loads asynchronously
- Widget reuses existing script instances
- Efficient mode switching without full reload

### 4. Security
- Validate all environment variables
- Use HTTPS in production
- Implement proper consent management

## 🔗 Resources

- [Vapi AI Documentation](https://docs.vapi.ai)
- [Vapi AI Dashboard](https://dashboard.vapi.ai)
- [Environment Variables Guide](./SECURITY.md)
- [Configuration Validation](./src/utils/validateConfig.js)

## 📞 Support

For Vapi AI integration issues:
- Check the [Vapi AI documentation](https://docs.vapi.ai)
- Review environment variable configuration
- Enable debug mode for detailed logs
- Contact Aiestra support at sales@aiestra.com

---

**Note**: This integration requires a valid Vapi AI account and properly configured assistant. Make sure to test thoroughly in development before deploying to production. 