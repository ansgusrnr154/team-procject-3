// src/pages/Signup.js
import React, { useState } from 'react';
import UserPool from '../cognitoConfig';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error('Signup error:', err);
      } else {
        console.log('Signup successful:', data);
        setIsConfirmed(true);
      }
    });
  };

  const confirmUser = (e) => {
    e.preventDefault();
    const userData = { Username: email, Pool: UserPool };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        console.error('Confirmation error:', err);
      } else {
        console.log('Confirmation successful:', result);
        alert('Signup confirmed successfully!');
      }
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {!isConfirmed ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <form onSubmit={confirmUser}>
          <div>
            <label>Confirmation Code:</label>
            <input
              type="text"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
              required
            />
          </div>
          <button type="submit">Confirm Signup</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
