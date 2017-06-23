import React from "react";
import Dialog from './Dialog';
import ForgotPassword from './ForgotPassword';
import Ajax from './Ajax';

let ajax = new Ajax();

export class Login extends React.Component {

  alert() {
    alert('Your email has been sent.');
    Dialog.prototype.closeDialog()
  }

  onLogin(e) {
    e.preventDefault();
    let refUser = this.refs.loginName.value;
    let refPassword = this.refs.loginPassword.value;
    let message = {
      "username": refUser,
      "password": refPassword
    };
    ajax.postData('/login', message)
      .then( (data) => {
        this.props.getLogin(data)
      });
    this.refs.loginName.value = '';
    this.refs.loginPassword.value = '';
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  render() {
    return (
      <div>
        <Dialog header="Send your e-mail" component={ForgotPassword} callback={this.alert}/>
        <form onSubmit={this.onLogin.bind(this)} className="Login">
          <p className="loginTitle">LOGIN FORM</p>
          <input ref='loginName' type="text" className="userName" placeholder="User name" required/><br/>
          <input ref='loginPassword' type="password" className="password" placeholder="Password" required/><br/>
          <div className="loginFooter">
            <p><a onClick={Dialog.prototype.showDialog}>Forgot password?</a></p>
            <button className="loginButton">SIGN IN</button>
          </div>
        </form>
      </div>

    );
  }
}

export default Login;
