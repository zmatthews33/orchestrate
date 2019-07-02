import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Styles/index.scss";

function Calendar({ width }) {
  const [Width, setWidth] = useState(width || "350px");
  const [CurrentMonth, setCurrentMonth] = useState(moment().month());

  const dateContext = moment();
  const today = moment();
  const showMonthPopup = false;
  const showYearPopup = false;

  const weekdays = moment.weekdays();
  const weekdaysShort = moment.weekdaysShort();
  const months = moment().month();

  const year = dateContext.format("Y");
  const month = dateContext.format("MMMM");
  const daysInMonth = dateContext.daysInMonth();
  const currentDate = dateContext.get("date");
  const currentDay = dateContext.format("D");

  const firstDayOfTheMonth = moment(dateContext)
    .startOf("month")
    .format("d");

  const blanks = [];
  for (let i = 0; i < firstDayOfTheMonth; i++) {
    blanks.push(<div key={`blank${i}`} className="empty" />);
  }

  const calendarDays = [];
  for (let d = 1; d <= daysInMonth; d++) {
    let myClass = (d === currentDate )? "day currentDay" : "day";
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
    if ((i === 0) || (i % 7 !== 0)) {
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

  console.log(rows)

  let rowDivs = rows.map((d, i) => {
    return (
      <div key={i * 100} className="calendarRow">
        {d}
      </div>
    );
  });

  return (
    <div className="calendar">
      <div className="calendarHeader">
        {weekdaysShort.map(day => (
          <div key={day} className="weekDays">
            {day}
          </div>
        ))}
      </div>
      <div className="calendarDays">
        {rowDivs}
      </div>
    </div>
  );
}

export default Calendar;
