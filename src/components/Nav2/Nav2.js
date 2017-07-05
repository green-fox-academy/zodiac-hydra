/**
 * Created by Ylwoi on 2017-06-14.
 */
import React from 'react';
import Dialog from '../Dialog';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';

export class Nav2Comp extends React.Component {

  onLogout() {
    window.sessionStorage.accessToken = '';
    window.sessionStorage.userID = '';
  }

  alert() {
    alert('Your changes has been saved.');
    Dialog.prototype.closeDialog()
  }

  render() {
    let user = this.props.userInfo;

    return (
      <div>
        <div><Dialog header="My profile" component={Profile} callback={this.alert}/></div>
        <div className="App-header">
          <h1>Hydra Poker</h1>
          <div className="nav-container">
            <img src={user.avatar} alt="" height="35" width="35"/>
            <p>Welcome, {user.username}</p>
            <p className="vertLine">|</p>
            <p><a onClick={Dialog.prototype.showDialog}>profile</a></p>
            <p className="vertLine">|</p>
            <p><a onClick={this.onLogout} href="/">logout</a></p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo.userInfo
  }
}

let Nav2 = connect(mapStateToProps)(Nav2Comp);

export default Nav2;
