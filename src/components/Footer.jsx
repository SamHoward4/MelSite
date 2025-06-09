import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <nav className = 'navbar'>
            <div className="footer-links">
                <Link to="/moving-images">
                    <button>
                        <span>MOVING IMAGES</span>
                    </button>
                </Link>
                <div className='circle'></div>
                <Link to="/still-images">
                    <button>
                        <span>STILL IMAGES</span>
                    </button>
                </Link>
                <div className='circle'></div>
                <Link to="/writing">
                    <button>
                        <span>WRITING</span>
                    </button>
                </Link>
                <div className='circle'></div>
                <Link to="/about">
                    <button>
                        <span>ABOUT</span>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Footer;