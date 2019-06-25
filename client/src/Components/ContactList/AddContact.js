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
    

    const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}), {name: '', phone: '', venue: '', })

    return (
        <div id="add-new-contact">
            <form onSubmit={handleContactSubmit}>
                <div class="name-container">
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="Sherlock Holmes"
                        value={form.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="phone-container">
                    <label>Phone:</label>
                    <input
                        type="number"
                        placeholder="###-###-####"
                        value={form.phone}
                        onChange={e => setForm({})}
                    />
                </div>
                <div class="venue-container">
                    <label>Venue:</label>
                    <input
                        type="text"
                        placeholder="the showdown club"
                        value={form.venue}
                        onChange={e => setForm({})}
                    />
                </div>
                <div class="address-container">
                    <label>Address:</label>
                    <input
                        type="text"
                        placeholder="21 Baker Street"
                        value={form.address}
                        onChange={e => setForm({})}
                    />
                </div>
                <div class="email-container">
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="email@email.com"
                        value={form.email}
                        onChange={e => setForm({})}
                    />
                </div>
                <div class="notes-container">
                    <label>Notes:</label>
                    <input
                        type="text"
                        placeholder="add a note"
                        value={form.notes}
                        onChange={e => setForm({})}
                    />
                </div>
                <div className="btn-container">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}
