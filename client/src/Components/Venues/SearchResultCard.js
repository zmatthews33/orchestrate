import React from "react";
export default function SearchResultCard({ venue, btnType, handleClick }) {
    return (
        <div
            key={venue.id}
            className="searchResult_"
        >
            
            <ul className="searchResult_list">
                <li className="searchResult_list_item">{venue.name}</li>
                <li className="searchResult_list_item">{venue.address}</li>
                <li className="searchResult_list_item">{venue.phone}</li>
                <li className="searchResult_list_item">{venue.website}</li>
            </ul>
            <button value={venue.id} onClick={handleClick}>
                {btnType}
            </button>
        </div>
    );
}
