import React, { useState, useCallback, useEffect } from "react";

// import SongKickAPI from "./SongKickAPI";
import axios from "axios";
import SearchResultCard from "./SearchResultCard";
import VenueList from "./VenueList";

export default function SearchVenue() {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState("basement");
    const [venueList, setVenueList] = useState([]);

    useEffect(() => {
        console.log(response);
    }, [response]);

    const sendRequest = useCallback(async query => {
        await axios
            .get(
                "https://api.songkick.com/api/3.0/search/venues.json?query=" +
                    query +
                    "&page=1&apikey=avCCBGwqkhYMC132&per_page=5"
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
        const {
            id,
            displayName,
            website,
            city,
            phone,
            street,
            zip
        } = response[0];

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
        setSearch("");
        // setResponse([]);
    };

    const deleteVenue = id => {
        const updatedList = venueList.filter(venue => venue.id !== id);
        setVenueList([updatedList]);
    };

    return (
        <div className="searchVenue_wrapper">
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
                    displayName,
                    website,
                    city,
                    metroArea,
                    zip,
                    street,
                    phone
                } = venue;
                const venueResult = {
                    name: displayName,
                    address: `${street}, ${city.displayName}, ${zip}, ${metroArea.country.displayName}`,
                    // address: `${street}, ${!city.displayName}, ${
                    //     city.state.displayName
                    // }, ${zip}, ${city.country.displayName}`,
                    phone: phone,
                    website: website
                };
                return (
                    <SearchResultCard
                        venue={venueResult}
                        btnType={"Add"}
                        handleClick={addVenue}
                    />
                );
            })}
            {/* output my venue list */}
            {venueList.map(venue => (
                <VenueList
                    venue={venue}
                    btnType="Delete"
                    handleClick={deleteVenue}
                />
            ))}
        </div>
    );
}
