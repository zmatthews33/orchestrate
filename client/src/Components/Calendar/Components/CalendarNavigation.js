import React from "react";

function CalendarNavigation({ month, year, updateMonth, setView}) {
  return (
    <div className="calendarNavigation">
      <div>
        <button onClick={() => updateMonth("dec")}>Previous</button>
        <button onClick={() => updateMonth("cur")}>Current</button>
        <button onClick={() => updateMonth("inc")}>Next</button>
      </div>
      <h2>
        {month} {year}
      </h2>
      <div>
        <button onClick={() => setView("month")}>Month</button>
        <button onClick={() => setView("week")}>Week</button>
        <button onClick={() => setView("day")}>Day</button>
      </div>
    </div>
  );
}

export default CalendarNavigation;
