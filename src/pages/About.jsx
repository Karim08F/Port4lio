import React, { useEffect, useState } from 'react';
import fredImage from '../assets/images/fred1.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="about-modern py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 order-lg-2">
            <div className={`about-image-container fade-in ${isVisible ? 'visible' : ''}`}>
              <div className="image-wrapper glass">
                <img src={fredImage} alt="Mwangolo Fredrick Karimah" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="col-lg-7 order-lg-1">
            <div className={`about-content fade-in ${isVisible ? 'visible' : ''}`}>
              <h4 className="section-subtitle">Biography</h4>
              <h2 className="section-title">Who is <span className="gradient-text">Fredrick?</span></h2>

              <div className="about-description">
                <p className="lead-text">
                  I am a results-driven professional passionate about bridging the gap between raw data and strategic decisions.
                </p>
                <p>
                  My journey began with deep-diving into Python, where I specialized in <strong>pandas, NumPy, and SQL</strong>. I don't just process data; I tell stories that matter. Whether it's optimization or trend analysis, my focus is always on creating a tangible impact.
                </p>
                <div className="info-grid mt-4">
                  <div className="info-item">
                    <span className="label">Location</span>
                    <span className="value">Mombasa, Kenya</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Email</span>
                    <span className="value">freddiekarimah@gmail.com</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Role</span>
                    <span className="value">Data Scientist / Analyst</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 d-flex gap-3 flex-wrap">
                <a href="#contact" className="btn btn-primary">Let's Work Together</a>
                <a href="#" className="btn btn-secondary">Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-modern {
          padding-top: 120px !important;
          background: linear-gradient(180deg, var(--bg-dark) 0%, #080c14 100%);
        }

        .section-subtitle {
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: white;
        }

        .lead-text {
          font-size: 1.4rem;
          color: var(--text-main);
          font-weight: 500;
          line-height: 1.4;
          margin-bottom: 1.5rem;
        }

        .about-description p {
          color: var(--text-muted);
          font-size: 1.05rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          padding: 24px;
          background: rgba(139, 92, 246, 0.05);
          border-radius: 16px;
          border: 1px solid var(--glass-border);
        }

        .info-item .label {
          display: block;
          font-size: 0.8rem;
          color: var(--primary-color);
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .info-item .value {
          color: white;
          font-weight: 500;
        }

        .about-image-container {
          position: relative;
          padding: 20px;
        }

        .image-wrapper {
          border-radius: 24px;
          overflow: hidden;
          padding: 10px;
          position: relative;
        }

        .image-wrapper img {
          border-radius: 16px;
          width: 100%;
          filter: contrast(1.1) brightness(0.9);
          transition: 0.5s;
        }

        .image-wrapper:hover img {
          transform: scale(1.03);
          filter: contrast(1.15) brightness(1);
        }

        @media (max-width: 992px) {
          .section-title { font-size: 2.5rem; }
          .about-image-container { margin-bottom: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default About;
