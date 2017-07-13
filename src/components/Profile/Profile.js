import React from 'react';
import {connect} from 'react-redux';

export class ProfileComp extends React.Component {

  render() {
    let user = this.props.userInfo;
    return (
      <div>
        <p className="profile">Username: </p>
        <input defaultValue={user.username}/><br/>
        <p className="profile">E-mail: </p>
        <input type="email" defaultValue={user.email}/>
        <p className="profile">Profile picture:
        <img src={user.avatar} alt="" height="35" width="35"/>
        </p>
        <p className="profile">Chips: {user.chips}</p>
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
