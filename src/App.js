import React, { Component } from 'react';
import logo from './GreenFox_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Greenfox rlz.</h2>
          <h2>Zodiac rlz.</h2>
          <h2>Hydra team rules them all.</h2>
        </div>
        <p className="App-intro">
          This is the template site for the Poker front-end project.
        </p>
      </div>
    );
  }
}

export default App;
