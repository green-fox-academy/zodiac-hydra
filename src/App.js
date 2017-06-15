
import React, { Component } from 'react';

import { Login } from "./components/Login";
import { Intro } from "./components/Intro";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="Page-content">
        <Intro/>
        <Login/>
      </div>
    );
  }
}

export default App;
