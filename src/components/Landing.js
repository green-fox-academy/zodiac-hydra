import React from "react";
import { Intro } from "./Intro";
import { Login } from "./Login";

export class Landing extends React.Component {

  render() {
    return (
      <div className="landing">
        <Intro/>
        <Login />
      </div>
    );
  }
}

export default Landing;
