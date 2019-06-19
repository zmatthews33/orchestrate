import React from "react";

import CalendarLarge from "../Components/Calendar/CalendarLarge";

function Calendar(props) {
  return (
    <div style={{ minHeight: 'calc(100vh - 80px)'}}>
      <h1>Calendar</h1>
      <CalendarLarge />
    </div>
  );
}

export default Calendar;
