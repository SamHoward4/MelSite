import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Writing.css';

const Writing = () => {
    return (
        <div className="writing-container">
            <Header pageTitle="Writing" />
            <div className="writing-content">
                <div className="writing-section">
                    <h2>Sample Writing Piece</h2>
                    <p>Your writing content will go here...</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Writing; 