import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Styles/index.scss";

function Calendar(props) {
  const [DateContext, setDateContext] = useState(moment());
  const [View, setView] = useState("month");
  
  const Month = DateContext.format("MMMM");
  const Year = DateContext.format("Y")
  //const Weekdays = moment.weekdays();
  const WeekdaysShort = moment.weekdaysShort();
  const DaysInMonth = DateContext.daysInMonth();
  const CurrentDate = DateContext.get("date");
  // const currentDay = DateContext.format("D");

  const updateMonth = dir => {
    let monthNum = DateContext.month();
    if (dir === "inc") {
      setDateContext(moment(DateContext).set("month", monthNum + 1));
    } else if (dir === "dec") {
      setDateContext(moment(DateContext).set("month", monthNum - 1));
    } else {
      setDateContext(moment());
    }
  };

  const firstDayOfTheMonth = moment(DateContext)
    .startOf("month")
    .format("d");

  const blanks = [];
  for (let i = 0; i < firstDayOfTheMonth; i++) {
    blanks.push(<div key={`blank${i}`} className="empty" />);
  }

  const calendarDays = [];
  for (let d = 1; d <= DaysInMonth; d++) {
    let myClass = d === CurrentDate ? "day currentDay" : "day";
    calendarDays.push(
      <div key={d} className={myClass}>
        <span>{d}</span>
      </div>
    );
  }

  const totalSlots = [...blanks, ...calendarDays];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i === 0 || i % 7 !== 0) {
      // if it's not the 7th, add to cells array
      cells.push(row);
    } else {
      // if it's the seventh, create a newRow from the current cells
      // and push it to rows
      let newRow = cells.slice();
      rows.push(newRow);
      // clear out cells & add this cell to the next row
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      // if it's the last row, check to see if there are empty spots left
      const blanksToFill = 7 - cells.length;

      for (let i = 0; i < blanksToFill; i++) {
        cells.push(<div key={`blankEnd${i}`} className="empty" />);
      }

      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  });

  let rowDivs = rows.map((d, i) => {
    return (
      <div key={i * 100} className="calendarRow">
        {d}
      </div>
    );
  });

  return (
    <div className="calendar">
      <div className="calendarNavigation">
        <div>
          <button onClick={() => updateMonth("dec")}>Previous</button>
          <button onClick={() => updateMonth("cur")}>Current</button>
          <button onClick={() => updateMonth("inc")}>Next</button>
        </div>
        <h2>{Month} {Year}</h2>
        <div>
          <button onClick={() => setView('month')}>Month</button>
          <button onClick={() => setView('week')}>Week</button>
          <button onClick={() => setView('day')}>Day</button>
        </div>
      </div>

      <div className="calendarHeader">
        {WeekdaysShort.map(day => (
          <div key={day} className="weekDays">
            {day}
          </div>
        ))}
      </div>
      <div className="calendarDays">{rowDivs}</div>
    </div>
  );
}

export default Calendar;
