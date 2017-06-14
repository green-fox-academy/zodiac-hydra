/**
 * Created by Ylwoi on 2017-06-14.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h1>Hydra Poker</h1>
        <button className="signupButton">
          <Link to="/lead">Sign UP</Link>
        </button>
      </div>

    )
  }
}

export default Nav;
