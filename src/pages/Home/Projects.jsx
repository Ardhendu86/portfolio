import React from 'react';
import project1Img from '../../assets/images/portfolio/portfolio-1.webp';
import project2Img from '../../assets/images/portfolio/portfolio-2.webp';
import project3Img from '../../assets/images/portfolio/portfolio-5.webp';
import { HoloBadge, HoloIcon } from '../../common/Hologram';

/**
 * Projects Component
 * Displays grid of web applications and software projects with Hologram HUD badges and scanline styling.
 */
const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Full Stack Enterprise Management System',
      category: 'Java & Spring Boot + React',
      image: project1Img,
      icon: 'bi-kanban',
      variant: 'cyan',
      description: 'Comprehensive business management system featuring REST API endpoints, JWT authentication, PostgreSQL database integration, and responsive React frontend.',
      tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Bootstrap'],
      demoUrl: '#'
    },
    {
      id: 2,
      title: 'Responsive E-Commerce Web Portal',
      category: 'React.js & Redux Toolkit',
      image: project2Img,
      icon: 'bi-cart-check-fill',
      variant: 'neon',
      description: 'Dynamic online store platform with product filtering, shopping cart state management using Redux Toolkit, and payment gateway UI integrations.',
      tags: ['React.js', 'Redux Toolkit', 'Bootstrap 5', 'REST APIs'],
      demoUrl: '#'
    },
    {
      id: 3,
      title: 'Interactive Portfolio Web Application',
      category: 'Frontend & Hologram UI',
      image: project3Img,
      icon: 'bi-laptop',
      variant: 'emerald',
      description: 'Clean single-page React portfolio featuring component routing, responsive layout, hologram icons & symbols, theme toggle, and interactive forms.',
      tags: ['React.js', 'Hologram UI', 'HTML5/CSS3', 'JavaScript'],
      demoUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-5 border-bottom border-secondary border-opacity-10 position-relative">
      <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="mb-2">
            <HoloBadge icon="bi-grid-fill" text="My Creative Work" variant="cyan" />
          </div>
          <h2 className="display-6 fw-bold">Featured Projects</h2>
          <div className="mx-auto bg-info" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4">
          {projectList.map((project, idx) => (
            <div key={project.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="card theme-card holo-card rounded-4 overflow-hidden h-100 shadow-sm position-relative">
                {/* Project Image Banner */}
                <div className="position-relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top w-100"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <HoloBadge text={project.category} variant={project.variant} />
                  </div>
                </div>

                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <HoloIcon icon={project.icon} size="sm" variant={project.variant} showCorners={true} />
                    <h4 className="card-title fw-bold fs-5 mb-0">{project.title}</h4>
                  </div>
                  
                  <p className="card-text small flex-grow-1 mb-3 opacity-75">{project.description}</p>

                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="badge bg-dark bg-opacity-50 text-info border border-info border-opacity-25 small">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-top border-secondary border-opacity-25">
                    <a href={project.demoUrl} className="btn btn-sm btn-info text-white w-100 d-inline-flex align-items-center justify-content-center gap-1">
                      <i className="bi bi-box-arrow-up-right"></i> View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
