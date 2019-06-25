import "./Todos.scss";
import React, { useState } from "react";
import TodoItem from './TodoItem'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  const addTodo = e => {
    e.preventDefault()

    const newTodo = {
      id: Math.random() + 1,
      value: userInput,
      completed: false
    };

    setUserInput("");
    setTodos([newTodo, ...todos]);
    // send to API
  };

  const markCompleted = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );

    // send to API

  };

  return (
    <div className="todos">
      <form className="todos-form">
        <input
          className="todos-input"
          type="text"
          placeholder="add todo..."
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
        />
        <button className="todos-add" onClick={e => addTodo(e)}>
          Add
        </button>
      </form>

      <ul className="todos-list-group">
        {todos.map(todo => (
          <TodoItem key={todo.id} values={todo} markCompleted={markCompleted} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;