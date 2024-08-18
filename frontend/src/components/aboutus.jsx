import React from 'react';
import './notfound.css';

function Aboutus() {
    return (
        <div className="notfound-wrapper">
            <div className="notfound-container">
                <h1 className="notfound-text">About Us</h1>
                <h2 className="notfound-text">VASTHRAM</h2>
                <a href="/home">
                    <button className="notfound-button">HOME</button>
                </a>
            </div>
        </div>
    );
}

export default Aboutus;
