import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <Header pageTitle="About" />
            <div className="about-content">
                <div className="about-section">
                    <h2>About Me</h2>
                    <p>Your about content will go here...</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About; 