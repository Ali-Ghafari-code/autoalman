import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ part, onClose }) => {
  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <div><strong>Name:</strong>{part.name}</div>
      <div><strong>Manufacturer:</strong> {part.manufacturer}</div>
      <div><strong>Price:</strong> ${part.price}</div>
      <div><strong>Category:</strong> {part.category}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductDetails;