import * as React from 'react';
import { authApi } from '@/api/index';

export default function LoginPage () {

    async function handleLoginClick() {
      try {
        await authApi.login({
          username: 'test1',
          password: '123123'
        })
      } catch (err) {
        console.log('Failed to login', err);
      }
    }
    async function handleGetProfileClick() {
      try {
        await authApi.getProfile()
      } catch (err) {
        console.log('Failed to get profile', err);
      }
    }

    async function handleLogoutClick() {
      try {
        await authApi.logout()
      } catch (err) {
        console.log('Failed to logout', err);
      }
    }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
