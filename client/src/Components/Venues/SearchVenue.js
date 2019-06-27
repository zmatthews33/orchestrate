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
        console.log(venueList);
    }, [venueList]);

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
        // const newVenueObj = response;
        // setVenueList([newVenueObj, ...venueList]);
        const {
            id,
            displayName,
            website,
            city,
            phone,
            street,
            zip
        } = response[0];
        // console.log(displayName, website, city, phone, street, zip);

        const newVenueObj = {
            id: id.toString(),
            name: displayName,
            address: `${street}, ${city.displayName}, ${
                city.state.displayName
            }, ${zip}`,
            phone: phone,
            website: website
        };
        // add validation for when user tries to add multiple venues
        setVenueList([newVenueObj, ...venueList]);
    };

    const deleteVenue = id => {
        const updatedList = venueList.filter(venue => venue.id !== id);
        setVenueList([updatedList]);
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
            {venueList.length ? (
                venueList.map(venue => {
                    const { id, name, address, phone, website } = venue;

                    return (
                        <div style={style}>
                            <ul>
                                <li>Venue: {name}</li>
                                <li>Address: {address}</li>

                                <li>Phone: {phone}</li>
                                <li>Website {!website ? "N/A" : website}</li>
                            </ul>
                            <button
                                value={id}
                                onClick={e => deleteVenue(e.target.value)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })
            ) : (
                <p>add venues to your list</p>
            )}
        </div>
    );
}
