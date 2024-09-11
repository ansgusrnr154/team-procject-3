import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Navbar = () => {
  // State for each modal
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  // Handle Login modal
  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  // Handle Signup modal
  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  // Close modal on overlay click for login
  const handleLoginOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLoginModal();
    }
  };

  // Close modal on overlay click for signup
  const handleSignupOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeSignupModal();
    }
  };

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.logo}>guleummalu</Link>
        <div style={styles.buttons}>
          <button style={styles.button} onClick={openLoginModal}>Login</button>
          <button style={styles.button} onClick={openSignupModal}>Sign Up</button>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div style={styles.modal} onClick={handleLoginOverlayClick}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeLoginModal}>X</button>
            <Login />
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div style={styles.modal} onClick={handleSignupOverlayClick}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeSignupModal}>X</button>
            <Signup />
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  navbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    position: 'absolute',
    top: '0',
    left: '0',
    height: '60px',
    backgroundColor: '#fff'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
    cursor: 'pointer',
  },
  buttons: {
    display: 'flex',
    gap: '15px'
  },
  button: {
    fontSize: '14px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '1px solid black',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    textAlign: 'center',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  }
};

export default Navbar;
