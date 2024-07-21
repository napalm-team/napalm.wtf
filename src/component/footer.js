"use client";

import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Copyright 2023 - 2024 © Napalm.WTF</p>
                <p>
                    <a href="/terms" className="footer-link">Terms of Service</a> |
                    <a href="/privacy" className="footer-link"> Privacy Policy</a>
                </p>

                <img src="supported-payments.png" alt="Supported Payments" width="220" />
            </div>
        </footer>
    );
}