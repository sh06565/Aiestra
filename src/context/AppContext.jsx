import React, { createContext, useContext, useReducer, useEffect } from 'react'
import config from '../config/environment'

// Action types
const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_TOAST: 'SET_TOAST',
  CLEAR_TOAST: 'CLEAR_TOAST',
  SET_SCREEN_SIZE: 'SET_SCREEN_SIZE',
  SET_THEME: 'SET_THEME',
  SET_USER_PREFERENCES: 'SET_USER_PREFERENCES',
  SET_INTERACTION_STATE: 'SET_INTERACTION_STATE',
  SET_PERFORMANCE_METRICS: 'SET_PERFORMANCE_METRICS',
}

// Initial state
const initialState = {
  loading: false,
  error: null,
  toast: null,
  screenSize: 'desktop',
  theme: 'light',
  userPreferences: {
    reducedMotion: false,
    highContrast: false,
    fontSize: 'normal',
  },
  interactionState: {
    isScrolled: false,
    isMobileMenuOpen: false,
    activeSection: 'hero',
    lastInteraction: null,
  },
  performanceMetrics: {
    loadTime: 0,
    interactionCount: 0,
    errors: [],
  },
}

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload }
    
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload }
    
    case ACTIONS.SET_TOAST:
      return { ...state, toast: action.payload }
    
    case ACTIONS.CLEAR_TOAST:
      return { ...state, toast: null }
    
    case ACTIONS.SET_SCREEN_SIZE:
      return { ...state, screenSize: action.payload }
    
    case ACTIONS.SET_THEME:
      return { ...state, theme: action.payload }
    
    case ACTIONS.SET_USER_PREFERENCES:
      return { 
        ...state, 
        userPreferences: { ...state.userPreferences, ...action.payload }
      }
    
    case ACTIONS.SET_INTERACTION_STATE:
      return { 
        ...state, 
        interactionState: { ...state.interactionState, ...action.payload }
      }
    
    case ACTIONS.SET_PERFORMANCE_METRICS:
      return { 
        ...state, 
        performanceMetrics: { ...state.performanceMetrics, ...action.payload }
      }
    
    default:
      return state
  }
}

// Create context
const AppContext = createContext()

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Screen size detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      let screenSize = 'desktop'
      
      if (width < 640) screenSize = 'mobile'
      else if (width < 1024) screenSize = 'tablet'
      else screenSize = 'desktop'
      
      dispatch({ type: ACTIONS.SET_SCREEN_SIZE, payload: screenSize })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Theme detection and management
  useEffect(() => {
    const savedTheme = localStorage.getItem('aiestra-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    let theme = savedTheme || (prefersDark ? 'dark' : 'light')
    dispatch({ type: ACTIONS.SET_THEME, payload: theme })
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [])

  // User preferences detection
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const highContrast = window.matchMedia('(prefers-contrast: high)').matches
    
    dispatch({
      type: ACTIONS.SET_USER_PREFERENCES,
      payload: { reducedMotion, highContrast }
    })
  }, [])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      const scrollY = window.scrollY
      
      // Determine active section
      const sections = ['hero', 'solutions', 'how-it-works', 'case-studies', 'faq']
      let activeSection = 'hero'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            activeSection = section
            break
          }
        }
      }
      
      dispatch({
        type: ACTIONS.SET_INTERACTION_STATE,
        payload: { isScrolled, activeSection }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Performance monitoring
  useEffect(() => {
    const startTime = performance.now()
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime
      dispatch({
        type: ACTIONS.SET_PERFORMANCE_METRICS,
        payload: { loadTime }
      })
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Error boundary
  useEffect(() => {
    const handleError = (event) => {
      console.error('Global error:', event.error)
      dispatch({
        type: ACTIONS.SET_PERFORMANCE_METRICS,
        payload: { 
          errors: [...state.performanceMetrics.errors, event.error]
        }
      })
    }

    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [state.performanceMetrics.errors])

  // Action creators
  const actions = {
    setLoading: (loading) => dispatch({ type: ACTIONS.SET_LOADING, payload: loading }),
    setError: (error) => dispatch({ type: ACTIONS.SET_ERROR, payload: error }),
    showToast: (toast) => dispatch({ type: ACTIONS.SET_TOAST, payload: toast }),
    clearToast: () => dispatch({ type: ACTIONS.CLEAR_TOAST }),
    setTheme: (theme) => {
      dispatch({ type: ACTIONS.SET_THEME, payload: theme })
      localStorage.setItem('aiestra-theme', theme)
      document.documentElement.classList.toggle('dark', theme === 'dark')
    },
    setUserPreferences: (preferences) => 
      dispatch({ type: ACTIONS.SET_USER_PREFERENCES, payload: preferences }),
    setInteractionState: (state) => 
      dispatch({ type: ACTIONS.SET_INTERACTION_STATE, payload: state }),
    incrementInteractionCount: () => {
      const newCount = state.performanceMetrics.interactionCount + 1
      dispatch({
        type: ACTIONS.SET_PERFORMANCE_METRICS,
        payload: { interactionCount: newCount }
      })
    },
  }

  // Utility functions
  const utils = {
    isMobile: state.screenSize === 'mobile',
    isTablet: state.screenSize === 'tablet',
    isDesktop: state.screenSize === 'desktop',
    isReducedMotion: state.userPreferences.reducedMotion,
    isHighContrast: state.userPreferences.highContrast,
    getResponsiveClass: (mobile, tablet, desktop) => {
      if (state.screenSize === 'mobile') return mobile
      if (state.screenSize === 'tablet') return tablet
      return desktop
    },
    debounce: (func, wait) => {
      let timeout
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout)
          func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    },
    throttle: (func, limit) => {
      let inThrottle
      return function() {
        const args = arguments
        const context = this
        if (!inThrottle) {
          func.apply(context, args)
          inThrottle = true
          setTimeout(() => inThrottle = false, limit)
        }
      }
    },
  }

  const value = {
    state,
    actions,
    utils,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

// Specialized hooks for common use cases
export const useScreenSize = () => {
  const { state, utils } = useApp()
  return { screenSize: state.screenSize, ...utils }
}

export const useTheme = () => {
  const { state, actions } = useApp()
  return { theme: state.theme, setTheme: actions.setTheme }
}

export const useToast = () => {
  const { state, actions } = useApp()
  return { toast: state.toast, showToast: actions.showToast, clearToast: actions.clearToast }
}

export const useLoading = () => {
  const { state, actions } = useApp()
  return { loading: state.loading, setLoading: actions.setLoading }
}

export const useInteraction = () => {
  const { state, actions, utils } = useApp()
  return { 
    interactionState: state.interactionState, 
    setInteractionState: actions.setInteractionState,
    incrementInteractionCount: actions.incrementInteractionCount,
    ...utils
  }
} 