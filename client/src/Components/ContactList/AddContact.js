import React, { useReducer, useEffect } from "react";
import axios from "axios";

import "./AddContact.scss";

export default function AddContact({ userId, addArtist }) {

  const InitState = {
    name: "",
    phone: "",
    venue: "",
    address: "",
    email: "",
    note: ""
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [State, setState] = useReducer(reducer, InitState);

  useEffect(() => {
    if (userId) setState({ crearted_by: userId })
  }, [userId])

  const handleInputChange = event => {
    let { value, name } = event;
    setState({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/api/people", State)
      .then(response => AddContact(response.data))
      .catch(err => console.log(err))
  };

  return (
    <div id="add-new-contact">
      <form onSubmit={e => handleSubmit(e)}>
        <h3>Add Contact</h3>
        <div className="formGroup">
          <label>First Name:</label>
          <input
            name="first_name"
            type="text"
            placeholder="Sherlock"
            onChange={e => handleInputChange(e.target)}
            value={State.first_name}
          />
        </div>
        <div className="lastname-container">
          <label>Last Name:</label>
          <input
            name="last_name"
            type="text"
            placeholder="Holmes"
            onChange={e => handleInputChange(e.target)}
            value={State.last_name}
          />
        </div>
        <div className="phone-container">
          <label>Phone:</label>
          <input
            name="phone"
            type="text"
            placeholder="###-###-####"
            onChange={e => handleInputChange(e.target)}
            value={State.phone}
          />
        </div>
        <div className="venue-container">
          <label>Venue:</label>
          <input
            name="venue"
            type="text"
            placeholder="the showdown club"
            onChange={e => handleInputChange(e.target)}
            value={State.venue}
          />
        </div>
        <div className="address-container">
          <label>Address:</label>
          <input
            name="address"
            type="text"
            placeholder="21 Baker Street"
            onChange={e => handleInputChange(e.target)}
            value={State.address}
          />
        </div>
        <div className="email-container">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="email@email.com"
            onChange={e => handleInputChange(e.target)}
            value={State.email}
          />
        </div>
        <div className="notes-container">
          <label>Notes:</label>
          <input
            name="note"
            type="text"
            placeholder="add a note"
            onChange={e => handleInputChange(e.target)}
            value={State.note}
          />
        </div>
        <div className="formAction">
          <button>Submit</button>
        </div>
      </form>
    </div >
  );

};
