import React from "react";
import CalendarLarge from "../Components/Calendar/CalendarLarge";
import { Page } from "../Components/Containers/LayoutsElements";

function Events() {
  return (
    <Page>
      <div
        style={{
          height: "60vh",
          minHeight: "400px",
          width: "70vw",
          position: "relative",
          display: "flex",
          alignContent: "stretch"
        }}
      >
        <CalendarLarge />
      </div>
    </Page>
  );
}

export default Events;
