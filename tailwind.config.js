/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors - Blue gradient
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Secondary colors - Purple gradient
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Accent colors - Cyan for highlights
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Background colors
        background: {
          light: '#F9FAFB',
          dark: '#0E1117',
        },
        // Text colors
        text: {
          light: '#4B5563',
          dark: '#D1D5DB',
        }
      },
      fontFamily: {
        'sora': ['Sora Variable', 'Inter Tight', 'sans-serif'],
        'manrope': ['Manrope', 'DM Sans', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        // Fluid typography using clamp()
        'hero': 'clamp(2.5rem, 5vw, 4.5rem)',
        'h1': 'clamp(2rem, 4vw, 3.5rem)',
        'h2': 'clamp(1.75rem, 3.5vw, 3rem)',
        'h3': 'clamp(1.5rem, 3vw, 2.5rem)',
        'h4': 'clamp(1.25rem, 2.5vw, 2rem)',
        'body': 'clamp(1rem, 2vw, 1.125rem)',
        'small': 'clamp(0.875rem, 1.5vw, 1rem)',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '96': '24rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
} 