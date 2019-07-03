import React, { useState, useReducer, useEffect } from "react";

export default function AddArtist({
  artist_type,
  name,
  band_member1,
  band_member2,
  band_member3,
  band_member4,
  band_member5,
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
      band_member1: "",
      band_member2: "",
      band_member3: "",
      band_member4: "",
      band_member5: "",
      email: "",
      phone: "",
      genre: "",
      bio: "",
      socials: "",
      photos: ""
    }
  );
//   useEffect(() => {
//     console.log(name);
//   }, [name]);

  const handleInputChange = event => {
    const { value, name } = event;
    setUserInput({ [name]: value });
    // console.log(
    //   userInput.name,
    //   userInput.email,
    //   userInput.band_member1,
    //   userInput.band_member2,
    //   userInput.band_member3,
    //   userInput.band_member4,
    //   userInput.band_member5,
    //   userInput.email,
    //   userInput.bio,
    //   userInput.photos,
    //   userInput.phone
    // );
  };
  return (
    <div id="add-new-artist">
      <form onSubmit={handleArtistSubmit} className="artist-form">
        <h1>Add Artist</h1>
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
            name="band_member1"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member1}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_member2"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member2}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_member3"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member3}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_member4"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member4}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_member5"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member5}
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
