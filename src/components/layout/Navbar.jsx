import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ onBookDemo }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'SOLUTIONS', href: '/solutions' },
    { label: 'CASE STUDIES', href: '/case-studies' },
    { label: 'INSIGHTS', href: '/insights' },
    { label: 'COMPANY', href: '/company' },
    { label: 'BOOK DEMO', href: '#', onClick: onBookDemo }
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname === href
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      {/* Liquid Glass Navbar */}
      <nav className="liquid-glass-navbar">
        {/* Logo Section - Simple text without bubble */}
        <div className="nav-logo-simple">
          aiestra
        </div>

        {/* Navigation Items */}
        <div className="nav-items">
          {navItems.map((item) => (
            <div key={item.href} className="nav-item-wrapper">
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.label}
                  {isActive(item.href) && <div className="active-indicator" />}
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.label}
                  {isActive(item.href) && <div className="active-indicator" />}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <div key={item.href} className="mobile-menu-item">
                {item.onClick ? (
                  <button
                    onClick={() => {
                      item.onClick()
                      setIsOpen(false)
                    }}
                    className={`mobile-link ${isActive(item.href) ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`mobile-link ${isActive(item.href) ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar 