
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error(`Error fetching product ${id}:`, err);
        setError('Could not find the requested product.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="status-message">Loading Product...</div>;
  if (error) return <div className="status-message error">{error}</div>;

  return (
    <div className="product-page-container">
      <div className="product-image-section">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details-section">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        
        <div className="product-specs">
          <h3>Details</h3>
          <ul>
            <li><strong>Category:</strong> {product.category}</li>
            <li><strong>Fabric:</strong> {product.fabric}</li>
            <li><strong>Color:</strong> {product.color}</li>
            <li><strong>Texture:</strong> {product.texture}</li>
          </ul>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
