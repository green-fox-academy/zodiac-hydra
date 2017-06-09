import React from "react";

export class Login extends React.Component {

  constructor(props) {
    super();
    this.loggedIn = props.loggedIn;
  }

  onLogin() {
    this.loggedIn = true;
    console.log('authentication started...');
    this.render();
    console.log('authentication finished.')
  }

  render() {
    if (this.loggedIn === false) {
      return (
        <div className="Login">
        <p>Please login or <a href="http://www.index.hu">register</a> to continue. </p>
        <input type="text" className="text" placeholder="example@example.com" required/><br/>
        <input type="text" className="password" placeholder="password" required/><br/>
        <button onClick={this.onLogin.bind(this)} className="btn btn-primary">Login</button>
        <p><a href="http://www.index.hu">Forgot password?</a></p>
        </div>
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
