import React from "react";
import { Intro } from "./Intro";
import Login from "./Login/Login";
import Nav from './Nav';

export class Landing extends React.Component {

  getLogin(userData) {
    if (userData.result === 'success') {
      window.sessionStorage.accessToken = userData.token;
      window.sessionStorage.userID = userData.id;
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
