import React, { useState, useEffect } from "react";

import "./NewArtist.scss";
import AddArtist from "./AddArtist";
//import BandList from "../BandList/BandList";

function NewArtist() {
  const [artist, setArtist] = useState([]);
  useEffect(() => {
    console.log(artist);
  }, [artist]);
  const handleArtistSubmit = e => {
    e.preventDefault();
    const {
      artist_type,
      name,
      band_members,
      email,
      phone,
      address,
      genre,
      bio,
      socials,
      photos
    } = e.target;

    const newArtist = {
      id: Math.random() + 1,
      artist_type: artist_type.value,
      name: name.value,
      band_members: band_members.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      genre: genre.value,
      bio: bio.value,
      socials: socials.value,
      photos: photos.value
    };
    console.log(newArtist);
    setArtist([newArtist, ...artist]);
    // insert api call to add a new artist to artist list
  };

  console.log("", artist);
  return (
    <div className="artist-list">
      {/* adding new artist */}
      <AddArtist handleArtistSubmit={handleArtistSubmit} />
      {/* Reading from state */}
    </div>
  );
}

export default NewArtist;
