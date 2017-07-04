import React from 'react';
import {connect} from 'react-redux'
import Dialog from '../Dialog';
import BuyIn from '../BuyIn/BuyIn';
import Ajax from '../Ajax'

let ajax = new Ajax();

export class HeaderComp extends React.Component {

  joinGame() {
    let message = {"chips": this.props.buyInChips};
    ajax.postData('/game/' + this.props.gameID + '/join', message)
      .then((res) => {
        if (res.result === 'success') {
          alert(res.message);
          Dialog.prototype.closeDialog()
        } else {
          alert(res.message)
        }

      })
  }

  render() {
    return(
      <div>
        <Dialog header="Enter chips to buy in" component={BuyIn}  callback={this.joinGame.bind(this)}/>
        <div>
          <h2>{this.props.table_name} {this.props.big_blind /2} / {this.props.big_blind}</h2>
          <button onClick={Dialog.prototype.showDialog} className="gameButton buyInButton">BUY IN</button>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    buyInChips: state.buyIn.buyInChips
  }
}

let Header = connect(mapStateToProps)(HeaderComp);

export default Header;