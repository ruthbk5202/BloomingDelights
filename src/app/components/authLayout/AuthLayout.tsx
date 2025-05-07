// components/AuthLayout.tsx
import React from 'react';
import styles from './AuthLayout.module.css';

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authHeader}>
        <h1 className={styles.authTitle}>Blooming Delights</h1>
        <h2 className={styles.authSubtitle}>{title}</h2>
      </div>
      <div className={styles.authFormContainer}>
        {children}
      </div>
      <div className={styles.authFooter}>
        <p>© {new Date().getFullYear()} Blooming Delights Flower Shop</p>
      </div>
    </div>
  );
};

export default AuthLayout;