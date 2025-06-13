import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/StillImages.css';
import fifthAve07 from '../assets/5thave-07.jpg';
import fifthAve08 from '../assets/5thave-08.jpg';
import hudsonPier41 from '../assets/hudsonpier-41.jpg';
import hudsonPier088 from '../assets/hudsonpier-088.jpg';
import hudsonPier098 from '../assets/hudsonpier-098.jpg';
import hudsonPier112 from '../assets/hudsonpier-112.jpg';
import oct2424 from '../assets/oct-24-24.jpg';
import oct242419 from '../assets/oct-24-24-19.jpg';
import salkantay1 from '../assets/salkantay-1.jpg';
import salkantay012 from '../assets/salkantay-012.jpg';
import puntoLobos from '../assets/punto-lobos-1by1.jpg';
import oct1424118 from '../assets/oct-14-24-118.jpg';
import connecticut120 from '../assets/connecticut-120.jpg';
import connecticut158 from '../assets/connecticut-158.jpg';
import connecticut from '../assets/connecticut.jpg';

const StillImages = () => {
    return (
        <div className="still-images-container">
            <Header pageTitle="Still Images" />
            <div className="still-images-content">
                <h2 className="section-title">PORTRAITS</h2>
                <div className="image-grid">
                    <div className="side-by-side">
                        <img src={fifthAve07} alt="5th Avenue 07" className="portrait-image" />
                        <img src={fifthAve08} alt="5th Avenue 08" className="portrait-image" />
                    </div>
                    <img src={hudsonPier41} alt="Hudson Pier 41" className="single-image" />
                    <img src={hudsonPier088} alt="Hudson Pier 088" className="single-image" />
                    <img src={hudsonPier098} alt="Hudson Pier 098" className="single-image" />
                    <img src={hudsonPier112} alt="Hudson Pier 112" className="single-image" />
                </div>
                <h2 className="section-title">TRAVEL</h2>
                <div className="image-grid">
                    <div className="side-by-side">
                        <img src={oct2424} alt="October 24, 2024" className="portrait-image" />
                        <img src={oct242419} alt="October 24, 2024 19" className="portrait-image" />
                    </div>
                    <div className="side-by-side">
                        <img src={salkantay1} alt="Salkantay 1" className="portrait-image" />
                        <img src={salkantay012} alt="Salkantay 012" className="portrait-image" />
                    </div>
                    <div className="side-by-side">
                        <img src={puntoLobos} alt="Punto Lobos" className="portrait-image" />
                        <img src={oct1424118} alt="October 14, 2024 118" className="portrait-image" />
                    </div>
                    <img src={connecticut120} alt="Connecticut 120" className="single-image" />
                    <img src={connecticut158} alt="Connecticut 158" className="single-image" />
                    <img src={connecticut} alt="Connecticut" className="single-image" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StillImages; 