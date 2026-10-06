import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 1. Resets window scroll position to (0,0) when switching routes.
 * 2. Logs page visit analytics.
 * 3. Displays a floating "scroll to top" button when user scrolls down.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

// Reset window scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Monitor scroll position for button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-info text-white rounded-circle shadow position-fixed p-0 d-flex align-items-center justify-content-center"
      style={{
        bottom: '30px',
        right: '30px',
        width: '45px',
        height: '45px',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up fs-5"></i>
    </button>
  );
};

export default ScrollToTop;
