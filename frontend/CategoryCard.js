import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
 
  const categorySlug = category.name.toLowerCase().replace(/ /g, '-');

  return (
    <Link to={`/shop/${categorySlug}`} className="category-card">
      <img src={category.imageUrl} alt={category.name} className="category-image" />
      <div className="category-name-overlay">
        <h3>{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;