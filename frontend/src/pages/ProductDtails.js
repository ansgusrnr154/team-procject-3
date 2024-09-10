// src/pages/ProductDetails.js
import React, { useState, useEffect } from 'react';
import api from '../utils/axiosConfig';
import { useParams, useHistory } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => {
        // 에러는 인터셉터에서 처리됨
      });
  }, [id]);

  const handleDelete = () => {
    api.delete(`/products/${id}`)
    .then(() => {
      alert('Product deleted successfully!');
      history.push('/products');
    })
    .catch(error => {
      // 에러는 인터셉터에서 처리됨
    });
  };

  return product ? (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductDetails;
