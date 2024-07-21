"use client";

import React, { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');
    const [hoverLink, setHoverLink] = useState(null);

    useEffect(() => {
        const path = window.location.pathname;
        const link = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2);
        setActiveLink(link);
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleLinkHover = (link) => {
        setHoverLink(link);
    };

    const handleLinkLeave = () => {
        setHoverLink(null);
    };

    return (
        <div id="navbar" className="header-main show-logo-center hide-for-sticky nav-dark">
            <div className="navbar-container">
                <div className="logo-wrap">
                    <a href="#" className="logo">
                        <img src="logo.png" alt="logo" />
                    </a>
                </div>

                <div className="nav-wrap">
                    <ul className="nav">
                        {['Home', 'Status', 'Products', 'Contact'].map(link => (
                            <li
                                key={link}
                                className={`nav-item ${(hoverLink === link || (!hoverLink && activeLink === link)) ? 'active' : ''}`}
                                onMouseEnter={() => handleLinkHover(link)}
                                onMouseLeave={handleLinkLeave}
                            >
                                <a
                                    href={(link === 'Home') ? '/' : `/${link.toLowerCase()}`}
                                    className="nav-link"
                                    onClick={() => handleLinkClick(link)}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}