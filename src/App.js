
import React, { Component } from 'react';

import Nav from './components/Nav';
import { Landing } from "./components/Landing";

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <Landing/>
      </div>
    );
  }
}

export default App;
