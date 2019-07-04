import React, { useState, useCallback, useEffect, useContext } from "react";

import { AppContext } from "../../App";

// import SongKickAPI from "./SongKickAPI";
import axios from "axios";
import SearchResultCard from "./SearchResultCard";
import VenueList from "./VenueList";

export default function SearchVenue() {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState("");
    const [venueList, setVenueList] = useState([]);

    const { userId } = useContext(AppContext);
    console.log(userId);

    useEffect(() => {
        axios
            .get("/api/venue?created_by=" + userId)
            .then(res => setVenueList(res.data))
            .catch();
    }, []);

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
        const letters = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

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
        // destructing the object from the response state
        const {
            id,
            displayName,
            website,
            city,
            metroArea,
            phone,
            street,
            zip,
            capacity
        } = response[index];

        // creating a new object with those values
        const newVenue = {
            name: displayName,
            phone: phone,
            website: website,
            street: street,
            city: city.displayName,
            state: metroArea.state.displayName,
            zip_code: zip,
            country: metroArea.country.displayName,
            capacity: capacity,
            created_by: userId
        };
        // console.log(response[index]);
        // console.log(newVenue);

        // Evaluate if that address doesn't already exists
        const allStreets = venueList.map(venue => venue.street);
        if (allStreets.indexOf(street) === -1) {
            // api call to post venues to our database models and update the state of our application
            axios
                .post("api/venue/", newVenue)
                .then(response => setVenueList([response.data, ...venueList]));

            setSearch("");
        } else {
            alert("You've already added " + displayName);
        }
    };

    const deleteVenue = value => {
        console.log("deleting this venue", value);

        // delete from database only if that value is truthy
        if (venueList) {
            axios
                .delete("api/venue/" + value)
                .then(response =>
                    setVenueList([
                        ...venueList.filter(
                            venue => venue._id !== response.data._id
                        )
                    ])
                );
        }
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
                        venue={venue}
                        btnType="Delete"
                        handleClick={() => deleteVenue(venue._id)}
                    />
                ))}
            </div>
        </div>
    ];
}
