import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ pageTitle }) => {
    return(
        <div className="header">
            <div className="name">
                <Link to="/" className="name-link">
                    <h1>Melanie Chaffey</h1>
                </Link>
            </div>
            {pageTitle && (
                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>
            )}
        </div>
    );
};

export default Header;