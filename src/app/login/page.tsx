"use client";
import { useState } from "react";

import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login form submitted");
  };

  return (
    <div className="register-and-login">
      <div className="register-form">
        <form className="registerForm">
          <h1 className="i-dont-have">
            I don&apos;t have an account yet (register)
          </h1>
          <div className="formGroup">
            <label htmlFor="email" className="email">
              Email Address <span>*</span>
            </label>
            <input
              className="Form"
              type="email"
              id="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="formGroup">
            <label htmlFor="registeras">
              Register as <span>*</span>
            </label>
            <div className="radio-buttons">
              <input type="radio" placeholder="Private"></input>
              <label>Private</label>
            </div>
            <div className="radio-buttons">
              <input type="radio" placeholder="Business"></input>
              <label>Company</label>
            </div>
          </div>
        </form>
      </div>

      <div className="login-form">
        <form onSubmit={handleSubmit} className="loginForm">
          <h1 className="I-already-have">
            I already have an account (login)
          </h1>
          <div className="formGroup">
            <label htmlFor="email" className="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password" className="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="formOptions">
            <div className="rememberMe">
              <input
                type="checkbox"
                id="rememberMe"
                className="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="forgotPassword">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="loginButton">
            Sign In
          </button>
          <div className="registerLink">
            Don&apos;t have an account? <a href="/register">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;