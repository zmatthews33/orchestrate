import React, { useState, useCallback, useEffect } from "react";
// import SongKickAPI from "./SongKickAPI";
import axios from "axios";
const style = {
    border: "solid yellow 2px",
    display: "inline-block"
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
                    "&apikey=avCCBGwqkhYMC132&per_page=3"
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

    // const searchForVenue = query => {
    //     // SongKickAPI
    //     // .getVenues(query)
    //     //     .then(res => setResponse(res.data))
    //     //     .then(()=>console.log(response))
    //     //     .catch(error => console.log(error));

    //     axios.get(
    //         `https://api.songkick.com/api/3.0/search/venues.json?query=${query}&apikey=avCCBGwqkhYMC132&per_page=3`
    //     )
    //     .then(res => setResponse(res.data))
    //     .then(() => console.log(response))
    //     .catch(err => console.log(err));

    // };

    return (
        <div style={style}>
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
        </div>
    );
}
