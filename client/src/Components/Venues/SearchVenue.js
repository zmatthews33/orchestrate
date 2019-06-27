import React, { useState, useCallback, useEffect } from "react";

// import SongKickAPI from "./SongKickAPI";
import axios from "axios";
import VenueCard from "./VenueCard";
import "./SearchVenue.scss";

export default function SearchVenue() {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState("basement");
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
            {response.map(venue => (
                <VenueCard
                    id={venue.id}
                    name={venue.displayName}
                    address={`${venue.street}, ${venue.city.displayName}, ${
                        venue.city.state.displayName
                    }, ${venue.zip}`}
                    phone={venue.phone}
                    website={venue.website}
                    btnType={"Add"}
                    btnFunction={addVenue}
                />
            ))}
            {/* output current list */}
            {venueList.length ? (
                venueList.map(venue => (
                    <VenueCard
                        id={venue.id}
                        name={venue.name}
                        address={venue.address}
                        phone={venue.phone}
                        website={venue.website}
                        btnType={venue.length ? "Delete" : null}
                        btnFunction={deleteVenue}
                    />
                ))
            ) : (
                <p>Add some bands to your list</p>
            )}
        </div>
    );
}
