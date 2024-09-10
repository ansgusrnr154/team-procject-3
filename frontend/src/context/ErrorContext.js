// src/context/ErrorContext.js
import React, { createContext, useState } from 'react';

// ErrorContext 생성
export const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  // 에러 상태를 업데이트하는 함수
  const showError = (message) => {
    setError(message);
  };

  // 에러 상태를 초기화하는 함수
  const clearError = () => {
    setError(null);
  };

  return (
    <ErrorContext.Provider value={{ error, showError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
