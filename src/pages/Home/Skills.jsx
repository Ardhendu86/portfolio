import React from 'react';
import { HoloIcon, HoloBadge } from '../../common/Hologram';

/**
 * Skills Component
 * Displays Ardhendu Bag's technical skills with 3D Hologram Icons, futuristic emitter pedestals, and glowing cyber badges.
 */
const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: 'bi-window-sidebar',
      symbol: '⚛',
      variant: 'cyan',
      skills: [
        { name: 'HTML5', symbol: '🌐' },
        { name: 'CSS3', symbol: '🎨' },
        { name: 'JavaScript', symbol: '⚡' },
        { name: 'Bootstrap 5', symbol: '🅱️' },
        { name: 'React.js', symbol: '⚛' },
        { name: 'Redux Toolkit', symbol: '🔄' }
      ]
    },
    {
      category: 'Backend & Java Stack',
      icon: 'bi-cpu-fill',
      symbol: '☕',
      variant: 'neon',
      skills: [
        { name: 'Core Java', symbol: '☕' },
        { name: 'JDBC', symbol: '🔌' },
        { name: 'Servlet', symbol: '⚙️' },
        { name: 'Hibernate', symbol: '🧬' },
        { name: 'Spring Boot', symbol: '🌱' },
        { name: 'Express.js', symbol: '🚀' }
      ]
    },
    {
      category: 'Database & Architecture',
      icon: 'bi-database-fill-gear',
      symbol: '🗄️',
      variant: 'emerald',
      skills: [
        { name: 'SQL', symbol: '📊' },
        { name: 'MySQL', symbol: '🐬' },
        { name: 'PostgreSQL', symbol: '🐘' },
        { name: 'RESTful APIs', symbol: '🔗' },
        { name: 'Git & GitHub', symbol: '🌿' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-5 border-bottom border-secondary border-opacity-10 position-relative">
      <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
        {/* Section Title */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="mb-2">
            <HoloBadge icon="bi-lightning-charge-fill" text="Technical Proficiency" variant="cyan" />
          </div>
          <h2 className="display-6 fw-bold">Skills &amp; Technologies</h2>
          <div className="mx-auto bg-info" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
        </div>

        {/* Skill Category Cards */}
        <div className="row g-4">
          {skillCategories.map((cat, catIdx) => (
            <div key={catIdx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (catIdx + 1)}>
              <div className="card theme-card holo-card rounded-4 p-4 h-100 shadow-sm position-relative">
                {/* Header with 3D Hologram Pedestal Icon */}
                <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-secondary border-opacity-25">
                  <HoloIcon
                    icon={cat.icon}
                    size="lg"
                    variant={cat.variant}
                    showEmitter={true}
                    showCorners={true}
                    showRings={true}
                  />
                  <div>
                    <span className="badge bg-secondary bg-opacity-25 text-info small mb-1">
                      {cat.symbol} Stack
                    </span>
                    <h4 className="fw-bold fs-5 mb-0">{cat.category}</h4>
                  </div>
                </div>

                {/* Holographic Skill Badges */}
                <div className="d-flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="badge bg-dark bg-opacity-50 border border-info border-opacity-25 text-info px-3 py-2 fs-6 rounded-pill d-flex align-items-center gap-2 shadow-sm"
                      style={{ transition: 'all 0.25s ease' }}
                    >
                      <span className="opacity-90">{skill.symbol}</span>
                      <span>{skill.name}</span>
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
