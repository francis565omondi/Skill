// src/pages/SignIn.jsx
import React from "react";

const SignIn = () => {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default SignIn;
