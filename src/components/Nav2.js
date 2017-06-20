/**
 * Created by Ylwoi on 2017-06-14.
 */
import React from 'react';

export class Nav2 extends React.Component {

  deleteToken() {
    window.sessionStorage.accessToken = '';
  }

  render() {
    let user = this.props.user;

    return (
      <div className="App-header">
        <h1>Hydra Poker</h1>
        <div className="container">
          <img src={user.avatar} alt="" height="35" width="35"/>
          <p>Welcome, {user.username}</p>
          <p className="vertLine">|</p>
          <p><a href="http://www.index.hu/">profile</a></p>
          <p className="vertLine">|</p>
          <p><a onClick={this.deleteToken} href="/">logout</a></p>
        </div>
      </div>

    )
  }
}

export default Nav2;
