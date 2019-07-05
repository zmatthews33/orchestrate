import React, { useState, useEffect, useReducer, useContext } from "react";
import { Page } from "../Components/Containers";
import { CardView } from "../Components/Containers";
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
      <CardView>
        <div
          style={{
            height: "70vh",
            minHeight: "400px",
            width: "70vw"
          }}
        >
          <Calendar events={State.events} toggleModal={toggleModal} />
        </div>
      </CardView>
      {State.modalOpen && (
        <Modal closeModal={toggleModal}>
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
