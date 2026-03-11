import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const skillsData = [
    { name: 'Python', pct: 92, icon: 'fab fa-python' },
    { name: 'Pandas / NumPy', pct: 88, icon: 'fas fa-chart-line' },
    { name: 'Jupyter / Colab', pct: 86, icon: 'fas fa-book-open' },
    { name: 'Matplotlib / Seaborn', pct: 82, icon: 'fas fa-project-diagram' },
    { name: 'Excel / Power BI', pct: 85, icon: 'fas fa-table' },
    { name: 'Flask', pct: 78, icon: 'fas fa-flask' },
    { name: 'SQL', pct: 80, icon: 'fas fa-database' },
  ];

  return (
    <main className="skills-modern py-5">
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h4 className="section-subtitle">Expertise</h4>
          <h2 className="section-title">Skills & <span className="gradient-text">Experience</span></h2>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="glass-card p-4 h-100">
              <h3 className="card-title mb-4">Technical Proficiencies</h3>
              <div className="skills-list">
                {skillsData.map((skill, index) => (
                  <div className="skill-item mb-4" key={index}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="skill-name">
                        <i className={`${skill.icon} me-2 text-primary`}></i>
                        {skill.name}
                      </span>
                      <span className="skill-percentage">{skill.pct}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar-fill"
                        style={{ width: animate ? `${skill.pct}%` : '0%' }}
                      >
                        <div className="glow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="glass-card p-4 mb-4">
              <h3 className="card-title mb-4">Professional Journey</h3>
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="period">Jan 2025 – Apr 2025</span>
                    <h4 className="role">Data Analyst Intern</h4>
                    <p className="description">
                      Spearheaded data cleaning, exploration, and advanced storytelling. Transformed raw data into actionable insights for high-level decision support.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="period">2024</span>
                    <h4 className="role">IT Intern – Mombasa Maize Millers (TAIFA)</h4>
                    <p className="description">
                      Managed enterprise IT infrastructure including servers and networks. Integrated SQL and Excel mapping to optimize IT operation reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-4">
              <h3 className="card-title mb-4">Tools & Technologies</h3>
              <div className="tools-cloud">
                {['Git', 'Linux', 'AWS', 'TensorFlow', 'PostgreSQL', 'Docker', 'Tableau'].map((tool, i) => (
                  <span className="tool-tag" key={i}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-modern {
          padding-top: 120px !important;
          background: var(--bg-dark);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.01em;
        }

        .skill-name {
          font-weight: 500;
          color: var(--text-main);
        }

        .skill-percentage {
          font-weight: 600;
          color: var(--primary-color);
        }

        .skill-bar-container {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
        }

        .skill-bar-fill {
          height: 100%;
          background: var(--grad-primary);
          border-radius: 10px;
          transition: width 1.5s cubic-bezier(0.65, 0, 0.35, 1);
          position: relative;
        }

        .skill-bar-fill .glow {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 30px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: barGlow 3s infinite;
        }

        @keyframes barGlow {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(400%) skewX(-20deg); }
        }

        .experience-timeline {
          padding-left: 20px;
          border-left: 1px solid var(--glass-border);
          position: relative;
        }

        .timeline-item {
          position: relative;
          padding-bottom: 30px;
        }

        .timeline-dot {
          position: absolute;
          left: -25px;
          top: 8px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary-color);
          box-shadow: 0 0 10px var(--primary-color);
        }

        .period {
          font-size: 0.85rem;
          color: var(--primary-color);
          font-weight: 600;
          display: block;
          margin-bottom: 5px;
        }

        .role {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 10px;
        }

        .description {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .tools-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tool-tag {
          padding: 8px 16px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          font-size: 0.9rem;
          color: var(--text-main);
          transition: 0.3s;
        }

        .tool-tag:hover {
          background: var(--grad-primary);
          transform: translateY(-3px);
          border-color: transparent;
        }
      `}</style>
    </main>
  );
};

export default Skills;
