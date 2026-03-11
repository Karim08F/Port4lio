import React, { useState, useEffect, useRef } from 'react';
import techImage from '../assets/images/tech.jpeg';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20; // range -10 to 10
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* 3D Parallax Background */}
      <div 
        className="bg-image" 
        style={{ 
          backgroundImage: `url(${techImage})`,
          transform: `scale(1.1) translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`
        }}
      ></div>
      
      {/* Refined Overlays for Clarity */}
      <div className="overlay-vignette"></div>
      <div className="overlay-mesh"></div>
      
      <div className="hero-container container">
        <div 
          className="hero-content fade-in"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * -0.2}deg) rotateY(${mousePos.x * 0.2}deg)`
          }}
        >
          <div className="hero-glass-panel">
            <div className="badge-modern mb-3">
              <span className="dot"></span>
              Available for new projects
            </div>
            
            <h2 className="greeting">Hello, I’m</h2>
            <h1 className="name">
              Mwangolo <span className="gradient-text">Fredrick Karimah</span>
            </h1>
            
            <p className="bio">
              Data Scientist <span className="separator"></span> Business Analyst <span className="separator"></span> Graphic Designer
            </p>
            
            <div className="location-tag">
              <i className="fas fa-map-marker-alt"></i>
              Based in Mombasa, Kenya
            </div>

            <div className="hero-buttons">
              <a href="mailto:freddiekarimah@gmail.com" className="btn btn-primary">
                <i className="fas fa-paper-plane me-2"></i> Hire Me
              </a>
              <a href="#" className="btn btn-secondary">
                <i className="fas fa-download me-2"></i> Download CV
              </a>
            </div>
          </div>
          
          <div className="hero-stats-panel glass-card mt-5">
            <div className="stat-item">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #020617;
          padding-top: 80px;
        }

        .bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: saturate(1.1) brightness(0.6);
          transition: transform 0.2s ease-out;
          will-change: transform;
        }

        .overlay-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 20%, #020617 95%);
          z-index: 1;
        }

        .overlay-mesh {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(225,39%,30%,0.2) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(339,49%,30%,0.1) 0, transparent 50%);
          z-index: 2;
          opacity: 0.8;
        }

        .hero-container {
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 850px;
          transition: transform 0.1s ease-out;
          transform-style: preserve-3d;
        }

        .hero-glass-panel {
          padding: 40px;
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(8px);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .badge-modern {
          display: inline-flex;
          align-items: center;
          padding: 6px 16px;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 99px;
          color: #a78bfa;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: var(--primary-color);
          border-radius: 50%;
          margin-right: 10px;
          box-shadow: 0 0 10px var(--primary-color);
          animation: blink 1.5s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .greeting {
          font-size: 1.5rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
          font-weight: 300;
          letter-spacing: 0.1em;
        }

        .name {
          font-size: 5rem;
          line-height: 1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: white;
          letter-spacing: -0.04em;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .gradient-text {
          background: linear-gradient(
            to right, 
            #8b5cf6, #06b6d4, #10b981, #f59e0b, #ec4899, #8b5cf6
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: waveGradient 4s linear infinite;
          filter: drop-shadow(0 2px 15px rgba(139, 92, 246, 0.3));
        }

        @keyframes waveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .bio {
          font-size: 1.25rem;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          font-weight: 400;
        }

        .separator {
          width: 5px;
          height: 5px;
          background: #475569;
          border-radius: 50%;
        }

        .location-tag {
          font-size: 1.1rem;
          color: #22d3ee;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-stats-panel {
          display: inline-flex;
          padding: 24px 40px;
          gap: 40px;
          align-items: center;
          border-radius: 20px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 6px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .name { font-size: 3.5rem; }
          .hero-glass-panel { padding: 25px; }
          .hero-stats-panel { padding: 15px 25px; gap: 20px; }
          .stat-num { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Home;
