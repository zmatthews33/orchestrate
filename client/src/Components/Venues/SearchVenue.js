import React, { useState, useCallback, useEffect } from "react";

// import SongKickAPI from "./SongKickAPI";
import axios from "axios";
import SearchResultCard from "./SearchResultCard";
import VenueList from "./VenueList";

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
        const letters = /^[A-Za-z]+$/;

        if (searchInput.value.match(letters)) {
            sendRequest(searchInput.value);
            setSearch("");
            return;
        } else {
            alert("Please insert only letters");
            setSearch("");
        }
    };

    const addVenue = index => {
        // remember to insert our api call to the database
        const {
            id,
            displayName,
            website,
            city,
            metroArea,
            phone,
            street,
            zip
        } = response[index];

        const newVenueObj = {
            id: id.toString(),
            name: displayName,
            address: `${street}, ${city.displayName}, ${zip}, ${
                metroArea.country.displayName
            }`,
            phone: phone,
            website: website
        };
        // add validation for when user tries to add multiple venues
        setVenueList([newVenueObj, ...venueList]);
        setSearch("");
        // setResponse([]);
    };

    const deleteVenue = value => {
        console.log("deleting this venue", value);
        setVenueList([...venueList.filter(venue => venue.id !== value)]);
    };

    return [
        <div className="searchVenue_wrapper">
            <div className="searchComponent">
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
            {/* output search result */}
            {response.map((venue, index) => {
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
                    address: `${street}, ${city.displayName}, ${zip}, ${
                        metroArea.country.displayName
                    }`,
                    phone: phone,
                    website: website
                };
                return (
                    <SearchResultCard
                        key={index}
                        venue={venueResult}
                        btnType={"Add"}
                        handleClick={() => addVenue(index)}
                    />
                );
            })}
        </div>,
        <div className="venueList_wrapper">
            <header>
                <h1>Venue List:</h1>
            </header>
            {/* output my venue list */}
            <div className="all_venues">
                {venueList.map((venue, index) => (
                    <VenueList
                        key={index}
                        id={venue.id}
                        venue={venue}
                        btnType="Delete"
                        handleClick={e => deleteVenue(e.target.value)}
                    />
                ))}
            </div>
        </div>
    ];
}
