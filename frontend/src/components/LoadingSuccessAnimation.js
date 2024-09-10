// src/components/LoadingSuccessAnimation.js
import React, { useState, useEffect } from 'react';

const LoadingSuccessAnimation = ({ isLoading, isSuccess }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      // 3초 후에 성공 애니메이션을 숨김
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <>
      {isLoading && (
        <div style={styles.spinnerContainer}>
          <div style={styles.spinner}></div>
        </div>
      )}
      {showSuccess && (
        <div style={styles.successContainer}>
          <div style={styles.checkmark}></div>
          <p style={styles.successMessage}>Success!</p>
        </div>
      )}
    </>
  );
};

const styles = {
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 999,
  },
  spinner: {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    borderTop: '4px solid #3498db',
    animation: 'spin 1s linear infinite',
  },
  successContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1000,
    flexDirection: 'column',
  },
  checkmark: {
    width: '50px',
    height: '50px',
    border: '5px solid #28a745',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '50px',
    textAlign: 'center',
    animation: 'pop 0.3s ease-out forwards',
  },
  successMessage: {
    marginTop: '10px',
    color: '#28a745',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  '@keyframes pop': {
    '0%': { transform: 'scale(0.8)' },
    '100%': { transform: 'scale(1)' },
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default LoadingSuccessAnimation;
