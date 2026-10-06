import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import profileImg from '../assets/images/profile/ardhendu2.png';
import { HoloIcon, HoloProjector, HoloBadge, HoloGridBackground } from './Hologram';

/**
 * Hero Component
 * Displays main landing section introducing Ardhendu Bag with 3D Hologram projection and futuristic glowing symbols.
 */
const Hero = () => {
  const typedTargetRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTargetRef.current, {
      strings: [
        'Full Stack Software Developer',
        'React.js Developer',
        'Laravel & CodeIgniter Developer',
        'Node.js & Express Developer'
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
      {/* Ambient Hologram Perspective Grid */}
      <HoloGridBackground />

      <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          {/* Hero Left Content */}
          <div className="col-lg-7 order-2 order-lg-1" data-aos="fade-right" data-aos-delay="100">
            {/* Hologram Badge */}
            <div className="mb-3">
              <HoloBadge
                icon="bi-geo-alt-fill"
                text="From Hooghly | Staying in Kalyani, West Bengal"
                variant="cyan"
              />
            </div>

            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-info">Ardhendu Bag</span>
            </h1>
            
            {/* Dynamic Typed.js Subtitle with Hologram Cyber Symbol */}
            <p className="h3 opacity-75 mb-4 fw-normal d-flex align-items-center flex-wrap gap-2">
              <span>I'm a</span>
              <span ref={typedTargetRef} className="text-info fw-semibold"></span>
            </p>

            <p className="lead mb-4 opacity-75" style={{ maxWidth: '600px' }}>
              I enjoy building responsive, scalable, and user-friendly web applications. With expertise in React.js, Laravel, CodeIgniter 3, Node.js, Express, and modern databases, I am continuously learning and refining modern web solutions.
            </p>

            {/* CTA Buttons with Holographic icons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <Link to="/projects" className="btn btn-info btn-lg px-4 py-2 text-white fw-semibold rounded-3 shadow d-inline-flex align-items-center gap-2">
                <i className="bi bi-kanban"></i> View My Work
              </Link>
              <Link to="/contact" className="btn btn-outline-info btn-lg px-4 py-2 fw-semibold rounded-3 d-inline-flex align-items-center gap-2">
                <i className="bi bi-chat-dots"></i> Contact Me
              </Link>
            </div>

            {/* Social Links with Hologram Icon Glow */}
            <div className="d-flex align-items-center gap-3 pt-2">
              <span className="small fw-semibold opacity-75">Connect:</span>
              <span title="GitHub" style={{ cursor: 'default' }}>
                <HoloIcon icon="bi-github" size="sm" variant="cyan" showCorners={true} />
              </span>
              <a href="https://www.linkedin.com/in/ardhendu-bag-28936a152" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <HoloIcon icon="bi-linkedin" size="sm" variant="blue" showCorners={true} />
              </a>
              <a href="mailto:ardhendubag01@gmail.com" aria-label="Email">
                <HoloIcon icon="bi-envelope" size="sm" variant="neon" showCorners={true} />
              </a>
            </div>
          </div>

          {/* Hero Right Visual - 3D Holographic Projector */}
          <div className="col-lg-5 text-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="200">
            <HoloProjector
              orbitSymbols={[
                { symbol: '⚛', label: 'React.js', variant: 'cyan', style: { top: '-12px', left: '-20px' } },
                { symbol: '🔴', label: 'Laravel', variant: 'neon', style: { top: '30%', right: '-30px' } },
                { symbol: '🚀', label: 'Express.js', variant: 'emerald', style: { bottom: '40px', left: '-25px' } },
                { symbol: '🗄️', label: 'PostgreSQL', variant: 'cyan', style: { bottom: '-15px', right: '20px' } },
              ]}
            >
              <img
                src={profileImg}
                alt="Ardhendu Bag"
                className="img-fluid rounded-4 shadow-lg position-relative"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </HoloProjector>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
