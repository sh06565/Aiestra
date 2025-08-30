// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.aiestra.com',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Application Constants
export const APP_CONFIG = {
  NAME: 'Aiestra',
  VERSION: '1.0.0',
  DESCRIPTION: 'Human-Centered AI Solutions',
  AUTHOR: 'Aiestra Team',
  WEBSITE: 'https://aiestra.com',
};

// Animation Constants
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
  },
  EASING: {
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
  },
};

// Theme Constants
export const THEME_CONFIG = {
  COLORS: {
    PRIMARY: '#00FFC8',
    SECONDARY: '#3E4CFF',
    SUCCESS: '#10B981',
    WARNING: '#F59E0B',
    ERROR: '#EF4444',
    INFO: '#3B82F6',
  },
  BREAKPOINTS: {
    MOBILE: '640px',
    TABLET: '768px',
    DESKTOP: '1024px',
    LARGE: '1280px',
  },
};

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'aiestra-theme',
  USER_PREFERENCES: 'aiestra-user-preferences',
  AUTH_TOKEN: 'aiestra-auth-token',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  BOOKING_CREATED: 'Booking request submitted successfully!',
  FORM_SUBMITTED: 'Form submitted successfully!',
  SETTINGS_SAVED: 'Settings saved successfully!',
};
