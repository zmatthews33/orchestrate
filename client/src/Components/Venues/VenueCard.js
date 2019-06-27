import React from "react";
import "./VenueCard.scss";
export default function VenueCard({ id, name, address, phone, website, btnType, btnFunction }) {
    return (
    <div key={id} id={`venue_${id}`} className="venueCard">
        <ul className="venueCard_list">
            <li className="venueCard_list_item">{name}</li>
            <li className="venueCard_list_item">{address}</li>
            <li className="venueCard_list_item">{phone}</li>
            <li className="venueCard_list_item">{website}</li>
        </ul>
        <button id={id} value={id} onClick={(e) => btnFunction(e.target.id)}>{btnType}</button>

    </div>
    );
}
