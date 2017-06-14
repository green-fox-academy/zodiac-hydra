/**
 * Created by Ylwoi on 2017-06-14.
 */
import React from 'react';
//import {Link, IndexLink} from 'react-router';
var {Link} = require('react-router-dom');

export class Nav extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h2>Hydra Poker</h2>
        <Link to="http://www.index.hu">Index</Link>
      </div>

    )
  }
}

export default Nav;