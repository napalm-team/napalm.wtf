"use client";

import React, { useRef, useEffect } from 'react';
import './background.css';

export default function Background({ children }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = 2;
        }
    }, []);

    return (
        <div className="background-wrapper">
            <div className="background-container">
                <video ref={videoRef} className="background-video" autoPlay muted loop>
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
