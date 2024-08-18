import React, { useState } from 'react';
import removeicon from './removeicon.png';
import './cart.css';

const mockCartData = [
    {
        id: 1,
        image: 'https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14986.jpg',
        brand: 'Brand A',
        description: 'Blue checkered shirt for casual wear.',
        price: 49.99,
        quantity: 2,
    },
    {
        id: 2,
        image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4917.jpg',
        brand: 'Brand B',
        description: 'Red checkered shirt for casual wear.',
        price: 29.99,
        quantity: 1,
    },
];

function Cart() {
    const [cartItems, setCartItems] = useState(mockCartData);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const handleCouponChange = (e) => {
        setCoupon(e.target.value);
    };

    const handleApplyCoupon = () => {
        if (coupon === 'DISCOUNT10') {
            setDiscount(0.1);
            alert('Coupon applied successfully!');
        } else {
            alert('Invalid coupon code');
        }
    };

    const handleBuy = () => {
        alert('Proceed to buy');
    };

    const calculateTotal = () => {
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return total * (1 - discount);
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.brand} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.brand}</h3>
                                <p>{item.description}</p>
                                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                <div className="cart-item-quantity">
                                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                                    <input
                                        type="number"
                                        id={`quantity-${item.id}`}
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    />
                                    <button>Remove <img src={removeicon} className='iconStyle' alt="" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="cart-coupon">
                <input
                    type="text"
                    value={coupon}
                    className='coupon-input'
                    onChange={handleCouponChange}
                    placeholder="Enter coupon code"
                />
                <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </div>
            {cartItems.length > 0 && (
                <div className="cart-actions">
                    <h2 className='total'>Total: ${calculateTotal().toFixed(2)}</h2>
                    <button onClick={handleBuy}>Buy</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
