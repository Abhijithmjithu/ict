import React, { useState } from 'react';
import './admin.css';

function Admin() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        imageUrl: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const addProduct = () => {
        setProducts([...products, newProduct]);
        setNewProduct({ name: '', price: '', imageUrl: '', description: '' });
    };

    const removeProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    return (
        <div className="admin-container">
            <h2 className="admin-heading">Admin Page</h2>
            <div className="product-form">
                <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                />
                <input
                    type="text"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    placeholder="Product Price"
                />
                <input
                    type="text"
                    name="imageUrl"
                    value={newProduct.imageUrl}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                />
                <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    placeholder="Product Description"
                />
                <button onClick={addProduct} className="admin-button">Add Product</button>
            </div>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <p>{product.description}</p>
                        </div>
                        <button onClick={() => removeProduct(index)} className="admin-button remove-button">Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
