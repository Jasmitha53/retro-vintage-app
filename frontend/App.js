

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';        
import AllProductsPage from './pages/AllProductsPage'; 
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/shop" element={<AllProductsPage />} />
          
          <Route path="/shop/:categoryName" element={<ShopPage />} />
       
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;