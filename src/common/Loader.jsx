import React from 'react';
import logoImg from '../assets/images/logo.png';

/**
 * Loader Component
 * Renders a centered loading spinner with the portfolio logo and holographic glow.
 */
const Loader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-50 py-5">
      <div className="position-relative mb-3">
        <img
          src={logoImg}
          alt="Ardhendu Bag"
          style={{
            height: '48px',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 12px rgba(0, 240, 255, 0.6))',
            animation: 'floatHolo 2s ease-in-out infinite alternate'
          }}
        />
      </div>
      <div className="spinner-border text-info mb-3" role="status" style={{ width: '2.5rem', height: '2.5rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-secondary small font-monospace">Initializing System...</p>
    </div>
  );
};

export default Loader;
