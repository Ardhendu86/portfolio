import React from 'react';
import { HoloIcon, HoloBadge } from '../../common/Hologram';

/**
 * Experience Component
 * Features futuristic Hologram timeline nodes, glowing orbital badges, and career milestones.
 */
const Experience = () => {
  return (
    <section id="experience" className="experience section py-5 border-bottom border-secondary border-opacity-10 position-relative">
      {/* Section Title */}
      <div className="container text-center mb-5" data-aos="fade-up">
        <div className="mb-2">
          <HoloBadge icon="bi-clock-history" text="Career & Education" variant="neon" />
        </div>
        <h2 className="display-6 fw-bold">Experience</h2>
        <div className="mx-auto bg-info mb-3" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
        <p className="opacity-75">The roles and milestones that shaped how I work today</p>
      </div>

      <div className="container">
        <div className="row g-5">
          {/* Work Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="d-flex align-items-center gap-3 mb-4">
              <HoloIcon icon="bi-briefcase" size="md" variant="cyan" showCorners={true} showRings={true} />
              <h3 className="fw-bold fs-4 mb-0">Work Experience</h3>
            </div>
            <div className="timeline">
              <div className="item holo-card p-4 rounded-4 mb-4 border border-info border-opacity-25">
                <span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 mb-2">
                  12 August 2025 — Present
                </span>
                <h4 className="fw-bold fs-5 mb-1">Software Developer</h4>
                <div className="text-info small fw-semibold mb-2">Codeulas Innovation Pvt. Ltd.</div>
                <p className="small mb-0 opacity-75">
                  Working as a Software Developer using Laravel, CodeIgniter 3, React.js, Node.js, Express, Redux Toolkit, MySQL, PostgreSQL, and REST APIs.
                </p>
              </div>

              <div className="item holo-card p-4 rounded-4 border border-info border-opacity-25">
                <span className="badge bg-secondary bg-opacity-25 text-info mb-2">
                  01 January 2024 — 12 August 2025
                </span>
                <h4 className="fw-bold fs-5 mb-1">Web Developer</h4>
                <div className="text-info small fw-semibold mb-2">AS Softech</div>
                <p className="small mb-0 opacity-75">
                  Worked on responsive websites using HTML, CSS, JavaScript, Bootstrap, and Core PHP.
                </p>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex align-items-center gap-3 mb-4">
              <HoloIcon icon="bi-mortarboard" size="md" variant="neon" showCorners={true} showRings={true} />
              <h3 className="fw-bold fs-4 mb-0">Education &amp; Qualifications</h3>
            </div>
            <div className="timeline">
              <div className="item holo-card p-4 rounded-4 mb-4 border border-info border-opacity-25">
                <span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 mb-2">
                  Completed in 2022
                </span>
                <h4 className="fw-bold fs-5 mb-1">B.Tech in Mechanical Engineering</h4>
                <div className="text-info small fw-semibold mb-2">Seacom Engineering College</div>
                <p className="small mb-0 opacity-75">
                  Graduated with a Bachelor of Technology in Mechanical Engineering, building strong analytical thinking, mathematics, and problem-solving foundations.
                </p>
              </div>

              <div className="item holo-card p-4 rounded-4 border border-info border-opacity-25">
                <span className="badge bg-secondary bg-opacity-25 text-info mb-2">
                  Completed in 2019
                </span>
                <h4 className="fw-bold fs-5 mb-1">Diploma in Mechanical Engineering</h4>
                <div className="text-info small fw-semibold mb-2">Kingston Polytechnic College</div>
                <p className="small mb-0 opacity-75">
                  Completed Diploma in Mechanical Engineering, gaining hands-on practical training, engineering design fundamentals, and applied technical skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
          <a href="/assets/files/Ardhendu_Bag_Resume.pdf" download="Ardhendu_Bag_Resume.pdf" className="btn btn-info btn-lg px-4 py-2 text-white fw-semibold rounded-3 shadow d-inline-flex align-items-center gap-2">
            <i className="bi bi-download"></i> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
