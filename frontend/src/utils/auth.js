// src/utils/auth.js
import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from '../cognitoConfig';


// src/utils/auth.js

// JWT 토큰의 만료 여부를 확인하는 함수
export const isTokenExpired = (token) => {
    if (!token) return true;
  
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000); // 현재 시간 (초 단위)
  
    // 토큰의 exp 필드를 확인해 현재 시간과 비교
    return decodedToken.exp < currentTime;
  };
  


// Refresh 토큰을 사용해 새로운 토큰을 발급하는 함수
export const refreshToken = (setNewToken) => {
  const userData = {
    Username: localStorage.getItem('username'), // 사용자 이름
    Pool: UserPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.getSession((err, session) => {
    if (err) {
      console.error('Error getting session:', err);
      return;
    }

    if (!session.isValid()) {
      cognitoUser.refreshSession(session.getRefreshToken(), (err, session) => {
        if (err) {
          console.error('Error refreshing session:', err);
          return;
        }

        const newIdToken = session.getIdToken().getJwtToken();
        localStorage.setItem('token', newIdToken); // 갱신된 토큰을 저장
        if (setNewToken) setNewToken(newIdToken); // 상태 관리용
      });
    }
  });
};
