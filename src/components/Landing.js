import React from "react";
import { Intro } from "./Intro";
import { Login } from "./Login";
import Nav from './Nav';
var ajax = require('./Ajax.js');

export class Landing extends React.Component {

  getLogin(userData) {
    if (userData.result === 'success') {
      ajax.getTables();
      ajax.getLeaderBoard();
      window.location.href = '/dashboard'
    } else {
      alert("ERROR")
    }
  }

  render() {
    return (
      <div className="landing">
        <Nav/>
        <Intro/>
        <Login getLogin={this.getLogin}/>
      </div>
    );
  }
}

export default Landing;
