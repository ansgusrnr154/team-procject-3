// src/components/ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div style={styles.errorContainer}>
      <p style={styles.errorMessage}>{message}</p>
      {onRetry && (
        <button style={styles.retryButton} onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
};

const styles = {
  errorContainer: {
    border: '1px solid red',
    padding: '20px',
    backgroundColor: '#ffe6e6',
    borderRadius: '5px',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    fontSize: '16px',
    marginBottom: '10px',
  },
  retryButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ErrorMessage;
