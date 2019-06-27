import React, { useState, useCallback, useEffect } from "react";
// import SongKickAPI from "./SongKickAPI";
import axios from "axios";
const style = {
    border: "solid yellow 2px",
    display: "inline-block",
    margin: "5px"
};

export default function SearchVenue() {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState("");

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

    return (
        <div>
            <h1>Search for venues</h1>
            <form onSubmit={handleSubmit} style={style}>
                <input
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    name="searchInput"
                    type="text"
                />
                <button type="submit">SendRequest</button>
            </form>

            <ul style={style}>
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
                        <ul>
                            <li>{displayName}</li>
                            <li>{website}</li>
                            <li>{city.displayName}</li>
                            <li>{city.state.displayName}</li>
                            <li>{city.country.displayName}</li>
                            <li>{zip}</li>
                            <li>{phone}</li>
                            <li>{description}</li>
                            <li>{street}</li>
                        </ul>
                    );
                })}
            </ul>
        </div>
    );
}
