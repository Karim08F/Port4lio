import React from 'react';
import telemedImg from '../assets/images/telemed.png';
import hrImg from '../assets/images/hr dashboard.png';
import bakehubImg from '../assets/images/bakehub.png';

const Projects = () => {
    const projectsData = [
        {
            title: 'TeleMed Platform',
            category: 'Healthcare Tech',
            description: 'A comprehensive telemedicine ecosystem connecting chronic disease patients with specialized care providers.',
            image: telemedImg,
            tags: ['Flask', 'MySQL', 'Bootstrap'],
            link: '#',
        },
        {
            title: 'HR Analytics Dashboard',
            category: 'Data Visualization',
            description: 'Advanced Power BI suite focusing on workforce retention metrics, satisfaction tracking, and performance ROI.',
            image: hrImg,
            tags: ['Power BI', 'DAX', 'Excel'],
            link: '#',
        },
        {
            title: 'BakeHUB E-commerce',
            category: 'Web Development',
            description: 'Full-stack online bakery store featuring secure payments, order tracking, and inventory management.',
            image: bakehubImg,
            tags: ['Django', 'Python', 'PostgreSQL'],
            link: '#',
        },
    ];

    return (
        <section className="projects-modern py-5">
            <div className="container">
                <div className="text-center mb-5 fade-in">
                    <h4 className="section-subtitle">Portfolio</h4>
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                </div>

                <div className="row g-4">
                    {projectsData.map((project, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="project-card glass-card h-100 fade-in">
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="img-fluid" />
                                    <div className="project-overlay">
                                        <a href={project.link} className="view-btn">
                                            <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                    <span className="category-tag">{project.category}</span>
                                </div>

                                <div className="project-content p-4">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description text-muted">
                                        {project.description}
                                    </p>
                                    <div className="tech-stack d-flex flex-wrap gap-2 mt-3">
                                        {project.tags.map((tag, tIndex) => (
                                            <span className="tech-tag-mini" key={tIndex}>{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-footer mt-4 pt-3 d-flex justify-content-between align-items-center">
                                        <a href="#" className="link-modern">
                                            Case Study <i className="fas fa-arrow-right ms-2"></i>
                                        </a>
                                        <div className="project-actions">
                                            <a href="#" className="icon-link" title="Watch Demo">
                                                <i className="fas fa-play-circle"></i>
                                            </a>
                                            <a href="#" className="icon-link ms-3" title="View Source">
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <a href="#" className="btn btn-secondary px-5">View All Projects</a>
                </div>
            </div>

            <style>{`
        .projects-modern {
          padding-top: 120px !important;
          background: #080c14;
        }

        .project-card {
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .project-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }

        .project-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .project-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-image-wrapper img {
          transform: scale(1.1) rotate(1deg);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(139, 92, 246, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.4s;
          backdrop-filter: blur(4px);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .view-btn {
          width: 50px;
          height: 50px;
          background: white;
          color: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transform: translateY(20px);
          transition: 0.4s;
        }

        .project-card:hover .view-btn {
          transform: translateY(0);
        }

        .category-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(15, 23, 42, 0.8);
          color: white;
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          backdrop-filter: blur(4px);
          border: 1px solid var(--glass-border);
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .project-description {
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .tech-tag-mini {
          font-size: 0.75rem;
          padding: 4px 10px;
          background: rgba(255,255,255,0.05);
          border-radius: 6px;
          color: var(--text-muted);
          border: 1px solid var(--glass-border);
        }

        .project-footer {
          border-top: 1px solid var(--glass-border);
        }

        .link-modern {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary-color);
          display: flex;
          align-items: center;
        }

        .link-modern:hover {
          color: var(--secondary-color);
        }

        .icon-link {
          font-size: 1.3rem;
          color: var(--text-muted);
          transition: 0.3s;
        }

        .icon-link:hover {
          color: white;
          transform: scale(1.1);
        }
      `}</style>
        </section>
    );
};

export default Projects;
