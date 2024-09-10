// src/utils/axiosConfig.js
import axios from 'axios';
import { ErrorContext } from '../context/ErrorContext';
import { LoadingContext } from '../context/LoadingContext';
import React, { useContext } from 'react';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const AxiosInterceptor = () => {
  const { showError } = useContext(ErrorContext);
  const { startLoading, stopLoading, showSuccess } = useContext(LoadingContext); // 성공 상태 추가

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      startLoading(); // 로딩 시작
      return config;
    },
    (error) => {
      stopLoading(); // 로딩 종료
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      stopLoading(); // 로딩 종료
      showSuccess(); // 성공 애니메이션 트리거
      return response;
    },
    (error) => {
      stopLoading(); // 로딩 종료
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          showError('Authentication error: Please log in again.');
        } else if (status === 403) {
          showError('Authorization error: You do not have permission to access this resource.');
        } else if (status === 404) {
          showError('Resource not found.');
        } else if (status >= 500) {
          showError('Server error: Please try again later.');
        }
      } else if (error.request) {
        showError('Network error: Failed to communicate with the server.');
      } else {
        showError('An unexpected error occurred: ' + error.message);
      }
      return Promise.reject(error);
    }
  );

  return null;
};

export default AxiosInterceptor;
