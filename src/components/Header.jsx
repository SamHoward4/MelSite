import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return(
        <div className="name">
            <Link to="/" className="name-link">
                <h1>Melenie Chaffey</h1>
            </Link>
        </div>
    );
};

export default Header;