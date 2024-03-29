import React from 'react';
import {connect} from 'react-redux';

export class ProfileComp extends React.Component {

  changeAvatar(event) {
    window.sessionStorage.avatar = event.target.value
  }

  render() {
    let user = this.props.userInfo;
    console.log("USER STUFF", user);
    return (
      <div className="profileInfo">
        <p className="profile">Username: {user.username}</p>
        <p className="profile">E-mail: {user.email}</p>
        <p className="profile">Profile picture:
        <img src={user.avatar} alt="" height="35" width="35"/>
        </p>
        <label className="profile">Change your avatar:</label>
        <input className="profile" onChange={this.changeAvatar.bind(this)}></input>
        <p className="profileChips">Chips: {user.chips}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo.userInfo
  }
}

let Profile = connect(mapStateToProps)(ProfileComp);

export default Profile;

/*let user = {
   "id": user_id,
   "username": "andybendy",
   "email": "example@gmail.com",
   "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
   "chips": 3100
  };
*/
