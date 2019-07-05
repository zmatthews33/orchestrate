import React from "react";

export default function VenueList({ venue, btnType, handleClick }) {
  return (
    <div className="venueList_">
      <ul className="venueList_item">
        <li>{venue.name}</li>
        <li>
          {venue.street}, {venue.city}, {venue.state}, {venue.country}
        </li>
        <li>Phone: {venue.phone}</li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href={venue.website}>
            {venue.website}
          </a>
        </li>
      </ul>
      <button value={venue.id} onClick={handleClick}>
        {btnType}
      </button>
    </div>
  );
}
