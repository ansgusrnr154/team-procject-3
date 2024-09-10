// src/pages/ProductRegister.js
import React, { useState, useEffect } from 'react';
import api from '../utils/axiosConfig';
import { useHistory } from 'react-router-dom';
import { ErrorContext } from '../context/ErrorContext';

const ProductRegister = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const { showError } = useContext(ErrorContext); // 에러 메시지를 보여주는 함수
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You need to be logged in to register a product.');
      history.push('/login');
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    api.post('/products', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(response => {
      alert('Product registered successfully!');
      history.push('/products');
    })
    .catch(error => {
      showError('Failed to register the product. Please try again.');
    });
  };

  return (
    <div>
      <h1>Register New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Register Product</button>
      </form>
    </div>
  );
};

export default ProductRegister;
