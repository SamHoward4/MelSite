import React from 'react';
import '../styles/MovingImages.css';

const MovingImages = () => {
    return (
        <div className="moving-images-container">
            <div className="moving-images-content">
                <div className="section documentary-section">
                    <h1>DOCUMENTARY</h1>
                    <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/1SCViJJwYvY"
                            title="An Open Door Documentary"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-description">
                        <p>An Open Door is a feature-length documentary detailing the life and impact of animal rights and autism activist Temple Grandin. I was a co-producer on this project, which meant I helped conduct several of the interviews, shot many sequences featured in the movie, and was an active contributor in the editing room. It premiered at the Denver Film Festival in 2023.</p>
                    </div>
                </div>
                <div className="section narrative-section">
                    <h1>NARRATIVE</h1>
                </div>
            </div>
        </div>
    );
};

export default MovingImages; 