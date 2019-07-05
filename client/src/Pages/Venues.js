import React, { useContext, useReducer } from "react";
import { Page } from "../Components/Containers";
import SearchVenue from "../Components/Venues/SearchVenue";
import "../Styles/Venues.scss";
import { AppContext } from "../App";
import Venue from "../Components/Venues/VenueList";
import useAPI from '../Utils/useAPI'
import axios from 'axios'
import Modal from '../Components/Modal/Modal'

function Venues() {
  const { userId } = useContext(AppContext);
  const getVenues = useAPI('get', `/api/venue?created_by=${userId}`)
  const InitState = {
    venues: [],
    modalOpen: true
  };
  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };
  const [State, setState] = useReducer(reducer, InitState);

  const toggleModal = () => {
    setState({modalOpen: !State.modalOpen})
  }

  const addVenue = venue => {

    console.log(venue)

    //const newVenue = {
      //     name: displayName,
      //     phone: phone,
      //     website: website,
      //     street: street,
      //     city: city.displayName,
      //     state: metroArea.state.displayName,
      //     zip_code: zip,
      //     country: metroArea.country.displayName,
      //     capacity: capacity,
      //     created_by: userId
      //   };
    // axios
    //   .post(`/api/venue/`, venue)
    //   .then(res => {
    //     console.log(res)
    //     // add to state
    //   })
    //   .catch(err => console.log(err))
  }


  const deleteVenue = id => {
    axios
      .delete(`/api/venue/${id}`)
      .then(res => {
        console.log(res)
        // remove from state...
      })
      .catch(err => console.log(err))
  }


  return (
    <Page>
      <div className="pageHeader">
        <h1>Venues</h1>
        <button className="addItem" onClick={() => toggleModal()}>
          <i className="fas fa-plus" /> Add Venue(s)
        </button>
      </div>
      <ul className="venueList">
        {State.venues.map(venue => (
          <Venue venue={venue} />
        ))}
      </ul>
      {State.modalOpen && (
        <Modal closeModal={toggleModal} returnLink="venues">
          <SearchVenue addVenue={addVenue} />
        </Modal>
      )}
    </Page>
  );
}

export default Venues;

//<SearchVenue />
