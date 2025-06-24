import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './AllProductsPage.css';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {

        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching all products:", err);
        setError('Could not load our collection. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []); 

  if (loading) return <div className="status-message">Loading Our Full Collection...</div>;
  if (error) return <div className="status-message error">{error}</div>;

  return (
    <div className="all-products-page">
      <h1 className="page-title">Shop All</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-link">
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;