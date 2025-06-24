

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; 
import './ShopPage.css';

const ShopPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/category/${categoryName}`);
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Could not load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryName]);

  const formatTitle = (name) => {
    if (!name) return '';
    return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  if (loading) return <div className="status-message">Loading Collection...</div>;
  if (error) return <div className="status-message error">{error}</div>;

  return (
    <div className="shop-page">
      <h1 className="shop-page-title">{formatTitle(categoryName)}</h1>
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-link">
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="status-message">No products found in this collection.</p>
      )}
    </div>
  );
};

export default ShopPage;