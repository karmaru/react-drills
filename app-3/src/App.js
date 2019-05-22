import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      filterIt: '',
      things: ['blankets', 'sheets', 'pillows']
    }
  }

  handleChange(filter) {
    this.setState({filterIt: filter})
  }

  render() {
    let showThings = this.state.things
    .filter((elem, index) => 
      {
        return elem.includes(this.state.filterIt)
      })
    .map((elem, index) => {
        return <h2 key={index}>{elem}</h2>
    });  
    return (
      <div className="App">
          <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {showThings}
      </div>
    );
  }
}

export default App;
