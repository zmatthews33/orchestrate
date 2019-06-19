import "./Todos.scss";
import React, { Component } from "react";

export class Todos extends Component {
    state = {
        todos: [],
        userInput: ""
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
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="add todo..."
                    value={this.state.userInput}
                    onChange={e => this.handleInputChange(e.target.value)}
                />
                <button onClick={() => this.addTodo()}>Add</button>
            </div>
        );
    }
}

export default Todos;
