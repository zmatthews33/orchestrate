import React from "react";
import CalendarLarge from "../Components/Calendar/CalendarLarge";
import Page from "../Components/Containers/PageContainer";
import CardView from "../Components/Containers/CardView";

function Events() {
  return (
    <Page>
      <CardView>
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
      </CardView>
    </Page>
  );
}

export default Events;
