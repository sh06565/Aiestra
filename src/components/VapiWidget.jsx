import React, { useEffect, useRef } from 'react'
import config from '../config/environment'

const VapiWidget = () => {
  const widgetRef = useRef(null)

  useEffect(() => {
    console.log('VapiWidget: Initializing with config:', config.vapi)
    
    // Check if required config is available
    if (!config.vapi.publicKey || !config.vapi.assistantId) {
      console.error('VapiWidget: Missing required configuration - publicKey or assistantId')
      return
    }

    // Load Vapi widget script
    const loadVapiScript = () => {
      console.log('VapiWidget: Loading Vapi script...')
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js'
      script.async = true
      script.type = 'text/javascript'
      
      script.onload = () => {
        console.log('VapiWidget: Script loaded successfully')
        createWidget()
      }
      
      script.onerror = () => {
        console.error('VapiWidget: Failed to load Vapi script')
      }
      
      document.head.appendChild(script)
    }

    const createWidget = () => {
      console.log('VapiWidget: Creating widget element...')
      
      // Remove existing widget if any
      const existingWidget = document.querySelector('vapi-widget')
      if (existingWidget) {
        console.log('VapiWidget: Removing existing widget')
        existingWidget.remove()
      }

      // Create widget element
      const widget = document.createElement('vapi-widget')
      
      // Set all configuration attributes
      const attributes = {
        'public-key': config.vapi.publicKey,
        'assistant-id': config.vapi.assistantId,
        'mode': config.vapi.mode,
        'theme': config.vapi.theme,
        'base-bg-color': config.vapi.baseBgColor,
        'accent-color': config.vapi.accentColor,
        'cta-button-color': config.vapi.ctaButtonColor,
        'cta-button-text-color': config.vapi.ctaButtonTextColor,
        'border-radius': config.vapi.borderRadius,
        'size': config.vapi.size,
        'position': config.vapi.position,
        'title': config.vapi.title,
        'start-button-text': config.vapi.startButtonText,
        'end-button-text': config.vapi.endButtonText,
        'cta-subtitle': config.vapi.ctaSubtitle,
        'chat-first-message': config.vapi.chatFirstMessage,
        'chat-placeholder': config.vapi.chatPlaceholder,
        'voice-show-transcript': config.vapi.voiceShowTranscript,
        'consent-required': config.vapi.consentRequired,
        'consent-title': config.vapi.consentTitle,
        'consent-content': config.vapi.consentContent,
        'consent-storage-key': config.vapi.consentStorageKey,
      }

      // Set attributes
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          widget.setAttribute(key, value)
        }
      })

      // Append widget to body
      document.body.appendChild(widget)
      widgetRef.current = widget
      console.log('VapiWidget: Widget created and appended to DOM')
    }

    // Load script if not already loaded
    if (!document.querySelector('script[src*="vapi-ai"]')) {
      loadVapiScript()
    } else {
      console.log('VapiWidget: Script already exists, creating widget')
      createWidget()
    }

    // Cleanup function
    return () => {
      if (widgetRef.current) {
        console.log('VapiWidget: Cleaning up widget')
        widgetRef.current.remove()
      }
    }
  }, [])

  // This component doesn't render anything visible
  // The widget is injected into the DOM
  return null
}

export default VapiWidget 