import React from 'react';

/**
 * Skills Component
 * Displays Ardhendu Bag's technical skills with theme-aware styling.
 */
const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: 'bi-window-sidebar',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Redux Toolkit']
    },
    {
      category: 'Backend & Java Stack',
      icon: 'bi-cpu-fill',
      skills: ['Core Java', 'JDBC', 'Servlet', 'Hibernate', 'Spring Boot', 'Express.js']
    },
    {
      category: 'Database & SQL',
      icon: 'bi-database-fill-gear',
      skills: ['SQL', 'MySQL', 'PostgreSQL']
    }
  ];

  return (
    <section id="skills" className="py-5 border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        {/* Section Title */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill border border-info border-opacity-25 mb-2">
            Technical Proficiency
          </span>
          <h2 className="display-6 fw-bold">Skills &amp; Technologies</h2>
          <div className="mx-auto bg-info" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
        </div>

        {/* Skill Category Cards */}
        <div className="row g-4">
          {skillCategories.map((cat, catIdx) => (
            <div key={catIdx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (catIdx + 1)}>
              <div className="card theme-card rounded-4 p-4 h-100 shadow-sm">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-info bg-opacity-25 text-info rounded-3 p-3 fs-4">
                    <i className={`bi ${cat.icon}`}></i>
                  </div>
                  <h4 className="fw-bold fs-5 mb-0">{cat.category}</h4>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="badge bg-info bg-opacity-10 border border-info border-opacity-25 text-info px-3 py-2 fs-6 rounded-pill d-flex align-items-center gap-2"
                    >
                      <i className="bi bi-check-circle-fill text-info small"></i>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
