import React from 'react';
import {connect} from 'react-redux'
import Dialog from '../Dialog';
import BuyIn from '../BuyIn/BuyIn';
import Ajax from '../Ajax'

let ajax = new Ajax();

export class HeaderComp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'BUY IN',
      backButtonClasslist: 'gameButton buyInButton'
    }
  }

  functionSwitcher() {
    if (window.sessionStorage.joined === '0') {
      Dialog.prototype.showDialog()
    }
    else if (window.sessionStorage.joined === '1') {
      this.leaveGame()
    }
  }

  backToDashboard() {
    window.location.href = '/dashboard';
  }

  joinGame() {
    let message = {"chips": this.props.buyInChips};
    ajax.postData('/games/' + this.props.gameroom.id + '/join', message)
      .then((res) => {
        if (res.result === 'success') {
          window.sessionStorage.joined = '1';
          alert(res.message);
          this.buttonText();
          Dialog.prototype.closeDialog()
        } else {
          alert(res.message)
        }
      })
  }

  leaveGame() {
    ajax.postData('/games/' + this.props.gameroom.id + '/leave')
      .then((res) => {
        if (res.result === 'success') {
          window.sessionStorage.joined = '0';
          alert(res.message);
          this.buttonText()
        }
      })
  }

  buttonText() {
    if (window.sessionStorage.joined === '1') {
      this.setState({
        buttonText: 'SIT OUT',
        backButtonClasslist: 'invisible gameButton buyInButton'
      })
    } else {
      this.setState({
        buttonText: 'BUY IN',
        backButtonClasslist: 'gameButton buyInButton'
      })
    }
  }

  render() {
    return(
      <div>
        <Dialog header="Enter chips to buy in" component={BuyIn}  callback={this.joinGame.bind(this)}/>
        <div>
          <h2>{this.props.gameroom.name} {this.props.gameroom.big_blind /2} / {this.props.gameroom.big_blind}</h2>
          <div className="headerContainer">
            <button onClick={this.backToDashboard.bind(this)} className={this.state.backButtonClasslist}>BACK</button>
            <button onClick={this.functionSwitcher.bind(this)} className="gameButton buyInButton">{this.state.buttonText}</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    buyInChips: state.buyIn.buyInChips,
    gameroom: state.gameroom.gameroom
  }
}

let Header = connect(mapStateToProps)(HeaderComp);

export default Header;
