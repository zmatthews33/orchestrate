import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Styles/index.scss";
import CalendarNavigation from "./Components/CalenderNav/CalendarNavigation";
import CalendarHeader from "./Components/CalendarHeaders/WeekDayHeaders";
import DaySlot from './Components/DaySlot/DaySlot'




function Calendar(props) {
  const [Events, setEvents] = useState([
    {
      start_date: '20190704T0930',
      title: 'USA Party',
      description: "Yeah, it's a party",
      created_by: "5d192694fdc1f13c2001bde0"
    },
    {
      start_date: '20190601T2000',
      title: 'First',
      created_by: "5d192694fdc1f13c2001bde0"
    }
  ])

  const [DateContext, setDateContext] = useState(moment());
  const [View, setView] = useState("month");

  const Month = DateContext.format("MMMM");
  const Year = DateContext.format("Y");
  //const Weekdays = moment.weekdays();
  const WeekdaysShort = moment.weekdaysShort();
  const DaysInMonth = DateContext.daysInMonth();
  const PrevMonth = moment(DateContext).subtract(1, 'month')
  const PrevMonthDays = PrevMonth.daysInMonth();
  const NextMonth = moment(DateContext).add(1, 'month')
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
    blanks.push(<DaySlot key={`blank${i}`} classToUse="empty" data={PrevMonthDays - i} />);
  }
 

  const calendarDays = [];
  for (let d = 1; d <= DaysInMonth; d++) {
    let myClass =
      moment().format("MM YY") === DateContext.format("MM YY") &&
      d === CurrentDate
        ? "day currentDay"
        : "day";

    const DayEvents = Events.filter(ev => {
      if (moment(ev.start_date).format('YYYYMM') === DateContext.format('YYYYMM')) {
        if (parseInt(moment(ev.start_date).format('D')) === d) {
          return ev;
        }
      }
    })
    
    calendarDays.push(
      <DaySlot key={d} classToUse={myClass} data={d}>
        {DayEvents.map(event => (
          <div key={event.start_date} className="eventThumb">
            <h2>{event.title}</h2>
            <span className="time">{moment(event.start_date).format('h:mm')}</span>
          </div>
        ))}
      </DaySlot>
    );
  }

  const totalSlots = [...blanks, ...calendarDays];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i === 0 || i % 7 !== 0) {
      cells.push(row);
    } else {
      let newRow = cells.slice();
      rows.push(newRow);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      const blanksToFill = 7 - cells.length;
      for (let i = 0; i < blanksToFill; i++) {
        cells.push(<DaySlot key={`blankEnd${i}`} classToUse="empty" data={i + 1} />);
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
      <CalendarNavigation
        month={Month}
        year={Year}
        updateMonth={updateMonth}
        setView={setView}
      />
      <CalendarHeader headers={WeekdaysShort} />
      <div className="calendarDays">{rowDivs}</div>
    </div>
  );
}

export default Calendar;
