import React, { Component } from 'react';
import logo from './GreenFox_logo.png';
import { Login } from "./components/Login";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Greenfox rlz. Zodiac rlz. Hydra team rules them all.</h2>
          <h4>This is the template site for the Poker front-end project.</h4>
        </div>
        <Login className="Login"/>
      </div>
    );
  }
}

export default App;
