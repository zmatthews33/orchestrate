import React, { useState, useCallback } from "react";
// import SongKickAPI from "./SongKickAPI";
import axios from "axios";
const style = {
    border: "solid yellow 2px",
    display: "inline-block"
};

export default function SearchVenue() {
    const [isSending, setIsSending] = useState(false);
    const [response, setResponse] = useState({});
    const [search, setSearch] = useState("");

    const sendRequest = useCallback(async (query) => {
        if (isSending) return;

        setIsSending(true);

        await axios
            .get(
                "https://api.songkick.com/api/3.0/search/venues.json?query="+query+"&apikey=avCCBGwqkhYMC132&per_page=3"
            )
            .then(res => console.log(res.data.resultsPage))
            .then(() => setIsSending)

    }, [isSending]);

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
            <form onSubmit={(e) => {e.preventDefault(); sendRequest(e.target.searchInput.value);}}>
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
