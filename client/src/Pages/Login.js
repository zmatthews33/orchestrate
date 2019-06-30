import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "../Components/Containers";
import "../Styles/Login.scss";
const style = {
  border: "solid black 2px",
  padding: "1rem",
  width: "400px",
  height: "400px",
  margin: "0 auto",
  position: "relative",
  top: "35vh",
  display: "flex",
  flexDirection: "column"
};
function Login({ login }) {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    // add axios api call...
    console.log("submitted...");
  };

  return (
    <Page>
      <form className="login-form">
        <div className="login-form-group">
          <label for="email">Email:</label>
          <input type="text" placeholder="johndoe@ie.com" name="email" />
        </div>
        <div className="login-form-group">
          <label for="password">Password:</label>
          <input type="password" placeholder="Enter Password" name="password" />
        </div>

        <div className="login-form-action">
          <button className="btn-submit" type="submit">
            Sign in
          </button>
          <Link className="signup-now" to="/signup">
            Sign up for an account
          </Link>
        </div>
      </form>
    </Page>
  );
}

export default Login;
