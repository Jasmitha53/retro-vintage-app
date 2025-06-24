
import React from 'react';
import CategoryCard from '../components/CategoryCard'; 
import './HomePage.css';

const collections = [
  {
    name: "Pattu Sarees",
    imageUrl: "https://i.pinimg.com/736x/24/98/4c/24984c883c9a73e23101853269ecc5f0.jpg"
  },

    {
    name: "Cotton Sarees",
    imageUrl: "https://i.pinimg.com/736x/e3/0b/c9/e30bc93e36c68b8fad3d3131dd0949b9.jpg"
  },
  {
    name: "Half Sarees",
    imageUrl: "https://i.pinimg.com/736x/26/b4/4d/26b44d75f7719b57c6c1925ee675d5ea.jpg"
  },
  {
    name: "Dresses",
    imageUrl: "https://i.pinimg.com/736x/b0/7d/50/b07d5097ae1a12e3af69952d232036d4.jpg"
  },
  {
    name: "Tops",
    imageUrl: "https://i.pinimg.com/736x/55/f2/cf/55f2cfe66ffedd722287066c4ea497f0.jpg"
  },
  {
    name: "Frocks",
    imageUrl: "https://i.pinimg.com/736x/2d/1c/c7/2d1cc7329cd5c7ae75e6c87e4f89f617.jpg"
  },
  {
    name: "Anarkali Suits",
    imageUrl: "https://i.pinimg.com/736x/bf/62/d5/bf62d5214944cb925c81c2070baf0ee7.jpg"
  },
  {
    name: "Co-ord Sets",
    imageUrl: "https://i.pinimg.com/736x/6d/3f/ab/6d3fab542f27574f53150be98fcc4614.jpg"
  },
  {
    name: "Lehengas ",  
    imageUrl: "https://i.pinimg.com/736x/e2/e4/c4/e2e4c4b0b91edc9331467e755c331982.jpg"}
];

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>The Collection of Retro-Vintage</h1>
        <p>Discover our curated selections of timeless traditional wear.</p>
      </header>

      <section className="collections-section">
        <div className="category-grid">
          {collections.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;