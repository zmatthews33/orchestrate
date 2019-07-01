import React, { useState, useReducer, useEffect } from "react";

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
  useEffect(() => {
    console.log(name);
  }, [name]);

  const handleInputChange = event => {
    const { value, name } = event;
    setUserInput({ [name]: value });
    console.log(
      userInput.name,
      userInput.email,
      userInput.band_members,
      userInput.email,
      userInput.bio,
      userInput.photos,
      userInput.phone
    );
  };
  return (
    <div id="add-new-artist">
      <form className="artist-form">
        <h1>Add Artist</h1>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="artist_type"
              value={userInput.artist_type}
              onChange={e => handleInputChange(e.target)}
            />
            Solo Artist
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="artist_type"
              value={userInput.artist_type}
              onChange={e => handleInputChange(e.target)}
            />
            Band
          </label>
        </div>
        <div className="artist-form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={e => handleInputChange(e.target)}
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
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_members}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_members"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_members}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_members"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_members}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_members"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_members}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_members"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_members}
          />
          <br />
        </div>
        <div className="artist-form-group">
          <label>Email(s):</label>
          <input
            type="email"
            placeholder="johndoe@ie.com"
            name="email"
            onChange={e => handleInputChange(e.target)}
            value={userInput.email}
          />
        </div>
        <div className="artist-form-group">
          <label>Phone:</label>
          <input
            name="phone"
            type="text"
            placeholder="555-555-5555"
            onChange={e => handleInputChange(e.target)}
            value={userInput.phone}
          />
        </div>
        <div className="address-container">
          <label>Address:</label>
          <input
            name="address"
            type="text"
            placeholder="123 Sesame St."
            onChange={e => handleInputChange(e.target)}
            value={userInput.address}
          />
        </div>
        <div className="artist-form-group">
          <label>Genre(s):</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={e => handleInputChange(e.target)}
            value={userInput.genre}
          />
        </div>
        <div className="artist-form-group">
          <label>Bio:</label>
          <input
            type="text"
            placeholder="Bio"
            name="bio"
            onChange={e => handleInputChange(e.target)}
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
            onChange={e => handleInputChange(e.target)}
            value={userInput.socials}
          />{" "}
          <br />
          <input
            type="url"
            placeholder="Twitter"
            name="socials"
            onChange={e => handleInputChange(e.target)}
            value={userInput.socials}
          />
          <br />
          <input
            type="url"
            placeholder="Instagram"
            name="socials"
            onChange={e => handleInputChange(e.target)}
            value={userInput.socials}
          />
        </div>
        <div className="artist-form-group">
          <label>Photos:</label>
          <input
            type="file"
            placeholder="photos"
            name="photos"
            onChange={e => handleInputChange(e.target)}
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
