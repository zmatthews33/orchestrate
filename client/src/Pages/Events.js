import React from "react";
import { Page } from "../Components/Containers";
import EventsContainer from '../Components/Events/EventsContainer'

function Events({ match }) {
  return (
    <EventsContainer match={match} dashboard={false} />
  );
}

export default Events;
