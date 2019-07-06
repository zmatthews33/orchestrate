import React, { useState, useContext } from "react";
import {Page} from "../Components/Containers";
import "../Styles/Home.scss";
import {AppContext} from '../App';
import useAPI from '../Utils/useAPI'
import TodoList from "../Components/TodoList/TodoList";


function Home() {
  //const {userId} = useContext(AppContext)
  // const getEventsData = useAPI("get", `/api/event?created_by=${userId}`);
  // const getArtistsData = useAPI("get", `/api/artist?created_by=${userId}`);
  // const getReminders = useAPI("get", `/api/todo?created_by=${userId}`);
  

  return (
    <Page>
      <div className="topFeature"></div>
      <div className="lowerFeatures">
        <div className="lowerLeft"></div>
        <div className="lowerRight">
          <TodoList />
        </div>
      </div>
    </Page>
  );
}

export default Home;
