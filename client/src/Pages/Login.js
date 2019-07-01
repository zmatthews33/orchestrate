import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "../Components/Containers";
import "../Styles/Login.scss";
import { loginUser } from '../Utils/authActions';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = event => {
    const { name, value } = event;
    // console.log(name, value);

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else {
      return;
    }
  };

  const handleSubmit = e => {
		e.preventDefault();
		const { email, password } = e.target;
		const loginData = {
      email: email.value,
      password: password.value
    };
		
		loginUser(loginData)
  };

  return (
    <Page>
      <form onSubmit={e => handleSubmit(e)} className="login-form">
        <div className="login-form-group">
          <label htmlFor="email">Email:</label>
          <input
            onChange={e => handleChange(e.target)}
            type="text"
            placeholder="johndoe@ie.com"
            name="email"
            value={email}
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Password:</label>
          <input
            onChange={e => handleChange(e.target)}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
          />
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
