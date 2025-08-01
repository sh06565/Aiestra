import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import './CustomChatWidget.css'

const CustomChatWidget = ({ mode, onClose }) => {
  const { isDark } = useTheme()
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [callId, setCallId] = useState(null)
  const [vapiWidget, setVapiWidget] = useState(null)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Vapi configuration
  const VAPI_PUBLIC_KEY = '90977a5f-d71a-40c6-bb1d-501c4bcd00b2'
  const VAPI_ASSISTANT_ID = 'b67a226d-b680-4e13-b810-96d3022f1c99'

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Initialize Vapi widget and focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus()
    addWelcomeMessage()
    initializeVapiWidget()
  }, [mode])

  // Cleanup Vapi widget on unmount
  useEffect(() => {
    return () => {
      if (vapiWidget) {
        vapiWidget.remove()
      }
    }
  }, [vapiWidget])

  const addWelcomeMessage = () => {
    const welcomeMessage = {
      id: Date.now(),
      type: 'assistant',
      content: mode === 'voice' 
        ? "Hello! I'm Aether's voice AI assistant. How can I help you today?"
        : "Hello! I'm Aether's text AI assistant. How can I help you today?",
      timestamp: new Date()
    }
    setMessages([welcomeMessage])
  }

  const initializeVapiWidget = async () => {
    try {
      // Load Vapi script if not already loaded
      if (!document.querySelector('script[src*="vapi-ai"]')) {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js'
        script.async = true
        script.type = 'text/javascript'
        
        script.onload = () => {
          createVapiWidget()
        }
        
        document.head.appendChild(script)
      } else {
        createVapiWidget()
      }
    } catch (error) {
      console.error('Error initializing Vapi widget:', error)
      addWelcomeMessage()
    }
  }

  const createVapiWidget = () => {
    try {
      // Remove existing widget if it exists
      const existingWidget = document.querySelector('vapi-widget')
      if (existingWidget) {
        existingWidget.remove()
      }

      // Create Vapi widget element
      const widget = document.createElement('vapi-widget')
      
      // Set widget attributes based on mode
      const widgetConfig = {
        'public-key': VAPI_PUBLIC_KEY,
        'assistant-id': VAPI_ASSISTANT_ID,
        'mode': mode,
        'theme': isDark ? 'dark' : 'light',
        'base-bg-color': isDark ? '#0E1117' : '#F9FAFB',
        'accent-color': '#00ffc8',
        'cta-button-color': isDark ? '#00ffc8' : '#3e4cff',
        'cta-button-text-color': isDark ? '#0E1117' : '#ffffff',
        'border-radius': 'large',
        'size': mode === 'voice' ? 'compact' : 'full',
        'position': 'bottom-right',
        'title': 'AETHER AI',
        'start-button-text': mode === 'voice' ? 'Start Call' : 'Start Chat',
        'end-button-text': 'End Call',
        'cta-subtitle': mode === 'voice' ? 'Aether is online for consultation' : '',
        'chat-first-message': "Hey, How can I help you today?",
        'chat-placeholder': "Type your message...",
        'voice-show-transcript': 'true',
        'auto-open': 'true',
        'hide-cta': 'true'
      }

      // Apply configuration
      Object.entries(widgetConfig).forEach(([key, value]) => {
        widget.setAttribute(key, value)
      })

      // Hide the widget visually but keep it functional
      widget.style.position = 'absolute'
      widget.style.left = '-9999px'
      widget.style.visibility = 'hidden'
      widget.style.zIndex = '-1'
      
      // Append to body
      document.body.appendChild(widget)
      setVapiWidget(widget)
      
      // Add event listeners
      widget.addEventListener('message', handleVapiMessage)
      widget.addEventListener('transcript', handleVapiTranscript)
      widget.addEventListener('call-start', handleCallStart)
      widget.addEventListener('call-end', handleCallEnd)
      widget.addEventListener('error', handleVapiError)
      
      console.log('Vapi widget created successfully')
      
    } catch (error) {
      console.error('Error creating Vapi widget:', error)
      addWelcomeMessage()
    }
  }

  const handleVapiMessage = (event) => {
    const { message, type } = event.detail || event
    
    const newMessage = {
      id: Date.now(),
      type: type === 'user' ? 'user' : 'assistant',
      content: message,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, newMessage])
    setIsLoading(false)
  }

  const handleVapiTranscript = (event) => {
    const { transcript } = event.detail || event
    
    const transcriptMessage = {
      id: Date.now(),
      type: 'user',
      content: transcript,
      timestamp: new Date(),
      isTranscript: true
    }
    
    setMessages(prev => [...prev, transcriptMessage])
  }

  const handleCallStart = (event) => {
    console.log('Call started')
    setIsRecording(true)
  }

  const handleCallEnd = (event) => {
    console.log('Call ended')
    setIsRecording(false)
  }

  const handleVapiError = (error) => {
    console.error('Vapi error:', error)
    setIsLoading(false)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      if (vapiWidget) {
        // Send message to Vapi widget
        const sendEvent = new CustomEvent('send-message', {
          detail: { message: userMessage.content }
        })
        vapiWidget.dispatchEvent(sendEvent)
      } else {
        // Fallback response
        setTimeout(() => {
          const aiResponse = {
            id: Date.now() + 1,
            type: 'assistant',
            content: `Thank you for your message: "${userMessage.content}". I'm here to help with your questions about Aether's services.`,
            timestamp: new Date()
          }
          setMessages(prev => [...prev, aiResponse])
          setIsLoading(false)
        }, 1000)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      // Fallback response
      const fallbackResponse = {
        id: Date.now() + 1,
        type: 'assistant',
        content: `Thank you for your message: "${userMessage.content}". I'm here to help with your questions about Aether's services.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, fallbackResponse])
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleVoiceToggle = async () => {
    if (mode === 'voice' && vapiWidget) {
      try {
        if (!isRecording) {
          // Start voice call
          const startEvent = new CustomEvent('start-call')
          vapiWidget.dispatchEvent(startEvent)
          setIsRecording(true)
        } else {
          // End voice call
          const endEvent = new CustomEvent('end-call')
          vapiWidget.dispatchEvent(endEvent)
          setIsRecording(false)
        }
      } catch (error) {
        console.error('Error toggling voice:', error)
        setIsRecording(false)
      }
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className={`custom-chat-widget ${isDark ? 'dark' : 'light'}`}>
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-content">
          <div className="chat-title">
            <span className="chat-icon">
              {mode === 'voice' ? '🎤' : '💬'}
            </span>
            <div className="title-text">
              <h3>{mode === 'voice' ? 'Aether Voice AI' : 'Aether Text AI'}</h3>
              <p>{mode === 'voice' ? 'Voice-powered AI assistant' : 'Text-powered AI assistant'}</p>
            </div>
          </div>
          <div className="chat-actions">
            <button 
              className="minimize-btn"
              onClick={() => onClose()}
              aria-label="Minimize chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="close-btn"
              onClick={() => onClose()}
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message ${message.type} ${message.isTranscript ? 'transcript' : ''}`}
          >
            <div className="message-content">
              <p>{message.content}</p>
              <span className="message-time">{formatTime(message.timestamp)}</span>
              {message.isTranscript && (
                <span className="transcript-badge">Voice Input</span>
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message assistant">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="chat-input-area">
        <div className="input-container">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={mode === 'voice' ? 'Type your message or speak...' : 'Type your message...'}
            className="chat-input"
            rows="1"
            disabled={isLoading}
          />
          
          {mode === 'voice' && (
            <button
              className={`voice-btn ${isRecording ? 'recording' : ''}`}
              onClick={handleVoiceToggle}
              disabled={isLoading}
              aria-label={isRecording ? 'Stop recording' : 'Start recording'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12V4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
                <path d="M19 10V12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12V10C5 9.45 5.45 9 6 9C6.55 9 7 9.45 7 10V12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12V10C17 9.45 17.45 9 18 9C18.55 9 19 9.45 19 10Z" fill="currentColor"/>
              </svg>
            </button>
          )}
          
          <button
            className="send-btn"
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomChatWidget 