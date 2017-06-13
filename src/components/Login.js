import React from "react";
const ajax = require('./ajax.js');

export class Login extends React.Component {

  constructor(props) {
    super();
    this.loggedIn = props.loggedIn;
  }

  onLogin() {
    let refEmail = this.refs.email.value;
    let refPassword = this.refs.password.value;
    console.log(refEmail);
    let message = {
      "email": refEmail,
      "password": refPassword
    };
    ajax(message);
    this.loggedIn = true;
    console.log('authentication started...');
    this.render();
    console.log('authentication finished.')
  }

  render() {
    if (this.loggedIn === false) {
      return (
        <form onSubmit={this.onLogin} className="Login">
        <p>Please login or <a href="http://www.index.hu">register</a> to continue. </p>
        <input ref='loginEmail' type="email" className="text" placeholder="example@example.com" required/><br/>
        <input ref='loginPassword' type="password" className="password" placeholder="password" required/><br/>
        <button /*onClick={this.onLogin.bind(this)}*/ className="btn btn-primary">Login</button>
        <p><a href="http://www.index.hu">Forgot password?</a></p>
        </form>
      );
    } else {
      return (
        <div className="Login">
          <p>You are now logged in with the following e-mail address: </p>
        </div>
      );
    }
  }
}
