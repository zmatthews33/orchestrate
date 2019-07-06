import React from "react";
import TodoList from "../Components/TodoList/TodoList";
import EventsContainer from '../Components/Events/EventsContainer'
import ArtistsContainer from '../Components/Artists/ArtistsContainer'

function Home({match}) {
  return (
    <div className="dashboardPage">
      <div className="topFeature">
        <EventsContainer match={match} dashboard={true} />
      </div>
      <div className="lowerFeatures">
        <div className="lowerLeft">
          <ArtistsContainer dashboard={true} />
        </div>
        <div className="lowerRight">
          <TodoList dashboard={true} />
        </div>
      </div>
    </div>
  );
}

export default Home;
