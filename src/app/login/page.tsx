"use client";
import { useState } from 'react';
import AuthLayout from '../components/authLayout/AuthLayout';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Login form submitted');
  };

  return (
    <AuthLayout title="Welcome Back">
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formOptions}>
          <div className={styles.rememberMe}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <a href="#" className={styles.forgotPassword}>
            Forgot password?
          </a>
        </div>
        <button type="submit" className={styles.loginButton}>
          Sign In
        </button>
        <div className={styles.registerLink}>
          Don't have an account? <a href="/register">Sign up</a>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;