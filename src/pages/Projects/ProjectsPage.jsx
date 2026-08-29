import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../Home/Projects';
import './ProjectsPage.css';

/**
 * ProjectsPage Component
 * Features breadcrumb navigation, Project Dashboard SVG illustration hero header banner, and project cards.
 */
const ProjectsPage = () => {
  return (
    <div className="projects-page">
      {/* Hero Header Banner */}
      <div className="projects-page-header py-5 position-relative overflow-hidden">
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
                    Projects Showcase
                  </li>
                </ol>
              </nav>

              <h1 className="display-5 fw-bold mb-3">Featured Projects</h1>
              <p className="lead mb-0 opacity-75" style={{ maxWidth: '600px' }}>
                Explore full stack web applications, interactive portals, and software engineering projects built by Ardhendu Bag.
              </p>
            </div>

            {/* Code IDE / Dashboard SVG Illustration */}
            <div className="col-lg-5 text-center">
              <svg
                className="img-fluid hero-banner-svg"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxHeight: '280px' }}
              >
                <rect x="40" y="60" width="420" height="280" rx="16" fill="var(--surface-color)" stroke="var(--border-color)" strokeWidth="4" />
                <rect x="40" y="60" width="420" height="40" rx="16" fill="var(--badge-bg)" />
                <circle cx="70" cy="80" r="6" fill="#ef4444" />
                <circle cx="90" cy="80" r="6" fill="#f59e0b" />
                <circle cx="110" cy="80" r="6" fill="#10b981" />
                <rect x="140" y="72" width="160" height="16" rx="8" fill="var(--surface-color)" opacity="0.6" />

                {/* Grid Dashboard Layout SVG */}
                <rect x="70" y="120" width="160" height="90" rx="10" fill="var(--badge-bg)" stroke="var(--accent-color)" strokeWidth="2" />
                <rect x="250" y="120" width="180" height="90" rx="10" fill="var(--card-bg)" stroke="var(--border-color)" strokeWidth="2" />
                <rect x="70" y="230" width="360" height="80" rx="10" fill="var(--card-bg)" stroke="var(--border-color)" strokeWidth="2" />

                {/* Mini Graph Bars SVG */}
                <rect x="90" y="170" width="16" height="25" rx="3" fill="var(--accent-color)" />
                <rect x="115" y="155" width="16" height="40" rx="3" fill="var(--secondary-accent)" />
                <rect x="140" y="140" width="16" height="55" rx="3" fill="var(--accent-color)" />
                <rect x="165" y="160" width="16" height="35" rx="3" fill="var(--secondary-accent)" opacity="0.7" />

                <circle cx="430" cy="90" r="35" fill="var(--accent-color)" opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Projects />
    </div>
  );
};

export default ProjectsPage;
