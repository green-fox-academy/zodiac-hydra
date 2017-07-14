import React from 'react';
import {connect} from 'react-redux';

export class ProfileComp extends React.Component {

  onOK(e) {
    e.preventDefault();
    let avatar = this.refs.avatar.value;
    let message = {
      "avatar": avatar
    };
    ajax.putData('/register', message)
      .then( (data) => {
        this.getSignUp(data)
      });
    this.refs.signUpName.value = '';
    this.refs.signUpEmail.value = '';
    this.refs.signUpPassword.value = '';

    console.log('authentication finished.')
  }

  getSignUp(userData) {
    if (userData.result === 'success') {
      window.location.href = '/';
      alert('Signed up successfully')
    } else {
      alert("ERROR")
    }
  }

  render() {
    let user = this.props.userInfo;
    console.log("USER STUFF", user);
    return (
      <div>
        <p className="profile">Username: {user.username}</p>
        <p className="profile">E-mail: {user.email}</p>
        <p className="profile">Profile picture:
        <img src={user.avatar} alt="" height="35" width="35"/>
        </p>
        <label className="profile">Change your avatar:</label>
        <input className="profile"></input>
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
