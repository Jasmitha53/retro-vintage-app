import React from 'react';
import './AboutPage.css'; 

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Our Story</h1>
        <p>Weaving tradition with timeless style.</p>
      </div>
      <div className="about-content">
        <p>
          "Retro-Vintage" was born from a deep-rooted passion for traditional attire and the timeless elegance it represents. In a world of fleeting trends, we wanted to create a space that celebrates the rich heritage and exquisite craftsmanship of classic clothing like the Saree, Half Saree, and more.
        </p>
        <p>
          Each piece in our collection is carefully selected for its quality, authenticity, and the story it tells. We believe that fashion is more than just clothing; it's a form of expression, a connection to our roots, and a celebration of our identity.
        </p>
        <p>
          Thank you for joining us on this journey. We hope you find something you love and cherish for years to come.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;