import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Theme-aware footer containing copyright details, quick links, and social links.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 border-top border-secondary border-opacity-25 mt-auto" style={{ backgroundColor: 'var(--footer-bg)', transition: 'background-color 0.3s ease' }}>
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-2">
              <i className="bi bi-code-slash text-info me-2"></i>Ardhendu Bag
            </h4>
            <p className="small mb-3 opacity-75">
              Full Stack Software Developer specializing in Java, Spring Boot, React.js, and modern web application development.
            </p>
            <p className="small mb-0 opacity-75">
              <i className="bi bi-geo-alt-fill text-info me-1"></i> Based in Kalyani / Hooghly, West Bengal
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold text-info mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/" className="text-decoration-none hover-info opacity-75">
                  <i className="bi bi-chevron-right text-info me-1"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none hover-info opacity-75">
                  <i className="bi bi-chevron-right text-info me-1"></i> About &amp; Qualifications
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-decoration-none hover-info opacity-75">
                  <i className="bi bi-chevron-right text-info me-1"></i> Projects Showcase
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none hover-info opacity-75">
                  <i className="bi bi-chevron-right text-info me-1"></i> Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-lg-4 col-md-12 text-lg-end">
            <h5 className="fw-semibold text-info mb-3">Connect With Me</h5>
            <div className="d-flex gap-3 justify-content-lg-end mb-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline-info rounded-circle" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline-info rounded-circle" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:ardhendubag@example.com" className="btn btn-outline-info rounded-circle" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
            <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 border border-info border-opacity-25">
              Available for Opportunities
            </span>
          </div>
        </div>

        <hr className="my-4 border-secondary border-opacity-25" />

        <div className="row text-center small opacity-75">
          <div className="col-12">
            <p className="mb-0">
              &copy; {currentYear} Ardhendu Bag. Built with React.js &amp; Bootstrap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
