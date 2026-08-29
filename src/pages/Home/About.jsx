import React from 'react';
import profileImg from '../../assets/images/profile/profile-square-3.webp';

/**
 * About Section Component for Home Page
 * Details Ardhendu Bag's bio, background, location, and passions with theme compatibility.
 */
const About = () => {
  return (
    <section id="about" className="py-5 border-bottom border-secondary border-opacity-10">
      <div className="container py-4" data-aos="fade-up">
        {/* Section Title */}
        <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
          <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill uppercase border border-info border-opacity-25 mb-2">
            Get To Know Me
          </span>
          <h2 className="display-6 fw-bold">About Me</h2>
          <div className="mx-auto bg-info" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
        </div>

        <div className="row g-4 align-items-center">
          {/* Profile Card */}
          <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="card theme-card rounded-4 overflow-hidden p-4 shadow-sm">
              <div className="text-center mb-3">
                <img
                  src={profileImg}
                  alt="Ardhendu Bag"
                  className="img-fluid rounded-4 shadow-sm border border-secondary border-opacity-25 mb-3"
                  style={{ maxHeight: '280px', objectFit: 'cover' }}
                />
                <h4 className="fw-bold mb-1">Ardhendu Bag</h4>
                <p className="text-info mb-3">Full Stack Software Developer</p>
              </div>

              <div className="d-flex flex-column gap-2 small border-top border-secondary border-opacity-25 pt-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill text-info me-2 fs-5"></i>
                  <div>
                    <strong>Location:</strong> From Hooghly, West Bengal (Staying in Kalyani)
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-briefcase-fill text-info me-2 fs-5"></i>
                  <div>
                    <strong>Role:</strong> Software Developer @ Codeulas Innovation
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-award-fill text-info me-2 fs-5"></i>
                  <div>
                    <strong>Education:</strong> B.Tech (2022) | Diploma (2019)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Details */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <h3 className="fw-bold mb-3">
              Passionate Full Stack Developer Crafting Modern Web Solutions
            </h3>
            <p className="lead fs-6 mb-4 opacity-75">
              I am a Full Stack Software Developer. I enjoy building responsive and user-friendly web applications. I am always learning new technologies and improving my programming skills.
            </p>

            <div className="row g-3">
              <div className="col-sm-6">
                <div className="p-3 theme-card rounded-3 h-100">
                  <i className="bi bi-code-square text-info fs-3 mb-2 d-block"></i>
                  <h5 className="fw-bold fs-6 mb-2">Frontend Excellence</h5>
                  <p className="small mb-0 opacity-75">
                    Building intuitive interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js.
                  </p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="p-3 theme-card rounded-3 h-100">
                  <i className="bi bi-server text-info fs-3 mb-2 d-block"></i>
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
