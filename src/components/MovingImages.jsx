import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/MovingImages.css';
import anOpenDoor from '../assets/AnOpenDoor.jpg';
import hudsonPoster from '../assets/HudsonPoster.jpg';
import garlicConfit from '../assets/GarlicConfit.jpg';

const MovingImages = () => {
    return (
        <div className="moving-images-container">
            <Header pageTitle="Moving Images" />
            <div className="moving-images-content">
                <div className="section documentary-section">
                    <h2>AN OPEN DOOR</h2>
                    <div className="subtitle">
                        <span>Co-Producer</span>
                        <div className="circle"></div>
                        <span>Cinematographer</span>
                        <div className="circle"></div>
                        <span>Editor</span>
                    </div>
                    <img src={anOpenDoor} alt="An Open Door Documentary" className="documentary-image" />
                    <div className="video-description">
                        <p>An Open Door is an award-winning feature documentary detailing the life and impact of animal rights and autism activist Temple Grandin. It premiered at the Denver Film Festival in 2023, and will be available for streaming August 2025.</p>
                        <div className="links">
                            <a href="https://www.youtube.com/watch?v=1SCViJJwYvY" target="_blank" rel="noopener noreferrer" className="link">See trailer here.</a>
                            <a href="https://www.templegrandindocumentary.com/" target="_blank" rel="noopener noreferrer" className="link">Learn more here.</a>
                        </div>
                    </div>
                </div>
                <div className="section narrative-section">
                    <h2>THE VOICE OF THE HUDSON</h2>
                    <div className="subtitle">
                        <span>Producer</span>
                        <div className="circle"></div>
                        <span>Cinematographer</span>
                        <div className="circle"></div>
                        <span>Editor</span>
                    </div>
                    <img src={hudsonPoster} alt="The Voice of the Hudson" className="documentary-image" />
                    <div className="video-description">
                        <p>Eight high school boys explore the depths of their physical and emotional abilities over the course of a human-powered expedition down the Hudson River, alongside a team of scientists analyzing the river's health.</p>
                        <div className="links">
                            <a href="https://www.youtube.com/watch?v=sjzUR_JZnvg" target="_blank" rel="noopener noreferrer" className="link">See trailer here.</a>
                        </div>
                    </div>
                </div>
                <div className="section narrative-section">
                    <h2>GARLIC CONFIT</h2>
                    <div className="subtitle">
                        <span>Writer</span>
                        <div className="circle"></div>
                        <span>Director</span>
                        <div className="circle"></div>
                        <span>Producer</span>
                    </div>
                    <img src={garlicConfit} alt="Garlic Confit" className="documentary-image" />
                    <div className="video-description">
                        <p>Two sisters' relationship is tested when one decides to move out.</p>
                        <br />
                        <p>Garlic Confit was my Honors Thesis project. I wrote the script, casted the actors, scouted the location, did all production design, and directed an almost entirely novice crew.</p>
                        <br />
                        <p>I won the maximum amount of funding allotted through Colorado State University Honors Program's Thesis Improvement Grant ($400). All camera equipment was provided by Barnfly Productions. Garlic Confit premiered to an audience at The Lyric theater in Fort Collins, Colorado in May 2024.</p>
                        <div className="links">
                            <a href="https://www.youtube.com/watch?v=s4XiiMBjAC8" target="_blank" rel="noopener noreferrer" className="link">Watch the movie (18 mins 30 seconds) here.</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MovingImages; 