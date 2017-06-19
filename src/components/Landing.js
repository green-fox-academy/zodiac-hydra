import React from "react";
import { Intro } from "./Intro";
import { Login } from "./Login";

export class Landing extends React.Component {

  getLogin(userData) {
    if (userData.result === 'success') {
      window.location.href = '/dashboard'
    } else {
      alert("ERROR")
    }
  }

  render() {
    return (
      <div className="landing">
        <Intro/>
        <Login getLogin={this.getLogin}/>
      </div>
    );
  }
}

export default Landing;
