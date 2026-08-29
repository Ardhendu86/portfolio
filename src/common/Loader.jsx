import React from 'react';

/**
 * Loader Component
 * Renders a centered loading spinner during page load or lazy fetching.
 */
const Loader = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-50 py-5">
      <div className="spinner-border text-info mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-secondary small">Loading content...</p>
    </div>
  );
};

export default Loader;
