import React from "react";

export class Login extends React.Component {

  constructor(props) {
    super();
  }

  onLogin() {
    console.log('authentication started...');
  }

  render() {
    return (
      <div className="Login">
        <p>Please login or <a href="#">register</a> to continue. </p>
        <input type="text" className="text" placeholder="example@example.com" required/><br/>
        <input type="text" className="password" placeholder="password" required/><br/>
        <button onClick={this.onLogin.bind(this)} className="btn btn-primary">Login</button>
        <p><a href="#">Forgot password?</a></p>
      </div>
    );
  }
}
