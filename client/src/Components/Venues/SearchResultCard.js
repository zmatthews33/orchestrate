import React from "react";

const SearchResultCard = ({ venue, handleClick }) => (
  <li className="searchResult">
    <h3>{venue.name}</h3>
    <p>{venue.address}</p>
    <p>{venue.phone}</p>
    <a href="{venue.website}" target="_blank">
      {venue.website}
    </a>
    <button onClick={() => handleClick()}>Add</button>
  </li>
);

export default SearchResultCard;
