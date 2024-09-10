// src/context/LoadingContext.js
import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setIsSuccess(false); // 새로운 요청이 시작되면 성공 상태 초기화
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const showSuccess = () => {
    setIsSuccess(true); // 성공 상태 설정
  };

  return (
    <LoadingContext.Provider value={{ isLoading, isSuccess, startLoading, stopLoading, showSuccess }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
