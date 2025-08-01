import React, { useState, useEffect, useRef } from 'react';
import './VapiWidgetWrapper.css';

const VapiWidgetWrapper = () => {
  const [mode, setMode] = useState('chat'); // 'chat' or 'voice'
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const chatWidgetRef = useRef(null);
  const voiceWidgetRef = useRef(null);

  // Vapi configuration
  const config = {
    publicKey: "90977a5f-d71a-40c6-bb1d-501c4bcd00b2",
    assistantId: "b67a226d-b680-4e13-b810-96d3022f1c99",
    theme: "dark",
    baseBgColor: "#000000",
    accentColor: "#14B8A6",
    ctaButtonColor: "#000000",
    ctaButtonTextColor: "#ffffff",
    borderRadius: "large",
    position: "bottom-right",
    chatFirstMessage: "Hey, How can I help you today?",
    chatPlaceholder: "Type your message...",
    voiceShowTranscript: "true",
    consentRequired: "true",
    consentTitle: "Terms and conditions",
    consentContent: "By clicking \"Agree,\" and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.",
    consentStorageKey: "vapi_widget_consent"
  };

  // Load Vapi script
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="vapi-ai"]');
    if (existingScript) {
      console.log('Vapi script already loaded');
      setIsScriptLoaded(true);
      return;
    }

    console.log('Loading Vapi script...');
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    script.onload = () => {
      console.log('Vapi script loaded successfully');
      setIsScriptLoaded(true);
    };
    script.onerror = (error) => {
      console.error('Failed to load Vapi script:', error);
    };
    document.head.appendChild(script);
  }, []);

  // Check consent status
  useEffect(() => {
    const consent = localStorage.getItem(config.consentStorageKey);
    setIsConsentGiven(consent === 'true');
  }, []);

  // Create widgets when script is loaded
  useEffect(() => {
    if (!isScriptLoaded || !isConsentGiven) {
      console.log('Waiting for script or consent:', { isScriptLoaded, isConsentGiven });
      return;
    }

    console.log('Creating Vapi widgets...');
    
    // Create chat widget
    const chatWidget = document.createElement('vapi-widget');
    chatWidget.setAttribute('public-key', config.publicKey);
    chatWidget.setAttribute('assistant-id', config.assistantId);
    chatWidget.setAttribute('mode', 'chat');
    chatWidget.setAttribute('theme', config.theme);
    chatWidget.setAttribute('base-bg-color', config.baseBgColor);
    chatWidget.setAttribute('accent-color', config.accentColor);
    chatWidget.setAttribute('cta-button-color', config.ctaButtonColor);
    chatWidget.setAttribute('cta-button-text-color', config.ctaButtonTextColor);
    chatWidget.setAttribute('border-radius', config.borderRadius);
    chatWidget.setAttribute('size', 'full');
    chatWidget.setAttribute('position', config.position);
    chatWidget.setAttribute('title', 'TALK WITH AI');
    chatWidget.setAttribute('start-button-text', 'Start');
    chatWidget.setAttribute('end-button-text', 'End Call');
    chatWidget.setAttribute('chat-first-message', config.chatFirstMessage);
    chatWidget.setAttribute('chat-placeholder', config.chatPlaceholder);
    chatWidget.setAttribute('voice-show-transcript', config.voiceShowTranscript);
    chatWidget.setAttribute('consent-required', config.consentRequired);
    chatWidget.setAttribute('consent-title', config.consentTitle);
    chatWidget.setAttribute('consent-content', config.consentContent);
    chatWidget.setAttribute('consent-storage-key', config.consentStorageKey);
    chatWidget.style.display = mode === 'chat' ? 'block' : 'none';
    document.body.appendChild(chatWidget);
    chatWidgetRef.current = chatWidget;
    console.log('Chat widget created and appended');

    // Create voice widget
    const voiceWidget = document.createElement('vapi-widget');
    voiceWidget.setAttribute('public-key', config.publicKey);
    voiceWidget.setAttribute('assistant-id', config.assistantId);
    voiceWidget.setAttribute('mode', 'voice');
    voiceWidget.setAttribute('theme', config.theme);
    voiceWidget.setAttribute('base-bg-color', config.baseBgColor);
    voiceWidget.setAttribute('accent-color', config.accentColor);
    voiceWidget.setAttribute('cta-button-color', config.ctaButtonColor);
    voiceWidget.setAttribute('cta-button-text-color', config.ctaButtonTextColor);
    voiceWidget.setAttribute('border-radius', config.borderRadius);
    voiceWidget.setAttribute('size', 'compact');
    voiceWidget.setAttribute('position', config.position);
    voiceWidget.setAttribute('title', 'AETHER');
    voiceWidget.setAttribute('start-button-text', 'Start Call');
    voiceWidget.setAttribute('end-button-text', 'End Call');
    voiceWidget.setAttribute('cta-subtitle', 'Aether is online for consultation');
    voiceWidget.setAttribute('chat-first-message', config.chatFirstMessage);
    voiceWidget.setAttribute('chat-placeholder', config.chatPlaceholder);
    voiceWidget.setAttribute('voice-show-transcript', config.voiceShowTranscript);
    voiceWidget.setAttribute('consent-required', config.consentRequired);
    voiceWidget.setAttribute('consent-title', config.consentTitle);
    voiceWidget.setAttribute('consent-content', config.consentContent);
    voiceWidget.setAttribute('consent-storage-key', config.consentStorageKey);
    voiceWidget.style.display = mode === 'voice' ? 'block' : 'none';
    document.body.appendChild(voiceWidget);
    voiceWidgetRef.current = voiceWidget;
    console.log('Voice widget created and appended');

    return () => {
      if (chatWidgetRef.current) {
        document.body.removeChild(chatWidgetRef.current);
        chatWidgetRef.current = null;
      }
      if (voiceWidgetRef.current) {
        document.body.removeChild(voiceWidgetRef.current);
        voiceWidgetRef.current = null;
      }
    };
  }, [isScriptLoaded, isConsentGiven]);

  // Update widget visibility when mode changes
  useEffect(() => {
    if (chatWidgetRef.current && voiceWidgetRef.current) {
      chatWidgetRef.current.style.display = mode === 'chat' ? 'block' : 'none';
      voiceWidgetRef.current.style.display = mode === 'voice' ? 'block' : 'none';
      console.log('Widget visibility updated:', mode);
    }
  }, [mode]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleConsent = () => {
    localStorage.setItem(config.consentStorageKey, 'true');
    setIsConsentGiven(true);
  };

  if (!isConsentGiven) {
    return (
      <div className="vapi-consent-overlay">
        <div className="vapi-consent-modal">
          <h3>{config.consentTitle}</h3>
          <p>{config.consentContent}</p>
          <button onClick={handleConsent} className="vapi-consent-button">
            Agree
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="vapi-widget-wrapper">
      <div className="vapi-mode-selector">
        <button
          className={`mode-button ${mode === 'chat' ? 'active' : ''}`}
          onClick={() => handleModeChange('chat')}
        >
          <svg className="mode-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
          Chat
        </button>
        <button
          className={`mode-button ${mode === 'voice' ? 'active' : ''}`}
          onClick={() => handleModeChange('voice')}
        >
          <svg className="mode-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
          Voice
        </button>
      </div>
    </div>
  );
};

export default VapiWidgetWrapper; 