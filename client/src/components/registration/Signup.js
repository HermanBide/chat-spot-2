import React from "react";
import './Signup.css'

const Signup = () => {
  return (
    <div className="signup">
      <span className="signupTitle"></span>
      <form className="signupForm">
        <label>Username</label>
        <input
          type="text"
          className="signupInput"
          placeholder="Enter your username..."
        />
          <label>Email</label>
        <input
          type="text"
          className="signupInput"
          placeholder="Enter your email..."
        />
        <label>password</label>
        <input
          type="text"
          className="signupInput"
          placeholder="Enter your password..."
        />
        <button className="signupButton">Signup</button>
      </form>
      <button className="loginButton">Login</button>
    </div>
  );
};

export default Signup;
