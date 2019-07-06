import React, { useEffect, useReducer, useContext } from "react";
import { Page, Card } from "../Containers";
import Calendar from "../Calendar/Calendar";
import CalendarWeek from "../Calendar/CalendarWeek";
import Modal from "../Modal/Modal";
import EventForm from "../Calendar/Components/EventForm";
import useAPI from "../../Utils/useAPI";
import { AppContext } from "../../App";

function EventsContainer({ match, dashboard }) {
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
      setState({ events: EventData });
    }
  }, [EventData]);

  const addEvent = event => {
    const newEvents = [...State.events, event];
    setState({ events: newEvents, modalOpen: false });
  };

  const toggleModal = () => {
    setState({ modalOpen: !State.modalOpen });
  };

  useEffect(() => {
    if (match.params.eventId) {
      setState({ modalOpen: true });
    }
  }, [match]);

  let cardStyle = {
    height: "60vh",
    minHeight: "400px",
    width: "70vw"
  };

  if (dashboard) {
    cardStyle = {
      height: "40vh",
      minHeight: "300px",
      width: "70vw"
    };
  }

  return (
    <Page dashboard={dashboard}>
      {!dashboard && (
        <div className="pageHeader">
          <h1>Events</h1>
          <button className="addItem" onClick={() => toggleModal()}>
            <i className="fas fa-plus" /> Add Event
          </button>
        </div>
      )}

      <Card>
        <div style={cardStyle}>
          {!dashboard ? (
            <Calendar
              events={State.events}
              toggleModal={toggleModal}
              dashboard={dashboard}
            />
          ) : (
            <CalendarWeek
              events={State.events}
              toggleModal={toggleModal}
              dashboard={dashboard}
            />
          )}
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
              } else {
                return null;
              }
            })
          ) : (
            <EventForm toggleModal={toggleModal} addEvent={addEvent} />
          )}
        </Modal>
      )}
    </Page>
  );
}

export default EventsContainer;
