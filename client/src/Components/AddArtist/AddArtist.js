import React, { useState, useReducer } from "react";

export default function AddArtist({
  artist_type,
  name,
  band_members,
  email,
  phone,
  genre,
  bio,
  socials,
  photos,
  handleArtistSubmit,
  ...props
}) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      artist_type: "",
      name: "",
      band_members: "",
      email: "",
      phone: "",
      genre: "",
      bio: "",
      socials: "",
      photos: ""
    }
  );

  const handleInputChange = e => {
    const { value, name } = e.target;
    setUserInput({ [name]: value });
  };
  return (
    <div id="add-new-artist">
      <h1>Add Artist</h1>
      <div className="radio">
        <label>
          <input
            type="radio"
            name="artist_type"
            value="Artist"
            onChange={handleInputChange}
          />
          Solo Artist
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            name="artist_type"
            value="Band"
            onChange={handleInputChange}
          />
          Band
        </label>
      </div>
      <form className="artist-form">
        <div className="artist-form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
            value={userInput.name}
          />
        </div>
        <div className="artist-form-group">
          <label>Band Members (if applicable):</label>
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_members"
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_members"
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_members"
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_members"
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_members"
            onChange={handleInputChange}
          />
          <br />
        </div>
        <div className="artist-form-group">
          <label>Email(s):</label>
          <input
            type="email"
            placeholder="johndoe@ie.com"
            name="email"
            onChange={handleInputChange}
            value={userInput.email}
          />
        </div>
        <div className="artist-form-group">
          <label>Phone:</label>
          <input
            name="phone"
            type="text"
            placeholder="555-555-5555"
            onChange={handleInputChange}
            value={userInput.phone}
          />
        </div>
        <div className="address-container">
          <label>Address:</label>
          <input
            name="address"
            type="text"
            placeholder="123 Sesame St."
            onChange={handleInputChange}
            value={userInput.address}
          />
        </div>
        <div className="artist-form-group">
          <label>Genre(s):</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleInputChange}
            value={userInput.genre}
          />
        </div>
        <div className="artist-form-group">
          <label>Bio:</label>
          <input
            type="text"
            placeholder="Bio"
            name="bio"
            onChange={handleInputChange}
            value={userInput.bio}
          />
        </div>
        <div className="artist-form-group">
          <label>Social Links:</label>
          <br />
          <input
            type="url"
            placeholder="Facebook"
            name="socials"
            onChange={handleInputChange}
            value={userInput.socials}
          />{" "}
          <br />
          <input
            type="url"
            placeholder="Twitter"
            name="socials"
            onChange={handleInputChange}
            value={userInput.socials}
          />
          <br />
          <input
            type="url"
            placeholder="Instagram"
            name="socials"
            onChange={handleInputChange}
            value={userInput.socials}
          />
        </div>
        <div className="artist-form-group">
          <label>Photos:</label>
          <input
            type="file"
            placeholder="photos"
            name="photos"
            onChange={handleInputChange}
            value={userInput.photos}
          />
        </div>
        <div className="artist-form-action">
          <button className="btn-submit" type="submit">
            Add Artist
          </button>
        </div>
      </form>
    </div>
  );
}
