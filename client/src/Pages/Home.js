import React, { useState, useContext } from "react";
import {Page} from "../Components/Containers";
import "../Styles/Home.scss";
import TodoList from "../Components/TodoList/TodoList";
import EventsContainer from '../Components/Events/EventsContainer'


function Home({match}) {
  return (
    <Page>
      <div className="topFeature">
        <EventsContainer match={match} dashboard={true} />
      </div>
      <div className="lowerFeatures">
        <div className="lowerLeft"></div>
        <div className="lowerRight">
          <TodoList dashboard={true} />
        </div>
      </div>
    </Page>
  );
}

export default Home;
