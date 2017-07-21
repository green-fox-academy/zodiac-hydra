/**
 * Created by Ylwoi on 2017-06-15.
 */
import React from 'react';
import Nav from './Nav';
import Ajax from './Ajax';

let ajax = new Ajax();

export class SignUp extends React.Component {
  onSignUp(e) {
    e.preventDefault();
    console.log('authentication started...');
    let refName = this.refs.signUpName.value;
    let refEmail = this.refs.signUpEmail.value;
    let refPassword = this.refs.signUpPassword.value;
    let message = {
      "username": refName,
      "email": refEmail,
      "password": refPassword
    };
    ajax.postData('/register', message)
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
    return (
      <div>
        <Nav/>
        <form onSubmit={this.onSignUp.bind(this)} className="signUp">
          <p className="signUpTitle">SIGN UP FORM</p>
          <label className="signUpLabels">Name:</label>
          <input ref='signUpName' type="text" className="name" placeholder="for example: John Doe"/>
          <label className="signUpLabels">E-mail address:</label>
          <input ref='signUpEmail' type="email" className="text" placeholder="example@example.com" required/>
          <label className="signUpLabels">Password:</label>
          <input ref='signUpPassword' type="password" className="password" placeholder="password" required/><br/>
          <div className="signUpFooter">
            <button className="signUpButton">SIGN UP</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
