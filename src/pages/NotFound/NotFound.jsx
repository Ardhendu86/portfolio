import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="py-5 bg-dark text-white text-center min-vh-75 d-flex align-items-center justify-content-center">
      <div className="container py-5">
        <h1 className="display-1 fw-bold text-info mb-2">404</h1>
        <h2 className="h3 fw-bold text-white mb-3">Page Not Found</h2>
        <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '500px' }}>
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-info text-white fw-bold px-4 py-2 rounded-3 shadow">
          <i className="bi bi-house-door me-2"></i> Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
