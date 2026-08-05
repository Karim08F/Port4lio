import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Mwangolo Fredrick Karimah. All rights reserved.</p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/mwangolo-fredrick-8715b2253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Karim08F" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
                <a href="https://x.com/karimfred08" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-x-twitter"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
