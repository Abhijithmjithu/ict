import React from 'react';
import { Link } from 'react-router-dom';
import './allproducts.css';


const mockProducts = {
    1: {
        images: [
            'https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14986.jpg'
        ],
        brand: 'Brand A',
        description: 'Blue checkered shirt for casual wear.',
        price: 49.99,
        sizes: ['S', 'M', 'L', 'XL']
    },
    2: {
        images: [
            'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4917.jpg'
        ],
        brand: 'Brand B',
        description: 'Red checkered shirt for casual wear.',
        price: 29.99,
        sizes: ['S', 'M', 'L']
    },
};

function AllProducts() {
    return (
        <div className="all-products-container">
            <h1>All Products</h1>
            <div className="products-grid">
                {Object.entries(mockProducts).map(([id, product]) => (
                    <div key={id} className="product-card">
                        <Link to={`/product/${id}`}>
                            <img className="product-image" src={product.images[0]} alt={product.description} />
                            <div className="product-details">
                                <h2>{product.brand}</h2>
                                <p>{product.description}</p>
                                <p className="price">${product.price.toFixed(2)}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProducts;
