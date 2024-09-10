// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Marketplace</h1>
      <p>Buy and sell items with ease!</p>
      <Link to="/products">View Products</Link>
    </div>
  );
};

export default Home;
