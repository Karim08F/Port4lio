import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Mwangolo Fredrick Karimah. All rights reserved.</p>
            <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
                <a href="#">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;
