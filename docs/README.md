# Aiestra Documentation

Welcome to the Aiestra documentation. This guide provides comprehensive information about the codebase structure, components, and development practices.

## 📚 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Hooks](#hooks)
- [Utilities](#utilities)
- [Configuration](#configuration)
- [Styling](#styling)
- [Testing](#testing)
- [Deployment](#deployment)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
git clone https://github.com/your-username/aiestra.git
cd aiestra
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer, etc.)
│   ├── sections/       # Page sections (Hero, Solutions, etc.)
│   └── features/       # Feature-specific components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── utils/              # Utility functions
├── config/             # Configuration files
├── styles/             # Global styles and themes
└── assets/             # Static assets
```

## 🧩 Components

### Component Categories

#### UI Components (`src/components/ui/`)
Reusable, presentational components that can be used across the application.

#### Layout Components (`src/components/layout/`)
Components that define the overall structure of the application.

#### Section Components (`src/components/sections/`)
Large, content-specific components that make up page sections.

#### Feature Components (`src/components/features/`)
Components that implement specific features or functionality.

### Component Guidelines

1. **Naming**: Use PascalCase for component names
2. **Props**: Use TypeScript-like prop documentation
3. **Styling**: Use Tailwind CSS classes
4. **State**: Use React hooks for state management
5. **Performance**: Implement React.memo for expensive components

## 🎣 Hooks

### Custom Hooks

- `useLocalStorage`: Manage localStorage with React state
- `useScrollPosition`: Track scroll position and direction
- `useWindowSize`: Track window dimensions

### Hook Guidelines

1. **Naming**: Use camelCase with `use` prefix
2. **Return Values**: Return objects or arrays for multiple values
3. **Dependencies**: Always include proper dependencies in useEffect
4. **Cleanup**: Implement cleanup functions when necessary

## 🛠️ Utilities

### Utility Categories

- **Performance**: Performance monitoring and optimization
- **Validation**: Configuration and data validation
- **Constants**: Application-wide constants
- **Animations**: Framer Motion animation variants

### Utility Guidelines

1. **Pure Functions**: Keep utilities pure and testable
2. **Error Handling**: Implement proper error handling
3. **Documentation**: Document complex utility functions
4. **Testing**: Write unit tests for utilities

## ⚙️ Configuration

### Environment Variables
- `VITE_API_BASE_URL`: API base URL
- `VITE_APP_ENV`: Application environment

### Build Configuration
- Vite for build tooling
- Tailwind CSS for styling
- PostCSS for CSS processing

## 🎨 Styling

### Design System

#### Colors
- Primary: Cyan (#00FFC8) to Indigo (#3E4CFF)
- Background: Off-white (#F9FAFB) / Charcoal (#0E1117)
- Text: Warm gray (#4B5563) / Light gray (#D1D5DB)

#### Typography
- Headlines: Inter Tight (600-700 weight)
- Body: Manrope (400-500 weight)
- Code: IBM Plex Mono

#### Spacing
- Grid System: 12-column CSS Grid (desktop) / 4-column (mobile)
- Gutters: 96px max-width on desktop

### Styling Guidelines

1. **Tailwind First**: Use Tailwind CSS classes when possible
2. **Custom CSS**: Use CSS modules or styled-components for complex styles
3. **Responsive**: Design mobile-first
4. **Accessibility**: Ensure proper contrast and focus states

## 🧪 Testing

### Testing Structure
```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
└── e2e/           # End-to-end tests
```

### Testing Guidelines

1. **Coverage**: Aim for 80%+ test coverage
2. **Naming**: Use descriptive test names
3. **Isolation**: Keep tests isolated and independent
4. **Mocking**: Mock external dependencies

## 🚀 Deployment

### Build Process
1. Run tests: `npm test`
2. Build application: `npm run build`
3. Deploy to hosting platform

### Environment Setup
1. Set environment variables
2. Configure build settings
3. Set up monitoring and analytics

## 📖 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.
