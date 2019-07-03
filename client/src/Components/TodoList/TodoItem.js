import React from "react";

const TodoItem = ({ values, markCompleted }) => {
  const style = values.isCompleted ? { textDecoration: "line-through" } : {};

  return (
    <li style={style} className="toDoItem">
      <span>{values.value}</span>
      <button onClick={() => markCompleted(values.id)}>O</button>
    </li>
  );
};

export default TodoItem;
