import React, { useState, useReducer } from "react";
import "./AddContact.scss";
export default function AddContact({
    name,
    phone,
    venue,
    address,
    email,
    notes,
    handleContactSubmit,
    ...props
}) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: "",
            phone: "",
            venue: "",
            address: "",
            email: "",
            note: ""
        }
    );

    const handleInputChange = e => {
        const { value, name } = e.target;
        setUserInput({ [name]: value });
        console.log(userInput);
    };
    return (
        <div id="add-new-contact">
            <form onSubmit={handleContactSubmit}>
                <div className="name-container">
                    <label>Name:</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Sherlock Holmes"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="phone-container">
                    <label>Phone:</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="###-###-####"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="venue-container">
                    <label>Venue:</label>
                    <input
                        name="venue"
                        type="text"
                        placeholder="the showdown club"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="address-container">
                    <label>Address:</label>
                    <input
                        name="address"
                        type="text"
                        placeholder="21 Baker Street"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="email-container">
                    <label>Email:</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email@email.com"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="notes-container">
                    <label>Notes:</label>
                    <input
                        name="notes"
                        type="text"
                        placeholder="add a note"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="btn-container">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}
