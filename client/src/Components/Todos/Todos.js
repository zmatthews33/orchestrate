import "./Todos.scss";
import React, { Component } from "react";

export class Todos extends Component {
    state = {
        todos: [],
        userInput: ""
    };

    handleInputChange(value){
        this.setState({
            userInput: value
        })
    }
    render() {
        return (
        <div>
            <input type="text" placeholder="add todo..." value={this.state.userInput} onChange={(e)=> this.handleInputChange(e.target.value)} />
            <button>Add</button>
        </div>
        );
    }
}

export default Todos;
