import React, { useState, useEffect } from "react";

const SearchResultCard = ({ venue, addOrRemove, exists }) => {

	const [ExistText, setExistText] = useState(false)

	useEffect(() => {
		if (exists) setExistText(true)
	}, [exists])

	const handleClick = () => {
		setExistText(!ExistText);
		addOrRemove(exists, venue);
	}

  return (
    <li className="searchResult">
      <h3>{venue.displayName}</h3>
      <p>
        {venue.street}, {venue.city.displayName}, {venue.city.state.displayName}{" "}
        {venue.zip}
      </p>
      <p>{venue.phone}</p>
      <a href="{venue.website}" target="_blank">
        {venue.website}
      </a>
      <button onClick={() => handleClick()}>
        {!ExistText ? "Add" : "Remove"}
      </button>
    </li>
  );
};

export default SearchResultCard;
