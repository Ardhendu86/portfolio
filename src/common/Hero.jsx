import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import profileImg from '../assets/images/profile/profile-2.webp';

/**
 * Hero Component
 * Displays main landing section introducing Ardhendu Bag with theme-aware styling.
 */
const Hero = () => {
  const typedTargetRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTargetRef.current, {
      strings: [
        'Full Stack Software Developer',
        'React.js Developer',
        'Java & Spring Boot Developer',
        'Web Developer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="py-5 position-relative overflow-hidden border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          {/* Hero Left Content */}
          <div className="col-lg-7" data-aos="fade-right" data-aos-delay="100">
            <div className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill mb-3 border border-info border-opacity-25 fs-6 fw-normal">
              <i className="bi bi-geo-alt-fill me-1"></i> From Hooghly | Staying in Kalyani, West Bengal
            </div>
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-info">Ardhendu Bag</span>
            </h1>
            
            {/* Dynamic Typed.js Subtitle */}
            <p className="h3 opacity-75 mb-4 fw-normal">
              I'm a <span ref={typedTargetRef} className="text-info fw-semibold"></span>
            </p>

            <p className="lead mb-4 opacity-75" style={{ maxWidth: '600px' }}>
              I enjoy building responsive, scalable, and user-friendly web applications. With expertise in React.js, Java, Spring Boot, and databases, I am continuously learning and refining modern web solutions.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <Link to="/projects" className="btn btn-info btn-lg px-4 py-2 text-white fw-semibold rounded-3 shadow">
                <i className="bi bi-kanban me-2"></i> View My Work
              </Link>
              <Link to="/contact" className="btn btn-outline-info btn-lg px-4 py-2 fw-semibold rounded-3">
                <i className="bi bi-chat-dots me-2"></i> Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="d-flex align-items-center gap-3 pt-2">
              <span className="small fw-semibold opacity-75">Connect:</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="fs-5 hover-info" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="fs-5 hover-info" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:ardhendubag@example.com" className="fs-5 hover-info" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>

          {/* Hero Right Visual */}
          <div className="col-lg-5 text-center" data-aos="fade-left" data-aos-delay="200">
            <div className="position-relative d-inline-block">
              {/* Smooth Animated Glowing Backdrop Blob */}
              <div className="position-absolute hero-animated-glow"></div>

              <img
                src={profileImg}
                alt="Ardhendu Bag"
                className="img-fluid rounded-4 shadow-lg position-relative border border-secondary border-opacity-25"
                style={{ maxHeight: '420px', objectFit: 'cover', zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
