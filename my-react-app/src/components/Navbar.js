// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Create a CSS file for styling the Navbar component

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#position">Position</a>
      <a href="#news">News</a>
    </div>
  );
};

export default Navbar;
