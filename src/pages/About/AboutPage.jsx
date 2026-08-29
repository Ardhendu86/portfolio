import React from 'react';
import { Link } from 'react-router-dom';
import About from '../Home/About';
import Skills from '../Home/Skills';
import Experience from '../Home/Experience';
import './AboutPage.css';

/**
 * AboutPage Component
 * Features breadcrumbs, developer SVG illustration hero header banner, and standalone sections.
 */
const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Header Banner */}
      <div className="about-page-header py-5 position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              {/* Breadcrumb Navigation */}
              <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb mb-0 px-3 py-2 rounded-pill d-inline-flex bg-info bg-opacity-10 border border-info border-opacity-25">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-info text-decoration-none fw-semibold">
                      <i className="bi bi-house-door me-1"></i> Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-info opacity-75 fw-semibold" aria-current="page">
                    About Me
                  </li>
                </ol>
              </nav>

              <h1 className="display-5 fw-bold mb-3">About &amp; Qualifications</h1>
              <p className="lead mb-0 opacity-75" style={{ maxWidth: '600px' }}>
                Discover Ardhendu Bag's professional background, full stack technical skills, and software engineering experience.
              </p>
            </div>

            {/* Developer SVG Illustration */}
            <div className="col-lg-5 text-center">
              <svg
                className="img-fluid hero-banner-svg"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxHeight: '280px' }}
              >
                <rect x="50" y="80" width="400" height="260" rx="16" fill="var(--surface-color)" stroke="var(--border-color)" strokeWidth="4" />
                <rect x="50" y="80" width="400" height="36" rx="16" fill="var(--badge-bg)" />
                <circle cx="80" cy="98" r="6" fill="#ef4444" />
                <circle cx="100" cy="98" r="6" fill="#f59e0b" />
                <circle cx="120" cy="98" r="6" fill="#10b981" />
                
                {/* Code lines */}
                <rect x="90" y="140" width="120" height="12" rx="4" fill="var(--accent-color)" />
                <rect x="220" y="140" width="150" height="12" rx="4" fill="var(--text-muted)" opacity="0.6" />
                <rect x="90" y="170" width="200" height="12" rx="4" fill="var(--secondary-accent)" />
                <rect x="90" y="200" width="160" height="12" rx="4" fill="var(--accent-color)" opacity="0.8" />
                <rect x="260" y="200" width="110" height="12" rx="4" fill="var(--text-muted)" opacity="0.4" />
                <rect x="90" y="230" width="240" height="12" rx="4" fill="var(--secondary-accent)" opacity="0.7" />
                <rect x="90" y="260" width="180" height="12" rx="4" fill="var(--accent-color)" />

                {/* Floating Tech Badge */}
                <circle cx="400" cy="180" r="45" fill="var(--badge-bg)" stroke="var(--accent-color)" strokeWidth="3" />
                <text x="400" y="186" textAnchor="middle" fill="var(--accent-color)" fontSize="22" fontWeight="bold" fontFamily="sans-serif">React</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <Experience />
    </div>
  );
};

export default AboutPage;
