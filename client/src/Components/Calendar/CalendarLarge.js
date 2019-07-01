import React from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
//import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from "moment";

import './CalendarStyles/styles.scss';

const localizer = momentLocalizer(moment);
//const allViews = Object.keys(Views).map(k => Views[k])

const events = [
  {
    title: `Test Event`,
    start: Date(2019, 6, 18),
    end: Date(2019, 6, 19),
    allDay: false,
   // resource: any,
  }
]

const CalendarLarge = props => (
    <Calendar
      localizer={localizer}
      defaultView={Views.MONTH}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
);

export default CalendarLarge;
