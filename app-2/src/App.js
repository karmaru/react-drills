import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor () {
    super()

    this.state = {
      stuff: ['Sheets', 'Pillows', 'Blankets']
    }
  }
  render() {
        // console.log(this.state.stuff)
        let stuffs = this.state.stuff.map((elem, index) => 
        {
          console.log(<h1 key={index}>{elem}</h1>)
          return <h1 key={index}>{elem}</h1>;
        });
    return <div className="App">{stuffs}</div>;
  }
}

export default App;
