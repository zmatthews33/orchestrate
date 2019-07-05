import React, { useState, useEffect } from "react";
import { Page } from "../Components/Containers";
import { CardView } from "../Components/Containers";
import Calendar from "../Components/Calendar/Calendar";
import Modal from "../Components/Modal/Modal";

function Events({ match }) {
  const [events, setEvents] = useState([
    {
      _id: "1234",
      start_date: "20190704T0930",
      title: "USA Party",
      description: "Yeah, it's a party",
      created_by: "5d192694fdc1f13c2001bde0"
    },
    {
      _id: "4321",
      start_date: "20190601T2000",
      title: "First",
      created_by: "5d192694fdc1f13c2001bde0"
    }
  ]);

  const [ModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!ModalOpen);
  };

  useEffect(() => {
    if (match.params.eventId) {
      setModalOpen(true);
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
          <Calendar events={events} />
        </div>
      </CardView>
      {ModalOpen && (
        <Modal closeModal={toggleModal}>
          {match.params.eventId ? (
            events.map(event => {
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
            <div>
              <h1>Create An Event</h1>
              <form>
                <div className="formGroup">
                  <label>Title</label>
                  <input />
                </div>
              </form>
            </div>
            
          )}
        </Modal>
      )}
    </Page>
  );
}

export default Events;
