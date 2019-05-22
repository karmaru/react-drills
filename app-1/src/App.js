import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor () {
  super()

  this.state = {
    text1: ''
  }
  }

  handleChange(inp) {
    this.setState({text1: inp})
  }

  render() {
    return (
      <div className="App">
        <input onChange={elem => this.handleChange(elem.target.value)}></input>
        <p>{this.state.text1}</p>
      </div>
    );
  }
}

export default App;
