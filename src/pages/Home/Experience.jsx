import React from 'react';

/**
 * Experience Component
 * Developed based on the Workfolio Bootstrap template design.
 */
const Experience = () => {
  return (
    <section id="experience" className="experience section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Experience</h2>
        <p>The roles and milestones that shaped how I work today</p>
      </div>

      <div className="container">
        <div className="row g-5">
          {/* Work Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="col-head">
              <i className="bi bi-briefcase"></i>
              <h3>Work</h3>
            </div>
            <div className="timeline">
              <div className="item">
                <span className="year">12 August 2024 — Present</span>
                <h4>Software Developer</h4>
                <span className="org">Codeulas Innovation Pvt. Ltd.</span>
                <p>
                  Working as a Full Stack Software Developer using Java, Spring Boot, React.js, MySQL, PostgreSQL, and REST APIs.
                </p>
              </div>
              <div className="item">
                <span className="year">01 January 2023 — 05 August 2024</span>
                <h4>Web Developer</h4>
                <span className="org">Softech Company</span>
                <p>
                  Worked on responsive websites using HTML, CSS, JavaScript, Bootstrap, and React.js.
                </p>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="col-head">
              <i className="bi bi-mortarboard"></i>
              <h3>Education &amp; Qualifications</h3>
            </div>
            <div className="timeline">
              <div className="item">
                <span className="year">Completed in 2022</span>
                <h4>B.Tech in Computer Science &amp; Engineering</h4>
                <span className="org">Seacom Engineering College</span>
                <p>
                  Completed B.Tech with focus on software engineering, object-oriented programming, data structures, and database systems.
                </p>
              </div>
              <div className="item">
                <span className="year">Completed in 2019</span>
                <h4>Diploma in Engineering</h4>
                <span className="org">Kingston Polytechnic College</span>
                <p>
                  Learned web technology basics, core computer science concepts, and practical programming projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
          <a href="/assets/files/Ardhendu_Bag_Resume.txt" download className="btn-main">
            <i className="bi bi-download"></i> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
