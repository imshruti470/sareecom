import React from 'react';
import '../styles/auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form className="auth-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="auth-button">Register</button>
        <p className="auth-switch">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
