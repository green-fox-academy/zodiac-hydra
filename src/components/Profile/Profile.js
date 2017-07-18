import React from 'react';
import {connect} from 'react-redux';
import Ajax from './../Ajax';

let ajax = new Ajax();
export class ProfileComp extends React.Component {

  changeAvatar() {
    let message = {
      "avatar": avatar
    }
    ajax.putData("/:id/avatar", message) {
      return new Promise((resolve, reject) => {
        fetch(this.root + "/:id/avatar", {
          method: 'PUT',
          headers: this.putHeaders,
          body: JSON.stringify(message)
        }).then(res => {
          res.json().then(data => {
            resolve(data)
          });
        });
      });
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


/*changeAvatar(e) {
  e.preventDefault();
  let message = {
    "avatar": avatar
  };
  ajax.putData('/:id/avatar', message)
    .then( (data) => {
      this.getSignUp(data)
    });
}

getSignUp(userData) {
  if (userData.result === 'success') {
    window.location.href = '/dashboard';
    alert('Changed the avatar successfully')
  } else {
    alert("ERROR")
  }
}*/
