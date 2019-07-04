import React, {useState, useEffect} from "react";
import { Page } from "../Components/Containers";
import { CardView } from "../Components/Containers";
import Calendar from '../Components/Calendar/Calendar'
import Modal from '../Components/Modal/Modal'

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
    setModalOpen(!ModalOpen)
  }
  
  useEffect(() => {
    if (match.params.eventId) {
      setModalOpen(true)
    }
  }, [match])

  return (
    <Page>
      <CardView>
        <div
          style={{
            height: "70vh",
            minHeight: "400px",
            width: "70vw",
          }}
        >
          <Calendar events={events} />
        </div>
      </CardView>
      {ModalOpen && (
        <Modal closeModal={toggleModal}>
          {match.params.eventId ? (
            <span>
              <h1>Event here...</h1>
            </span>
          ) : (
            <h1>Form...</h1>
          )}
        </Modal>)}
    </Page>
  );
}

export default Events;
