import React from "react";
import "./CSS/LoginSignup.css";
export const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginBox">
        <h1>Sign Up</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Name"
          className="inputs"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Email address"
          className="inputs"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="inputs"
        />
        <button>Continue</button>
        <p>
          Already have an account?
          <span>
            <a href="#">Login here</a>
          </span>
        </p>
        <div className="checkBox">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            By continuing you agree to the terms and condition
          </label>
        </div>
      </div>
    </div>
  );
};
