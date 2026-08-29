import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Header Component
 * Features responsive navbar with animated mobile toggle (bi-list / bi-x-lg)
 * and a single dark/light mode theme toggle button with persistent state.
 */
const Header = () => {
  // State for mobile navigation menu toggle
  const [isNavOpen, setIsNavOpen] = useState(false);

  // State for theme: 'dark' or 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  // Apply theme data attribute to document root and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Toggle mobile menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close mobile menu on link navigation
  const closeNav = () => {
    setIsNavOpen(false);
  };

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm py-3">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand d-flex align-items-center fw-bold fs-4" to="/" onClick={closeNav}>
          <i className="bi bi-code-slash text-info me-2 fs-3"></i>
          <span>Ardhendu<span className="text-info">.Bag</span></span>
        </Link>

        {/* Right Controls Container: Theme Toggle & Mobile Hamburger / Close Button */}
        <div className="d-flex align-items-center gap-2 d-lg-none ms-auto me-2">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <i className="bi bi-sun-fill text-warning fs-5"></i>
            ) : (
              <i className="bi bi-moon-stars-fill text-info fs-5"></i>
            )}
          </button>
        </div>

        {/* Mobile Toggle Button with Animated Hamburger / Close (X) Icon */}
        <button
          className="navbar-toggler border-0 p-2 text-info shadow-none"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          {isNavOpen ? (
            <i className="bi bi-x-lg fs-2 text-info"></i>
          ) : (
            <i className="bi bi-list fs-2 text-info"></i>
          )}
        </button>

        {/* Navigation Links & Desktop Controls */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 fw-semibold align-items-lg-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'nav-link active text-info' : 'nav-link')}
                onClick={closeNav}
                end
              >
                <i className="bi bi-house-door me-1"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'nav-link active text-info' : 'nav-link')}
                onClick={closeNav}
              >
                <i className="bi bi-person me-1"></i> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? 'nav-link active text-info' : 'nav-link')}
                onClick={closeNav}
              >
                <i className="bi bi-laptop me-1"></i> Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'nav-link active text-info' : 'nav-link')}
                onClick={closeNav}
              >
                <i className="bi bi-envelope me-1"></i> Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Controls */}
          <div className="d-none d-lg-flex align-items-center gap-3 ms-lg-3">
            {/* Desktop Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <i className="bi bi-sun-fill text-warning fs-5"></i>
              ) : (
                <i className="bi bi-moon-stars-fill text-info fs-5"></i>
              )}
            </button>

            {/* Get In Touch CTA */}
            <Link to="/contact" className="btn btn-outline-info rounded-pill px-4 btn-sm" onClick={closeNav}>
              <i className="bi bi-send me-1"></i> Get In Touch
            </Link>
          </div>

          {/* Mobile View CTA Button */}
          <div className="d-lg-none mt-3 border-top border-secondary border-opacity-25 pt-3">
            <Link to="/contact" className="btn btn-info text-white w-100 rounded-pill py-2" onClick={closeNav}>
              <i className="bi bi-send me-1"></i> Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
