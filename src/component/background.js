"use client";

import React from 'react';
import './background.css';

export default function Background({ children }) {
    return (
        <div className="background-wrapper">
            <div className="background-container">
                <video className="background-video" autoPlay muted loop>
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
}