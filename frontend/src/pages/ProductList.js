// src/pages/ProductList.js
import React, { useState, useEffect } from 'react';
import api from '../utils/axiosConfig'; // 수정된 axios 사용

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Available Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
