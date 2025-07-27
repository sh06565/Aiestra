# Aiestra - Human-Centered AI Solutions

A modern, responsive marketing website for Aiestra, an AI-services company that helps businesses deploy human-centric machine-learning solutions. The site communicates expertise, trustworthiness, and cutting-edge innovation while remaining accessible to non-technical decision makers.

## 🎨 Design Features

- **Minimal & Airy Design**: Clean, spacious layout with glassmorphism accents
- **Soft Gradients**: Subtle cyan-to-indigo gradients throughout the interface
- **3D Abstractions**: Animated particle network simulating neural connections
- **Optimistic Tech Aesthetic**: Future-forward without feeling sci-fi
- **Responsive Design**: Optimized for all devices from mobile to desktop

## 🎯 Key Sections

1. **Hero Section**: Full viewport height with animated particle network and dual CTAs
2. **Solutions Overview**: Six AI service cards with hover effects
3. **How It Works**: 3-step visual process with animated timeline
4. **Case Studies**: Interactive carousel showcasing success stories
5. **Client Logos**: Trust indicators and certifications
6. **FAQ**: Expandable accordion with common questions
7. **Newsletter**: Email signup with social proof
8. **Chat Widget**: Interactive AI assistant in bottom-right corner

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Three.js** - 3D graphics and particle effects
- **React Three Fiber** - React renderer for Three.js
- **Lucide React** - Beautiful icon library

## 🎨 Design System

### Colors
- **Primary**: Cyan (#00FFC8) to Indigo (#3E4CFF) gradient
- **Background**: Off-white (#F9FAFB) / Charcoal (#0E1117)
- **Text**: Warm gray (#4B5563) / Light gray (#D1D5DB)

### Typography
- **Headlines**: Inter Tight (600-700 weight, wide letter-spacing)
- **Body**: Manrope (400-500 weight, 1.5 line-height)
- **Code**: IBM Plex Mono
- **Fluid Scaling**: Responsive typography using clamp()

### Layout
- **Grid System**: 12-column CSS Grid (desktop) / 4-column (mobile)
- **Spacing**: 96px max-width gutters on desktop
- **Glassmorphism**: Translucent panels with backdrop blur

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/aiestra.git
cd aiestra
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Features

### Interactive Elements
- **Smooth Animations**: 0.2s ease-out transitions on hover/focus
- **Parallax Effects**: Subtle depth for hero graphics
- **Reveal Animations**: Slide-up animations on scroll
- **Theme Toggle**: One-click dark/light mode switch
- **Responsive Navigation**: Hamburger menu for mobile

### Performance Optimizations
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic chunk optimization
- **Compressed Assets**: Optimized images and fonts
- **Semantic HTML**: Proper accessibility markup

### Accessibility
- **WCAG 2.1 AA Compliance**: High contrast ratios
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Proper ARIA labels
- **Focus Management**: Clear focus indicators

## 🎯 Conversion Features

- **Multiple CTAs**: Strategic call-to-action placement
- **Social Proof**: Customer testimonials and case studies
- **Trust Indicators**: Certifications and client logos
- **Interactive Demo**: Live chatbot widget
- **Newsletter Signup**: Lead generation with benefits

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Hero.jsx        # Hero section with particles
│   ├── Solutions.jsx   # AI services overview
│   ├── HowItWorks.jsx  # 3-step process
│   ├── CaseStudies.jsx # Success stories carousel
│   ├── ClientLogos.jsx # Trust indicators
│   ├── FAQ.jsx         # Accordion FAQ
│   ├── Newsletter.jsx  # Email signup
│   ├── Footer.jsx      # Site footer
│   ├── DemoWidget.jsx  # Chat widget
│   └── ParticleNetwork.jsx # 3D particle effects
├── context/            # React context
│   └── ThemeContext.jsx # Dark/light theme provider
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind
```

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#00FFC8', // Your brand color
  },
  secondary: {
    500: '#3E4CFF', // Your accent color
  }
}
```

### Content
- Update copy in component files
- Replace placeholder images with your assets
- Modify case studies and testimonials
- Customize FAQ content

### Branding
- Replace "Aiestra" with your company name
- Update logo and favicon
- Modify contact information
- Customize social media links

## 📈 Analytics & Tracking

The site is ready for analytics integration:
- Google Analytics 4
- Facebook Pixel
- LinkedIn Insight Tag
- Custom event tracking

## 🔧 Development

### Adding New Sections
1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add to navigation if needed
4. Style with Tailwind classes

### Styling Guidelines
- Use Tailwind utility classes
- Follow the design system colors
- Maintain consistent spacing
- Ensure responsive behavior

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, contact:
- Email: hello@aiestra.ai
- Phone: +1 (555) 123-4567

---

Built with ❤️ by the Aiestra team