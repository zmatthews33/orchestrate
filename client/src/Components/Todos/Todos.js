import "./Todos.scss";
import React, { Component } from "react";

export class Todos extends Component {
    state = {
        todos: [],
        userInput: "",
        pastTodos: []
    };

    handleInputChange(value) {
        this.setState({
            userInput: value
        });
    }

    addTodo() {
        const newTodo = {
            id: 1 + Math.random(),
            value: this.state.userInput,
            completed: false
        };

        this.setState({
            userInput: "",
            todos: [newTodo, ...this.state.todos]
        });
    }

    markCompleted(id) {
        // mark a todo as completed
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
        // deletes todo after one second and moves it to the pastTodos list
        setTimeout(() => {
            this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)],
                pastTodos: [...this.state.todos.filter(todo => todo.completed)]
            });
        }, 1000);
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="todos">
                <div className="todos-form">
                    <input
                        className="todos-input"
                        type="text"
                        placeholder="add todo..."
                        value={this.state.userInput}
                        onChange={e => this.handleInputChange(e.target.value)}
                    />
                    <button
                        className="todos-add"
                        onClick={() => this.addTodo()}
                    >
                        Add
                    </button>
                </div>
                <ul className="todos-list-group">
                    {todos.map(todo => {
                        if (todo.completed) {
                            return (
                                <li
                                    style={{ textDecoration: "line-through" }}
                                    className="todos-list-group-item"
                                    key={todo.id}
                                >
                                    <s>{todo.value}</s>
                                    <button
                                        className="todos-completed"
                                        onClick={() =>
                                            this.markCompleted(todo.id)
                                        }
                                    >
                                        ✓
                                    </button>
                                </li>
                            );
                        } else {
                            return (
                                <li
                                    className="todos-list-group-item"
                                    key={todo.id}
                                >
                                    {todo.value}
                                    <button
                                        className="todos-completed"
                                        onClick={() =>
                                            this.markCompleted(todo.id)
                                        }
                                    >
                                        ✓
                                    </button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default Todos;
