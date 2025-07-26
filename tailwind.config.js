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
        // Primary colors
        primary: {
          50: '#f0fffd',
          100: '#ccfffe',
          200: '#99fffd',
          300: '#66fffc',
          400: '#33fffb',
          500: '#00ffc8',
          600: '#00e6b4',
          700: '#00cca0',
          800: '#00b38c',
          900: '#009978',
        },
        secondary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c1d3ff',
          300: '#a2bdff',
          400: '#83a7ff',
          500: '#3e4cff',
          600: '#3845e6',
          700: '#323ecc',
          800: '#2c37b3',
          900: '#263099',
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