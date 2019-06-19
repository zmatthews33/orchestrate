import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import './CalendarStyles/styles.scss';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: `Test Event`,
    start: Date(2019, 6, 18),
    end: Date(2019, 6, 19),
    allDay: false,
   // resource: any,
  }
]

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

const CalendarLarge = props => (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      components={{
        timeSlotWrapper: ColoredDateCellWrapper
      }}
    />
);

export default CalendarLarge;
