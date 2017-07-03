import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import fetchLogin from './login_actions';
import Dialog from '../Dialog';
import ForgotPassword from '../ForgotPassword';

class LoginComp extends React.Component {

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

    this.props.fetchLogin(message);
    this.refs.loginName.value = '';
    this.refs.loginPassword.value = '';
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

function mapStateToProps(state) {
   return {
      theUser: state.login.theUser
   }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchLogin: fetchLogin}, dispatch)
}

let Login = connect(mapStateToProps, matchDispatchToProps)(LoginComp);

export default Login;
