import React, { useState } from 'react';
import './wishlist.css';
import removeicon from './removeicon.png'

const mockWishlistData = [
    {
        id: 1,
        image: 'https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14986.jpg',
        brand: 'Brand A',
        description: 'Blue checkered shirt for casual wear.',
        price: 49.99,
    },
    {
        id: 2,
        image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4917.jpg',
        brand: 'Brand B',
        description: 'Red checkered shirt for casual wear.',
        price: 29.99,
    },
];

function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState(mockWishlistData);

    const handleRemoveFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <div className="wishlist-container">
            <h2>Wishlist</h2>
            <div className="wishlist-grid">
                {wishlistItems.map(item => (
                    <div key={item.id} className="wishlist-item">
                        <img src={item.image} alt={item.brand} className="wishlist-item-image" />
                        <div className="wishlist-item-details">
                            <h3>{item.brand}</h3>
                            <p>{item.description}</p>
                            <p className="wishlist-item-price">${item.price.toFixed(2)}</p>
                            <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove<img src={removeicon} className='iconStyle' alt="" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
