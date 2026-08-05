import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
    return (
        <div className="app-container">
            <Navbar title="mwangolo" />
            <main className="content-wrapper">
                <Outlet />
            </main>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default Layout;
