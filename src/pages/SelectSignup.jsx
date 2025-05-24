// src/pages/SelectSignup.jsx
import React from "react";
import { Link } from "react-router-dom";

const SelectSignup = () => {
  return (
    <div className="select-signup">
      <h2>Sign Up As</h2>
      <div className="signup-options">
        <Link to="/signup/seeker">
          <button className="btn-option">Job Seeker</button>
        </Link>
        <Link to="/signup/employer">
          <button className="btn-option">Employer</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectSignup;
