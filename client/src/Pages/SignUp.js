import React, { useState, useReducer } from "react";
import axios from "axios";
import useAPI from "../Utils/useAPI";
import { Page } from "../Components/Containers";

function SignUp() {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            first_name: "",
            last_name: "",
            nickname: "",
            email: "",
            password: ""
        }
    );

    const handleChange = event => {
        const name = event.name;
        const newValue = event.value;

        setUserInput({ [name]: newValue });
    };
    const checkExist = (input, arr) => {
        const exists = Object.keys(arr).some(k => arr[k] === input.value);

        // evaluate if an email doesn't already exists
        exists
            ? console.log(`this ${input.name} is already being used`)
            : console.log(`this ${input.name} is available to use`);
    };
    const handleSubmit = e => {
        e.preventDefault();
        const { first_name, last_name, nickname, email, password } = e.target;

        const newUser = {
            first_name: first_name.value,
            last_name: last_name.value,
            nickname: nickname.value,
            email: [{ email: email.value }],
            password: password.value
        };
        // console.log(newUser);
        // submit new user to api call and add to user model
        axios
            .get("/api/user")
            .then(response => {
                // find in that response body if this user already exists
                const dataBaseEmails = response.data.map(
                    data => data.email[0].email
                );

                // console.log('database emails', dataBaseEmails);
                // console.log('target email', email.value);

                checkExist(email, dataBaseEmails);
            })
            .then(() =>
                axios
                    .post("api/user", newUser)
                    .then(user =>
                        console.log(user)
                    )
                    .catch(err => console.log(err))
            )
            .catch(err => console.log(err));
    };
    return (
        <Page>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="signup-form-group">
                    <label for="first_name">First Name:</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={userInput.first_name}
                        onChange={e => handleChange(e.target)}
                    />
                </div>
                <div className="signup-form-group">
                    <label for="last_name">Last Name:</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={userInput.last_name}
                        onChange={e => handleChange(e.target)}
                    />
                </div>
                <div className="signup-form-group">
                    <label for="nickname">Nickname:</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="nickname"
                        value={userInput.nickname}
                        onChange={e => handleChange(e.target)}
                    />
                </div>

                <div className="signup-form-group">
                    <label for="email">Email:</label>
                    <input
                        type="text"
                        placeholder="johndoe@ie.com"
                        name="email"
                        value={userInput.email}
                        onChange={e => handleChange(e.target)}
                    />
                </div>
                <div className="signup-form-group">
                    <label for="password">Password:</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={userInput.password}
                        onChange={e => handleChange(e.target)}
                    />
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
