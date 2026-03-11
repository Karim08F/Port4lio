import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = ({ title }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'glass shadow-lg' : ''}`}
            style={{ padding: scrolled ? '0.7rem 0' : '1.2rem 0' }}>
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <span style={{ fontWeight: 800 }}>{title || 'Mwangolo'}</span>
                    <span style={{ color: 'var(--primary-color)' }}>.</span>
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/skills">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
                            <a href="mailto:freddiekarimah@gmail.com" className="btn btn-primary btn-sm px-4">
                                Let's talk
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
