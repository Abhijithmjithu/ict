import React from 'react';
import './navbar.css';
import vlogo from './letter-v.png';
import cartIcon from './shopping-cart.png';

function Nav() {
    return (
        <div className="container">
            <h3 className="heading"><img className="iconStyle" src={vlogo} alt="V" />ASTHRAM.com</h3>
            <div className="middle">
                <a className="nav-links" href="/home"><h5>HOME</h5></a>
                <a className="nav-links" href="/wishlist"><h5>WISHLIST</h5></a>
                <a className="nav-links" href="/about"><h5>ABOUT US</h5></a>

            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <input className="search" placeholder="search" type="text" />
                <a href="/cart" className="image-link"><img className="iconStyle" src={cartIcon} alt="cart" /></a>
                <a className="nav-links" href="/login"><h5>LOGIN</h5></a>
            </div>
        </div>
    );
}

export default Nav;