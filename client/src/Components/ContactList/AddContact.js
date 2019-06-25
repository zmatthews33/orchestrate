import React, { useState, useReducer } from "react";
import "./AddContact.scss";
export default function AddContact({
    name,
    phone,
    venue,
    address,
    email,
    note,
    handleContactSubmit,
    ...props
}) {
    return (
        <div id="add-new-contact">
            <form onSubmit={handleContactSubmit}>
                <div className="name-container">
                    <label>Name:</label>
                    <input type="text" placeholder="Sherlock Holmes" />
                </div>
                <div className="phone-container">
                    <label>Phone:</label>
                    <input type="number" placeholder="###-###-####" />
                </div>
                <div className="venue-container">
                    <label>Venue:</label>
                    <input type="text" placeholder="the showdown club" />
                </div>
                <div className="address-container">
                    <label>Address:</label>
                    <input type="text" placeholder="21 Baker Street" />
                </div>
                <div className="email-container">
                    <label>Email:</label>
                    <input type="email" placeholder="email@email.com" />
                </div>
                <div className="notes-container">
                    <label>Notes:</label>
                    <input type="text" placeholder="add a note" />
                </div>
                <div className="btn-container">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}
