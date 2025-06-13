import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Home.css';
import headshot from '../assets/Mel_headshot.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <Header pageTitle="Home" />
            <div className="home-content">
                <img src={headshot} alt="Melanie Chaffey" className="headshot" />
            </div>
            <Footer />
        </div>
    );
};

export default Home;