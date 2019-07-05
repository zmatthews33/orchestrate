import React, { useState, useEffect, useReducer, useContext } from "react";
import { Page } from "../Components/Containers";
import { Card } from "../Components/Containers";
import Calendar from "../Components/Calendar/Calendar";
import Modal from "../Components/Modal/Modal";
import EventForm from "../Components/Calendar/Components/EventForm";
import useAPI from "../Utils/useAPI";
import { AppContext } from "../App";

function Events({ match }) {
  const { userId } = useContext(AppContext);
  const EventData = useAPI("get", `/api/event?created_by=${userId}`);

  const InitState = {
    events: [],
    modalOpen: false
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [State, setState] = useReducer(reducer, InitState);

  useEffect(() => {
    if (EventData) {
      setState({ events: EventData })
    }
  }, [EventData])

  const toggleModal = () => {
    setState({ modalOpen: !State.modalOpen });
  };

  useEffect(() => {
    if (match.params.eventId) {
      setState({ modalOpen: true });
    }
  }, [match]);

  return (
    <Page>
      <div className="pageHeader">
      <h1>Events</h1>
      <button className="addItem" onClick={(() => toggleModal())}><i className="fas fa-plus"></i> Add Event</button>
      </div>
      
      <Card>
        <div
          style={{
            height: "70vh",
            minHeight: "400px",
            width: "70vw"
          }}
        >
          <Calendar events={State.events} toggleModal={toggleModal} />
        </div>
      </Card>
      {State.modalOpen && (
        <Modal closeModal={toggleModal} returnLink="events">
          {match.params.eventId ? (
            State.events.map(event => {
              if (event._id === match.params.eventId) {
                return (
                  <div key={event._id}>
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                  </div>
                );
              }
            })
          ) : (
            <EventForm toggleModal={toggleModal} />
          )}
        </Modal>
      )}
    </Page>
  );
}

export default Events;
