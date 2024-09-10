// src/cognitoConfig.js
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-northeast-2_oN4ac76ji', // User Pool ID
  ClientId: '7tir3q8beugnkpq07t4ugce595' // App Client ID
};

export default new CognitoUserPool(poolData);
