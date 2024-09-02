// src/components/Home.js
import React from 'react';
import './Section.css'; // Create a CSS file for styling all sections

const Home = () => {
  return (
    <div id="home" className="section">
      <h2>Home</h2>
      <div className="crypto-section">
        <h3>Crypto</h3>
        <p>Information about cryptocurrencies.</p>
      </div>
      <div className="price-section">
        <h3>Price</h3>
        <p>Information about pricing.</p>
      </div>
    </div>
  );
};

export default Home;
