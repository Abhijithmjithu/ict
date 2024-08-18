import React from 'react';
import './shipping.css';

function Shipping() {
    return (
        <div className="shipping-container">
            <h2 className="shipping-heading">Enter Your Shipping Address</h2>
            <label className="shipping-label" htmlFor="fullName">Full Name</label>
            <input className="shipping-input" type="text" placeholder="Full Name" id="fullName" aria-label="Full Name" />
            <label className="shipping-label" htmlFor="email">Email</label>
            <input className="shipping-input" type="email" placeholder="Email" id="email" aria-label="Email" />
            <label className="shipping-label" htmlFor="address">Address</label>
            <input className="shipping-input" type="text" placeholder="Address" id="address" aria-label="Address" />
            <label className="shipping-label" htmlFor="landmark">Landmark</label>
            <input className="shipping-input" type="text" placeholder="Landmark" id="landmark" aria-label="Landmark" />
            <label className="shipping-label" htmlFor="postalCode">Postal Code</label>
            <input className="shipping-input" type="text" placeholder="Postal Code" id="postalCode" aria-label="Postal Code" />
            <button className="shipping-button">PROCEED</button>
        </div>
    );
}

export default Shipping;
