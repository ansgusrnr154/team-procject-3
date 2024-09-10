// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProductList from './pages/ProductList';
import ProductRegister from './pages/ProductRegister';
import Navbar from './components/Navbar';
import GlobalErrorMessage from './components/GlobalErrorMessage';
import LoadingSuccessAnimation from './components/LoadingSuccessAnimation';
import AuthProvider from './context/AuthContext';
import ErrorProvider from './context/ErrorContext';
import LoadingProvider, { LoadingContext } from './context/LoadingContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ErrorProvider>
        <LoadingProvider>
          <Router>
            <Navbar />
            <GlobalErrorMessage />
            <LoadingContext.Consumer>
              {({ isLoading, isSuccess }) => (
                <LoadingSuccessAnimation isLoading={isLoading} isSuccess={isSuccess} />
              )}
            </LoadingContext.Consumer>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/products" component={ProductList} />
              <ProtectedRoute path="/product-register" component={ProductRegister} />
            </Switch>
          </Router>
        </LoadingProvider>
      </ErrorProvider>
    </AuthProvider>
  );
}

export default App;
