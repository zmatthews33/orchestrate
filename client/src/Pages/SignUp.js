import React, { useReducer } from "react";
import { registerUser } from "../Utils/authActions";
import { Logo } from "../Assets/Logo";

function SignUp() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      first_name: "",
      last_name: "",
      nickname: "",
      email: "",
      password: "",
      password2: ""
    }
  );

  const handleChange = event => {
    const name = event.name;
    const newValue = event.value;
    setUserInput({ [name]: newValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, email, password, password2 } = e.target;

    const newUser = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
      password2: password2.value
    };

    registerUser(newUser);
  };

  return (
    <div className="loginPage">
      <div className="loginFormContainer">
        <div className="logoContainer">
          <Logo />
        </div>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="loginFormGroup">
            <label htmlFor="email">
              <h3>Email</h3>
            </label>
            <input
              type="text"
              placeholder="johndoe@ie.com"
              name="email"
              value={userInput.email}
              onChange={e => handleChange(e.target)}
            />
          </div>
          <div className="loginFormGroup">
            <label htmlFor="password">
              <h3>Password</h3>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={userInput.password}
              onChange={e => handleChange(e.target)}
            />
          </div>
          <div className="loginFormGroup">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password2"
              value={userInput.password2}
              onChange={e => handleChange(e.target)}
            />
          </div>
          <div className="loginFormAction">
            <button className="btn-submit" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
