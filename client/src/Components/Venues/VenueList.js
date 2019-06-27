import React from 'react'

export default function VenueList({venue, btnType, handleClick}) {
    return (
        <div className="venueList_">
            <ul className="venueList_item">
                <li>{venue.name}</li>
                <li>{venue.address}</li>
                <li>{venue.phone}</li>
                <li>{venue.website}</li>
            </ul>
            <button value={venue.id} onClick={handleClick}>{btnType}</button>
        </div>
    )
}
