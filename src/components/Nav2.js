/**
 * Created by Ylwoi on 2017-06-14.
 */
import React from 'react';

export class Nav2 extends React.Component {

  onLogout() {
    window.sessionStorage.accessToken = '';
    window.sessionStorage.userID = '';
  }

  render() {
    let user = this.props.user;
    console.log(user);

    return (
      <div className="App-header">
        <h1>Hydra Poker</h1>
        <div className="nav-container">
          <img src={user.avatar} alt="" height="35" width="35"/>
          <p>Welcome, {user.username}</p>
          <p className="vertLine">|</p>
          <p><a href="http://www.index.hu/">profile</a></p>
          <p className="vertLine">|</p>
          <p><a onClick={this.onLogout} href="/">logout</a></p>
        </div>
      </div>
    )
  }
}

export default Nav2;
