import React, { Component } from 'react';
import { Login } from "./components/Login";
import { Intro } from "./components/Intro";
import { Tables } from "./components/Tables";
import { Leaderboard } from "./components/Leaderboard";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Hydra Poker</h1>
          <button className="signupButton">SIGN UP</button>
        </div>
        <div className="Page-content">
          <div>
            <Intro/>
            <Login/>
          </div>
          <div>
            <Tables/>
            <Leaderboard/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
