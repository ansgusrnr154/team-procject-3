
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.heroSection}>
        <h1 style={styles.heading}>Hello! I'm Ivan.</h1>
        <h2 style={styles.subheading}>
          Designing digital product with emphasis on <span style={styles.emphasis}>visual design</span>
        </h2>
        <p style={styles.description}>
          A multidisciplinary designer harnessing the power of design to achieve online goals.
        </p>
        <Link to="/products">
          <button style={styles.viewProductsButton}>View Product List</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '50px 20px',
    minHeight: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heroSection: {
    marginTop: '150px'
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold'
  },
  subheading: {
    fontSize: '36px',
    marginTop: '20px'
  },
  emphasis: {
    color: 'gray',
    fontWeight: 'bold'
  },
  description: {
    fontSize: '18px',
    color: 'gray',
    marginTop: '10px'
  },
  viewProductsButton: {
    marginTop: '30px',
    padding: '15px 30px',
    fontSize: '16px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '30px',
    cursor: 'pointer',
    border: 'none'
  }
};

export default Home;
