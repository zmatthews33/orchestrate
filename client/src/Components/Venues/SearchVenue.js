import React, { useState, useCallback, useEffect } from "react";
// import SongKickAPI from "./SongKickAPI";
import axios from "axios";
const style = {
    border: "solid yellow 2px",
    display: "inline-block",
    margin: "5px",
    lineHeight: "1.5",
    height: "400px",
    width: "400px",
    padding: "1rem",
    overflow: "auto"
};

export default function SearchVenue() {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState("");
    const [venueList, setVenueList] = useState([]);

    useEffect(() => {
        console.log(response);
    }, [response]);

    const sendRequest = useCallback(async query => {
        await axios
            .get(
                "https://api.songkick.com/api/3.0/search/venues.json?query=" +
                    query +
                    "&apikey=avCCBGwqkhYMC132&per_page=1"
            )
            .then(res => {
                // destructuring that massive response object
                const {
                    data: {
                        resultsPage: {
                            results: { venue }
                        }
                    }
                } = res;
                setResponse(venue);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const { searchInput } = e.target;
        sendRequest(searchInput.value);
    };

    const addVenue = () => {
        // name: response.venue.displayName,
        // address: response.venue.street,
        // city: response.venue.city.displayName,
        // state: response.venue.city.state,
        // zip_code: response.venue.zip
        const newVenueObj = response;
        setVenueList([newVenueObj, ...venueList]);
    };

    return (
        <div>
            <h1>Search for venues</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    name="searchInput"
                    type="text"
                />
                <button type="submit">SendRequest</button>
            </form>
            {/* output search result */}
            {response.map(venue => {
                const {
                    id,
                    displayName,
                    website,
                    city,
                    zip,
                    phone,
                    description,
                    street
                } = venue;

                return (
                    <div style={style}>
                        <ul>
                            <li>Venue: {displayName}</li>
                            <li>Website: {website}</li>
                            <li>City: {city.displayName}</li>
                            <li>State: {city.state.displayName}</li>
                            <li>Country: {city.country.displayName}</li>
                            <li>Zip: {zip}</li>
                            <li>Phone: {phone}</li>
                            <li>
                                Description:{" "}
                                {!description ? "N/A" : description}
                            </li>
                            <li>Street: {street}</li>
                        </ul>
                        <button onClick={() => addVenue()}>Add</button>
                    </div>
                );
            })}
            {/* output current list */}
            {venueList.map(venue => {
                console.log(venue);

const {
    id,
    displayName,
    website,
    city,
    zip,
    phone,
    description,
    street
} = venue;

return (
    <div style={style}>
        <ul>
            <li>Venue: {displayName}</li>
            <li>Website: {website}</li>
            {/* <li>City: {city.displayName}</li> */}
            {/* <li>State: {city.state.displayName}</li> */}
            {/* <li>Country: {city.country.displayName}</li> */}
            <li>Zip: {zip}</li>
            <li>Phone: {phone}</li>
            <li>
                Description:{" "}
                {!description ? "N/A" : description}
            </li>
            <li>Street: {street}</li>
        </ul>
        <button>Delete</button>
    </div>
);
            })}
        </div>
    );
}
