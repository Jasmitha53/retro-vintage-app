

import React from 'react';
import './ProductCard.css'; 
const ProductCard = ({ product }) => {

  if (!product) {
    return null;
  }

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
       
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;