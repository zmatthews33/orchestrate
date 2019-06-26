import React, { useState } from "react";
import { Page } from "../Components/Containers/LayoutsElements";

function AddArtist() {
  return (
    <Page>
      <h1>Add Artist</h1>
      <div className="radio">
        <label for="artist">
          <input type="radio" name="artist_type" value="Artist" />
          Solo Artist
        </label>
      </div>
      <div className="radio">
        <label for="band">
          <input type="radio" name="artist_type" value="Band" />
          Band
        </label>
      </div>
      <form className="artist-form">
        <div className="artist-form-group">
          <label for="name">Name:</label>
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div className="artist-form-group">
          <label for="bandmembers">Band Members (if applicable):</label>
          <br />
          <input type="text" placeholder="Add a Member" name="bandmembers" />
          <br />
          <input type="text" placeholder="Add a Member" name="bandmembers" />
          <br />
          <input type="text" placeholder="Add a Member" name="bandmembers" />
          <br />
          <input type="text" placeholder="Add a Member" name="bandmembers" />
          <br />
          <input type="text" placeholder="Add a Member" name="bandmembers" />
          <br />
        </div>
        <div className="artist-form-group">
          <label for="email">Email(s):</label>
          <input type="email" placeholder="johndoe@ie.com" name="email" />
        </div>
        <div className="artist-form-group">
          <label for="genre">Genre(s):</label>
          <input type="text" placeholder="Genre" name="genre" />
        </div>
        <div className="artist-form-group">
          <label for="bio">Bio:</label>
          <input type="text" placeholder="Bio" name="bio" />
        </div>
        <div className="artist-form-group">
          <label for="socials">Social Links:</label>
          <br />
          <input type="url" placeholder="Facebook" name="socials" /> <br />
          <input type="url" placeholder="Twitter" name="socials" />
          <br />
          <input type="url" placeholder="Instagram" name="socials" />
        </div>
        <div className="artist-form-group">
          <label for="photos">Photos:</label>
          <input type="file" placeholder="photos" name="photos" />
        </div>
        <div className="artist-form-action">
          <button className="btn-submit" type="submit">
            Add Artist
          </button>
        </div>
      </form>
    </Page>
  );
}

export default AddArtist;
