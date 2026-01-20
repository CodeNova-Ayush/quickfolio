import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Yadav Milk</h3>
                    <p>Pure and organic milk delivered fresh to your doorstep every day. Committed to quality and health.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul className="contact-list">
                        <li><Phone size={16} /> <span>+91 8008959608</span></li>
                        <li><Mail size={16} /> <span>contact@yadavmilk.site</span></li>
                        <li><MapPin size={16} /> <span>Local Dairy Farm, City</span></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Yadav Milk. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
