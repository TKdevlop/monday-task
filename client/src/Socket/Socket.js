import React, { Component } from "react";
import { subscribeToTimer } from "./api";

export default class App extends Component {
  state = {
    task: "",
    tasks: []
  };

  handleClick = () => {
    subscribeToTimer((err, task) => {
      console.log(err, task);
      this.setState(prevState => {
        return {
          task: [...prevState.tasks, task]
        };
      });
    }, this.state.task);
  };
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <input
            type="text"
            onChange={e => this.setState({ task: e.target.value })}
          />
          <button onClick={this.handleClick}>ADD task</button>
        </p>
        <ul>
          {this.state.tasks.map(task => (
            <li>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}
