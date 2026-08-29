import React from 'react';
import project1Img from '../../assets/images/portfolio/portfolio-1.webp';
import project2Img from '../../assets/images/portfolio/portfolio-2.webp';
import project3Img from '../../assets/images/portfolio/portfolio-5.webp';

/**
 * Projects Component
 * Displays grid of web applications and software projects with theme compatibility.
 */
const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Full Stack Enterprise Management System',
      category: 'Java & Spring Boot + React',
      image: project1Img,
      description: 'Comprehensive business management system featuring REST API endpoints, JWT authentication, PostgreSQL database integration, and responsive React frontend.',
      tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Bootstrap'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Responsive E-Commerce Web Portal',
      category: 'React.js & Redux Toolkit',
      image: project2Img,
      description: 'Dynamic online store platform with product filtering, shopping cart state management using Redux Toolkit, and payment gateway UI integrations.',
      tags: ['React.js', 'Redux Toolkit', 'Bootstrap 5', 'REST APIs'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Interactive Portfolio Web Application',
      category: 'Frontend Development',
      image: project3Img,
      description: 'Clean single-page React portfolio featuring component routing, responsive layout, theme toggle, and interactive contact forms.',
      tags: ['React.js', 'Bootstrap Icons', 'HTML5/CSS3', 'JavaScript'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-5 border-bottom border-secondary border-opacity-10">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill border border-info border-opacity-25 mb-2">
            My Creative Work
          </span>
          <h2 className="display-6 fw-bold">Featured Projects</h2>
          <div className="mx-auto bg-info" style={{ width: '60px', height: '3px', borderRadius: '2px' }}></div>
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4">
          {projectList.map((project, idx) => (
            <div key={project.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="card theme-card rounded-4 overflow-hidden h-100 shadow-sm">
                <div className="position-relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top w-100"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-info text-dark font-monospace">{project.category}</span>
                  </div>
                </div>

                <div className="card-body p-4 d-flex flex-column">
                  <h4 className="card-title fw-bold fs-5 mb-2">{project.title}</h4>
                  <p className="card-text small flex-grow-1 mb-3 opacity-75">{project.description}</p>

                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 small">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-2 pt-2 border-top border-secondary border-opacity-25">
                    <a href={project.demoUrl} className="btn btn-sm btn-info text-white flex-grow-1">
                      <i className="bi bi-box-arrow-up-right me-1"></i> Live Demo
                    </a>
                    <a href={project.githubUrl} className="btn btn-sm btn-outline-info">
                      <i className="bi bi-github"></i> Code
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
