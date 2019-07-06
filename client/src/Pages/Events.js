import React from "react";
import { Page } from "../Components/Containers";
import EventsContainer from '../Components/Events/EventsContainer'

function Events({ match }) {
  return (
    <Page>
      <EventsContainer match={match} />
    </Page>
  );
}

export default Events;
