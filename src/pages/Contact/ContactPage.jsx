import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Home/Contact';
import './ContactPage.css';

/**
 * ContactPage Component
 * Features breadcrumb navigation, Communication SVG illustration hero header banner, and contact form.
 */
const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Header Banner */}
      <div className="contact-page-header py-5 position-relative overflow-hidden">
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
                    Contact Me
                  </li>
                </ol>
              </nav>

              <h1 className="display-5 fw-bold mb-3">Get In Touch</h1>
              <p className="lead mb-0 opacity-75" style={{ maxWidth: '600px' }}>
                Have a project inquiry, software opportunity, or message? Reach out to Ardhendu Bag directly.
              </p>
            </div>

            {/* Mailbox / Communication SVG Illustration */}
            <div className="col-lg-5 text-center">
              <svg
                className="img-fluid hero-banner-svg"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxHeight: '280px' }}
              >
                {/* Envelope Graphic */}
                <rect x="70" y="100" width="360" height="220" rx="20" fill="var(--surface-color)" stroke="var(--border-color)" strokeWidth="4" />
                <path d="M70 120 L250 240 L430 120" stroke="var(--accent-color)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Send Signal Graphic */}
                <circle cx="250" cy="180" r="36" fill="var(--badge-bg)" stroke="var(--accent-color)" strokeWidth="3" />
                <path d="M238 180 L262 180 M254 172 L262 180 L254 188" stroke="var(--accent-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                {/* Floating Communication Nodes */}
                <circle cx="90" cy="80" r="25" fill="var(--badge-bg)" stroke="var(--secondary-accent)" strokeWidth="2" />
                <circle cx="410" cy="80" r="30" fill="var(--badge-bg)" stroke="var(--accent-color)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ContactPage;
