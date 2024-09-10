// src/components/GlobalErrorMessage.js
import React, { useContext } from 'react';
import { ErrorContext } from '../context/ErrorContext';

const GlobalErrorMessage = () => {
  const { error, clearError } = useContext(ErrorContext);

  if (!error) return null; // 에러가 없으면 아무것도 표시하지 않음

  return (
    <div style={styles.errorContainer}>
      <p style={styles.errorMessage}>{error}</p>
      <button style={styles.closeButton} onClick={clearError}>
        Close
      </button>
    </div>
  );
};

const styles = {
  errorContainer: {
    backgroundColor: '#ffcccc',
    color: 'red',
    padding: '15px',
    borderRadius: '5px',
    position: 'fixed',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    width: '80%',
    maxWidth: '500px',
    textAlign: 'center',
  },
  errorMessage: {
    margin: 0,
    fontSize: '16px',
  },
  closeButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '3px',
    marginTop: '10px',
  },
};

export default GlobalErrorMessage;
