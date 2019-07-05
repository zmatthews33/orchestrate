import React from "react";

const TodoItem = ({ values, markCompleted, deleteCompleted }) => {
  const style = values.isCompleted ? { textDecoration: "line-through" } : {};

  return (
    <li style={style} className="toDoItem">
      <span>{values.value}</span>
      <button onClick={() => markCompleted(values.id)}>O</button>
      <button onClick={() => deleteCompleted(values)}>delete</button>
    </li>
  );
};

export default TodoItem;
