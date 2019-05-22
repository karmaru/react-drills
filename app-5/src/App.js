import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9BSo_dBUZ7ucQ7zediyANebFS2wrI6gNc69wiLTxq6NrW5Ld"} />
      </div>
    );
  }
}

export default App;
