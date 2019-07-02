import React from "react";
//import CalendarLarge from "../Components/Calendar/CalendarLarge";
import { Page } from "../Components/Containers";
import { CardView } from "../Components/Containers";
import Calendar from '../Components/Calendar/Calendar'

function Events() {
  return (
    <Page>
      <CardView>
        <div
          style={{
            height: "50vh",
            minHeight: "400px",
            width: "70vw",
          }}
        >
          <Calendar />
        </div>
      </CardView>
    </Page>
  );
}

export default Events;
