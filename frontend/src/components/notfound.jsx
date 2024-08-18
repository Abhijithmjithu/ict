import React from 'react';
import './notfound.css';

function Notfound() {
    return (
        <div className="notfound-wrapper">
            <div className="notfound-container">
                <h1 className="notfound-text">404</h1>
                <h2 className="notfound-text">PAGE NOT FOUND</h2>
                <a href="/home">
                    <button className="notfound-button">HOME</button>
                </a>
            </div>
        </div>
    );
}

export default Notfound;