import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cartIcon from './shopping-cart.png';
import './description.css';

const mockProducts = {
    1: {
        images: [
            'https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14986.jpg',
            'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4917.jpg',
            'https://img.freepik.com/free-photo/portrait-handsome-smiling-model-sexy-stylish-man-dressed-red-checkered-shirt-jeans-fashion-hipster-male-posing-near-grey-studio-isolated_158538-25139.jpg'
        ],
        brand: 'Brand A',
        description: 'Blue checkered shirt for casual wear.',
        price: 49.99,
        sizes: ['S', 'M', 'L', 'XL']
    },
    2: {
        images: [
            'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4917.jpg',
            'https://img.freepik.com/free-photo/handsome-man-wearing-sunglasses-standing-grey-wall_171337-14986.jpg'
        ],
        brand: 'Brand B',
        description: 'Red checkered shirt for casual wear.',
        price: 29.99,
        sizes: ['S', 'M', 'L']
    },
};

function Description() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const product = mockProducts[id];

    useEffect(() => {
        if (!product) {
            navigate('/notfound');
        }
    }, [product, navigate]);

    if (!product) {
        return null;
    }

    const handleSizeChange = (e) => setSelectedSize(e.target.value);
    const handleQuantityChange = (e) => setQuantity(e.target.value);

    const handleAddToCart = () => {
        
        alert(`Added ${quantity} item(s) to cart.`);
    };

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
    };

    return (
        <div className="description-container">
            <div className="image-and-details">
                <div className="image-section">
                    <div className="thumbnails">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                className={`thumbnail ${index === selectedImage ? 'selected' : ''}`}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>
                    <img className="product-image" src={product.images[selectedImage]} alt="Product" />
                </div>
                <div className="details-section">
                    <h2>{product.brand}</h2>
                    <p>{product.description}</p>
                    <p className="price">${product.price.toFixed(2)}</p>
                    
                    <div className="size-selection">
                        <label htmlFor="size">Select Size:</label>
                        <select id="size" value={selectedSize} onChange={handleSizeChange}>
                            <option value="">--Select Size--</option>
                            {product.sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="quantity-selection">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>

                    <div className="actions">
                        <button className="teal" onClick={handleAddToCart}>
                            <img src={cartIcon} className='iconStyle' alt="Add to Cart" />
                            Add
                        </button>
                        <button onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;