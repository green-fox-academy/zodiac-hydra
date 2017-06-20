import React from "react";
var ajax = require('./Ajax.js');

export class Login extends React.Component {

  onLogin(e) {
    e.preventDefault();
    console.log('authentication started...');
    let refUser = this.refs.loginName.value;
    let refPassword = this.refs.loginPassword.value;
    let message = {
      "username": refUser,
      "password": refPassword
    };
    ajax.postLogin(this.props.getLogin, message);
    this.refs.loginEmail.value = '';
    this.refs.loginPassword.value = '';


    console.log('authentication finished.')
  }

  render() {
    return (
      <form onSubmit={this.onLogin.bind(this)} className="Login">
        <p className="loginTitle">LOGIN FORM</p>
        <input ref='loginName' type="text" className="userName" placeholder="User name" required/><br/>
        <input ref='loginPassword' type="password" className="password" placeholder="Password" required/><br/>
        <div className="loginFooter">
          <p><a href="http://www.index.hu/">Forgot password?</a></p>
          <button className="loginButton">SIGN IN</button>
        </div>
      </form>
    );
  }
}

export default Login;
