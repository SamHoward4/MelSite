import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <Header pageTitle="About" />
            <div className="about-content">
                <h2>ABOUT</h2>
                <p>My documentary work has found me spending hours filming in a canoe, getting close-ups of cows' tongues, and collaborating with an array of fascinating people. Through my narratives, I've worked with actors through scenes require them to choke on hair, shiver in freezing Nebraska weather, and recite Shakespeare while getting screamed at. Having lived in Alaska, Colorado, several countries in South America, and now Brooklyn, I'm prepared and excited for whatever adventure my next project brings me!</p>
            </div>
            <Footer />
        </div>
    );
};

export default About; 