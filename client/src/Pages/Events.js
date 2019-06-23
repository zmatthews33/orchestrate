import React from "react";
import CalendarLarge from "../Components/Calendar/CalendarLarge";

function Events() {
  return (
    <div className="pageContainer">
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
    </div>
  );
}

export default Events;
