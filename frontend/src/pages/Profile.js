// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from '../components/LogoutButton';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // 로그인되어 있지 않으면 리다이렉트 또는 처리
      return;
    }

    axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <LogoutButton />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
