import React, { useState, useEffect, useReducer } from "react";
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
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {  
      first_name: "",
      last_name: "",
      phone: "",
      venue: "",
      email: "",
      address: "",
      note: ""
    }
  );

  const handleInputChange = e => {
    const { value, name } = e.target;
    setUserInput({ [name]: value });
  };
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(response);
  }, [response]);
  return (
    <div id="add-new-contact">
      <form onSubmit={handleContactSubmit}>
        <div className="firstname-container">
          <label>First Name:</label>
          <input
            name="first_name"
            type="text"
            placeholder="Sherlock"
            onChange={handleInputChange}
            value={userInput.first_name}
          />
        </div>
        <div className="lastname-container">
          <label>Last Name:</label>
          <input
            name="last_name"
            type="text"
            placeholder="Holmes"
            onChange={handleInputChange}
            value={userInput.last_name}
          />
        </div>
        <div className="phone-container">
          <label>Phone:</label>
          <input
            name="phone"
            type="text"
            placeholder="###-###-####"
            onChange={handleInputChange}
            value={userInput.phone}
          />
        </div>
        <div className="venue-container">
          <label>Venue:</label>
          <input
            name="venue"
            type="text"
            placeholder="the showdown club"
            onChange={handleInputChange}
            value={userInput.venue}
          />
        </div>
        <div className="address-container">
          <label>Address:</label>
          <input
            name="address"
            type="text"
            placeholder="21 Baker Street"
            onChange={handleInputChange}
            value={userInput.address}
          />
        </div>
        <div className="email-container">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="email@email.com"
            onChange={handleInputChange}
            value={userInput.email}
          />
        </div>
        <div className="notes-container">
          <label>Notes:</label>
          <input
            name="note"
            type="text"
            placeholder="add a note"
            onChange={handleInputChange}
            value={userInput.note}
          />
        </div>
        <div className="btn-container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
