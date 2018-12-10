import React, { Component } from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:5000");
socket.on("newtask", () => alert("new tasks"));
export default class App extends Component {
  state = {
    task: "4454535343354",
    tasks: []
  };
  taskSubmit = () => {
    socket.emit("newtask", this.state.task);
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.taskSubmit}>sssss</button>
        <p className="App-intro" />
        <ul>
          {this.state.tasks.map(task => (
            <li>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}
