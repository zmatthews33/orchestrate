import React, { useState } from "react";
import { Page } from "../Components/Containers/LayoutsElements";

function SignUp() {
  return (
    <Page>
      <form className="signup-form">
        <div className="signup-form-group">
          <label for="first_name">First Name:</label>
          <input type="text" placeholder="First Name" name="first_name" />
        </div>
        <div className="signup-form-group">
          <label for="last_name">Last Name:</label>
          <input type="text" placeholder="Last Name" name="last_name" />
        </div>
        <div className="signup-form-group">
          <label for="email">Email:</label>
          <input type="text" placeholder="johndoe@ie.com" name="email" />
        </div>
        <div className="signup-form-group">
          <label for="password">Password:</label>
          <input type="password" placeholder="Enter Password" name="password" />
        </div>
        <div className="signup-form-action">
          <button className="btn-submit" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </Page>
  );
}

export default SignUp;
