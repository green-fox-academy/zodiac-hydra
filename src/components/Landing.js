import React from "react";
import { Intro } from "./Intro";
import Login from "./Login/Login";
import Nav from './Nav';

export class Landing extends React.Component {

  render() {
    return (
      <div className="landing">
        <Nav/>
        <Intro/>
        <Login/>
      </div>
    );
  }
}

export default Landing;
