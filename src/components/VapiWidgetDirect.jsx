import React, { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const VapiWidgetDirect = ({ mode = 'voice' }) => {
  const { isDark } = useTheme()
  const widgetRef = useRef(null)

  useEffect(() => {
    // Load Vapi script
    const loadVapiScript = () => {
      if (!document.querySelector('script[src*="vapi-ai"]')) {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js'
        script.async = true
        script.type = 'text/javascript'
        document.head.appendChild(script)
      }
    }

    loadVapiScript()
  }, [])

  useEffect(() => {
    // Create widget when theme or mode changes
    const createWidget = () => {
      // Remove existing widget
      const existingWidget = document.querySelector('vapi-widget')
      if (existingWidget) {
        existingWidget.remove()
      }

      // Create new widget
      const widget = document.createElement('vapi-widget')
      
      // Set attributes based on your working example
      const attributes = {
        'public-key': '90977a5f-d71a-40c6-bb1d-501c4bcd00b2',
        'assistant-id': 'b67a226d-b680-4e13-b810-96d3022f1c99',
        'mode': mode,
        'theme': isDark ? 'dark' : 'light',
        'base-bg-color': isDark ? '#000000' : '#F9FAFB',
        'accent-color': '#14B8A6',
        'cta-button-color': isDark ? '#000000' : '#3e4cff',
        'cta-button-text-color': isDark ? '#ffffff' : '#ffffff',
        'border-radius': 'large',
        'size': mode === 'voice' ? 'compact' : 'full',
        'position': 'bottom-right',
        'title': 'AETHER',
        'start-button-text': mode === 'voice' ? 'Start Call' : 'Start Chat',
        'end-button-text': 'End Call',
        'cta-subtitle': mode === 'voice' ? 'Aether is online for consultation' : '',
        'chat-first-message': "Hey, How can I help you today?",
        'chat-placeholder': "Type your message...",
        'voice-show-transcript': 'true',
        'consent-required': 'true',
        'consent-title': 'Terms and conditions',
        'consent-content': 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.',
        'consent-storage-key': 'vapi_widget_consent'
      }

      // Apply all attributes
      Object.entries(attributes).forEach(([key, value]) => {
        widget.setAttribute(key, value)
      })

      // Append to body
      document.body.appendChild(widget)
      widgetRef.current = widget

      console.log('Vapi widget created with attributes:', attributes)
    }

    // Wait a bit for the script to load
    const timer = setTimeout(createWidget, 500)
    
    return () => {
      clearTimeout(timer)
      const existingWidget = document.querySelector('vapi-widget')
      if (existingWidget) {
        existingWidget.remove()
      }
    }
  }, [mode, isDark])

  // This component doesn't render anything visible
  // The widget is added directly to the document body
  return null
}

export default VapiWidgetDirect 