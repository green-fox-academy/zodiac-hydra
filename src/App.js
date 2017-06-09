import React, { Component } from 'react';
import logo from './hydra.png';
import { Login } from "./components/Login";
import { Welcome } from "./components/Welcome";
import { Table } from "./components/Table";

import './App.css';

class App extends Component {

  render() {
    let user = {
      name: "User",
      credit: 100,
      tables: [0, 1, 2, 3]
    };
    let loggedIn = false;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Greenfox rlz. Zodiac rlz. Hydra team rules them all.</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <h4>This is a temporary page for the Poker front-end project.</h4>
        </div>
        <div className="Container">
          <Login loggedIn={loggedIn}/>
          <Welcome user={user}/>
          <Table/>
        </div>
      </div>
    );
  }
}

export default App;
