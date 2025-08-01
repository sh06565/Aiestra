// Performance monitoring and optimization utilities

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      loadTime: 0,
      interactionCount: 0,
      errors: [],
      navigationTimes: [],
      resourceLoadTimes: []
    }
    
    this.init()
  }

  init() {
    this.trackPageLoad()
    this.trackInteractions()
    this.trackErrors()
    this.trackNavigation()
    this.trackResources()
  }

  trackPageLoad() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0]
        this.metrics.loadTime = perfData.loadEventEnd - perfData.loadEventStart
        
        // Track Core Web Vitals
        if ('PerformanceObserver' in window) {
          try {
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.name === 'LCP') {
                  console.log('LCP:', entry.startTime, 'ms')
                } else if (entry.name === 'FID') {
                  console.log('FID:', entry.processingStart - entry.startTime, 'ms')
                } else if (entry.name === 'CLS') {
                  console.log('CLS:', entry.value)
                }
              }
            })
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
          } catch (e) {
            console.warn('PerformanceObserver not supported')
          }
        }
      })
    }
  }

  trackInteractions() {
    const interactionEvents = ['click', 'scroll', 'keydown', 'touchstart']
    
    interactionEvents.forEach(eventType => {
      document.addEventListener(eventType, () => {
        this.metrics.interactionCount++
      }, { passive: true })
    })
  }

  trackErrors() {
    window.addEventListener('error', (event) => {
      this.metrics.errors.push({
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        timestamp: Date.now()
      })
      console.error('Tracked error:', event.error)
    })

    window.addEventListener('unhandledrejection', (event) => {
      this.metrics.errors.push({
        message: 'Unhandled Promise Rejection',
        reason: event.reason,
        timestamp: Date.now()
      })
      console.error('Unhandled promise rejection:', event.reason)
    })
  }

  trackNavigation() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0]
      if (navigation) {
        this.metrics.navigationTimes = {
          DNS: navigation.domainLookupEnd - navigation.domainLookupStart,
          TCP: navigation.connectEnd - navigation.connectStart,
          TTFB: navigation.responseStart - navigation.requestStart,
          DOMContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          Load: navigation.loadEventEnd - navigation.loadEventStart
        }
      }
    }
  }

  trackResources() {
    if ('performance' in window) {
      const resources = performance.getEntriesByType('resource')
      this.metrics.resourceLoadTimes = resources.map(resource => ({
        name: resource.name,
        duration: resource.duration,
        size: resource.transferSize,
        type: resource.initiatorType
      }))
    }
  }

  getMetrics() {
    return { ...this.metrics }
  }

  logMetrics() {
    console.group('Performance Metrics')
    console.log('Load Time:', this.metrics.loadTime, 'ms')
    console.log('Interaction Count:', this.metrics.interactionCount)
    console.log('Error Count:', this.metrics.errors.length)
    console.log('Navigation Times:', this.metrics.navigationTimes)
    console.groupEnd()
  }

  exportMetrics() {
    return {
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      ...this.metrics
    }
  }
}

// Lazy loading utility
export const lazyLoad = (importFunc, fallback = null) => {
  return React.lazy(() => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve(importFunc())
      }, 100) // Small delay to prevent blocking

      // If the component loads quickly, clear the timer
      importFunc().then((module) => {
        clearTimeout(timer)
        resolve(module)
      })
    })
  })
}

// Image optimization utility
export const optimizeImage = (src, options = {}) => {
  const { width, height, quality = 80, format = 'webp' } = options
  
  // For now, return the original src
  // In production, you'd integrate with an image optimization service
  return src
}

// Debounce utility
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle utility
export const throttle = (func, limit) => {
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
}

// Intersection Observer utility
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  }

  return new IntersectionObserver(callback, defaultOptions)
}

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    return {
      usedJSHeapSize: performance.memory.usedJSHeapSize,
      totalJSHeapSize: performance.memory.totalJSHeapSize,
      jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
    }
  }
  return null
}

// Network status monitoring
export const getNetworkInfo = () => {
  if ('connection' in navigator) {
    return {
      effectiveType: navigator.connection.effectiveType,
      downlink: navigator.connection.downlink,
      rtt: navigator.connection.rtt,
      saveData: navigator.connection.saveData
    }
  }
  return null
}

// Create and export the performance monitor instance
export const performanceMonitor = new PerformanceMonitor()

// Export the class for custom instances
export { PerformanceMonitor } 