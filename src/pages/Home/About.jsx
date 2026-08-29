import React from 'react';
import profileImg from '../../assets/images/profile/profile-square-3.webp';
import { HoloIcon, HoloBadge } from '../../common/Hologram';

/**
 * About Section Component for Home Page
 * Details Ardhendu Bag's bio, background, location, and passions with Hologram Icons and glowing symbols.
 */
const About = () => {
  return (
    <section id="about" className="py-5 border-bottom border-secondary border-opacity-10 position-relative">
      <div className="container py-4" data-aos="fade-up">
        {/* Section Title */}
        <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-2">
            <HoloBadge icon="bi-person-badge-fill" text="Get To Know Me" variant="cyan" />
          </div>
          <h2 className="display-6 fw-bold">About Me</h2>
          <div className="mx-auto bg-info" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
        </div>

        <div className="row g-4 align-items-center">
          {/* Profile Hologram Card */}
          <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="card theme-card holo-card rounded-4 overflow-hidden p-4 shadow-sm position-relative">
              <div className="text-center mb-3">
                <div className="position-relative d-inline-block">
                  <img
                    src={profileImg}
                    alt="Ardhendu Bag"
                    className="img-fluid rounded-4 shadow-sm border border-secondary border-opacity-25 mb-3"
                    style={{ maxHeight: '280px', objectFit: 'cover' }}
                  />
                </div>
                <h4 className="fw-bold mb-1">Ardhendu Bag</h4>
                <p className="text-info mb-3">Full Stack Software Developer</p>
              </div>

              {/* Holographic Info Rows */}
              <div className="d-flex flex-column gap-3 small border-top border-secondary border-opacity-25 pt-3">
                <div className="d-flex align-items-center gap-3">
                  <HoloIcon icon="bi-geo-alt-fill" size="sm" variant="cyan" showCorners={true} />
                  <div>
                    <strong>Location:</strong> From Hooghly, West Bengal (Staying in Kalyani)
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <HoloIcon icon="bi-briefcase-fill" size="sm" variant="neon" showCorners={true} />
                  <div>
                    <strong>Role:</strong> Software Developer @ Codeulas Innovation
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <HoloIcon icon="bi-award-fill" size="sm" variant="emerald" showCorners={true} />
                  <div>
                    <strong>Education:</strong> B.Tech (2022) | Diploma (2019)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Hologram Skill Pillars */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <h3 className="fw-bold mb-3">
              Passionate Full Stack Developer Crafting Modern Web Solutions
            </h3>
            <p className="lead fs-6 mb-4 opacity-75">
              I am a Full Stack Software Developer. I enjoy building responsive and user-friendly web applications. I am always learning new technologies and improving my programming skills.
            </p>

            <div className="row g-3">
              <div className="col-sm-6">
                <div className="p-4 theme-card holo-card rounded-3 h-100 position-relative">
                  <div className="mb-3">
                    <HoloIcon icon="bi-code-square" size="md" variant="cyan" showCorners={true} showEmitter={true} />
                  </div>
                  <h5 className="fw-bold fs-6 mb-2">Frontend Excellence</h5>
                  <p className="small mb-0 opacity-75">
                    Building intuitive interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js.
                  </p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-4 theme-card holo-card rounded-3 h-100 position-relative">
                  <div className="mb-3">
                    <HoloIcon icon="bi-server" size="md" variant="neon" showCorners={true} showEmitter={true} />
                  </div>
                  <h5 className="fw-bold fs-6 mb-2">Backend &amp; Database</h5>
                  <p className="small mb-0 opacity-75">
                    Developing robust backend APIs with Core Java, Spring Boot, MySQL, and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
