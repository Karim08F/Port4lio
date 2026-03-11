import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            setVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-to-top glass ${visible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <i className="fas fa-chevron-up"></i>
            <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(20px);
        }

        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .scroll-to-top:hover {
          background: var(--grad-primary);
          box-shadow: 0 0 20px var(--primary-glow);
          transform: translateY(-5px);
        }
      `}</style>
        </button>
    );
};

export default ScrollToTop;
