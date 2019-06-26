import React, { useState } from "react";
import { Page } from "../Components/Containers/LayoutsElements";

function AddArtist() {
  return (
    <Page>
      <h1>Add Artist</h1>
      <div className="radio">
        <label>
          <input type="radio" value="option1" checked={true} />
          Solo Artist
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option2" checked={true} />
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
          <input type="text" placeholder="Add a Member" name="bandmembers" />
        </div>
        <div className="artist-form-group">
          <label for="email">Email(s):</label>
          <input type="text" placeholder="johndoe@ie.com" name="email" />
        </div>
        <div className="artist-form-group">
          <label for="password">Genre:</label>
          <input type="password" placeholder="Enter Password" name="password" />
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
