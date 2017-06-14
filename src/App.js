
import React, { Component } from 'react';

import Nav from './components/Nav';
import { Login } from "./components/Login";
import { Intro } from "./components/Intro";
import { Tables } from "./components/Tables";
import { Leaderboard } from "./components/Leaderboard";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
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
