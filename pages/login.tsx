import { authApi } from '@/api/auth-api';
import * as React from 'react';
import { useAuth } from '../hooks';

export default function LoginPage () {

  const {profile, login, logout} = useAuth({
    revalidateOnMount: false
  })

    async function handleLoginClick() {
      try {
        await login()

        console.log('hello')
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
        await logout()
        console.log('logout');
      } catch (err) {
        console.log('Failed to logout', err);
      }
    }
  return (
    <div>
      <h1>Login Page</h1>

      <p>
        Profile: 
        {JSON.stringify(profile || {}, null, 4)}
      </p>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
