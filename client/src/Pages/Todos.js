import React from "react";
import TodoList from "../Components/TodoList/TodoList";
import { Page } from "../Components/Containers";

function Todos() {
  return (
    <Page>
      <div className="pageHeader">
        <h1>Reminders</h1>
      </div>
      <TodoList />
    </Page>
  );
}

export default Todos;
