import React, {useState} from 'react'
import {Page} from '../Components/Containers/LayoutsElements'
import "../Styles/SignUp.scss";
function SignUp() {
  return (
    <Page> 
    <div className="signup-container">
        <form className="signup-form">
            <div className="signup-form-group">
                <label for="name">Name:</label>
                <input type="text" name="name" placeholder="john doe"/>
            </div>
            <div className="signup-form-group">
                <label for="email">Email:</label>
                <input type="email" name="email" placeholder="john doe"/>
            </div>
            <div className="signup-form-group">
                <label for="password">Password:</label>
                <input type="password" name="password" placeholder="*******"/>
            </div>
            <div className="signup-form-group">
                <label for="repeat-password">Repeat Password:</label>
                <input type="password" name="repeat-password" placeholder="*******"/>
            </div>
            <button>Sign Up</button>
        </form>
    </div>
    </Page>
  )
}

export default SignUp