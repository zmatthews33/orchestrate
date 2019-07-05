import "./Todos.scss";
import React, { useState, useEffect, useContext } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import { AppContext } from "../../App";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [userInput, setUserInput] = useState("");
    const { userId } = useContext(AppContext);
    console.log(userId);
    useEffect(() => {
        axios
            .get("api/todo?created_by=" + userId)
            .then(response => setTodos(response.data))
            .catch(err => console.log(err));
    }, []);

    const addTodo = e => {
        e.preventDefault();

        const newTodo = {
            value: userInput,
            isCompleted: false,
            created_by: userId
        };

        // send to API
        axios.post("api/todo", newTodo).then(response => {
            setTodos([response.data, ...todos]);
            setUserInput("");
        });
    };

    const markCompleted = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })
        );

        // send to API
    };
    const deleteCompleted = values => {
        console.log("deleting this todo", values._id);
        axios
            .delete(`/api/todo/${values._id}?created_by=${userId}`)
            .then(response => {
                setTodos([
                    ...todos.filter(todo => todo._id !== response.data._id)
                ]);
            })
            .catch(err => console.log(err));
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
                    <TodoItem
                        key={todo.id}
                        values={todo}
                        markCompleted={markCompleted}
                        deleteCompleted={deleteCompleted}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
