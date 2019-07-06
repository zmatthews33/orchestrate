import React from "react";
import { Page } from "../Components/Containers";
import EventsContainer from '../Components/Events/EventsContainer'

function Events({ match }) {
  return (
    <Page>
      <EventsContainer match={match} dashboard={false} />
    </Page>
  );
}

export default Events;
