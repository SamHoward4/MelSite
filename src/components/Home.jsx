import React from 'react';
import '../styles/Home.css';
import headshot from '../assets/Mel_headshot.jpg';

const Home = () => {
    return (
        <div className="homecontainer">
            <img src={headshot} alt="Melanie Chaffey" className="headshot" />
        </div>
    );
};

export default Home;