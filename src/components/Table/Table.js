import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchTable, fetchHand, fetchShowdown} from './table_actions'

const root = window.sessionStorage.backend;

let timeoutFunction = ''
console.log('ROOM ID at table: ', window.sessionStorage.roomID);

export class TableComp extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchTable(window.sessionStorage.roomID)
    this.startPoll();
    this.state = {
      handFetched: false,
      showdownFetched: false
    };
  }

  playerRenderer(userData) {
    if (userData === undefined) {
      return "";
    } else {
        return (userData).map((user, i) => {
          let userClass = 'player user' + (i+1).toString();
          let dealerIcon = '';
          let waitingPar = '';
          let standupPar = '';
          let foldedPar = '';
          let raisedPar = '';
          if (user.id === this.props.gameData.dealer_player_id) {
            userClass += ' dealer';
            dealerIcon = <p className="dealerPar">D</p>;
          };
          if (user.id === this.props.gameData.actor_player_id) {
            userClass += ' onTurn';
          };
          if (user.id.toString() === window.sessionStorage.userID) {
            userClass += ' activeUser';
          };
          if (user.isWaiting === true) {
            userClass += ' waiting';
            waitingPar = <p className="waitingPar">WAITING</p>
          };
          if (user.lastAction === 'standup') {
            userClass += ' standup';
            standupPar = <p className="standupPar">STOOD UP</p>
          } else if (user.isFolded === true) {
            userClass += ' folded';
            foldedPar = <p className="foldedPar">FOLDED</p>
          };
          if (user.lastAction === 'raise') {
            raisedPar = <p className="raisedPar">RAISED</p>
          };
          return (
            <div key={i} className={userClass}>
            <img className="avatarImg" src={user.avatar} alt=""/>
            <p className="username">{user.username}</p>
            <p className="chips">{user.chipsAtGame}</p>
            {dealerIcon}
            {waitingPar}
            {standupPar}
            {foldedPar}
            {raisedPar}
            {this.userAreaRenderer(user.id.toString(), i, user.isFolded)}
            </div>
          );
        }
      )
    }
  }

  userAreaRenderer(id, i, isFolded) {
    if (isFolded === true) {
      return <div className="userArea">
        <div className="chipsArea"></div>
      </div>
    }

    if (this.props.gameData.round !== 'idle' && id === window.sessionStorage.userID) {
      return <div className="userArea">
        <div className="cardsArea">
          <img className="card activeCard1" src={require("../img/cards/" + this.props.handData[0] + ".png")} alt=""/>
          <img className="card activeCard2" src={require("../img/cards/" + this.props.handData[1] + ".png")} alt=""/>
        </div>
        <div className="chipsArea">{this.props.gameData.players[i].bet}</div>
      </div>
    } else {
      if (this.props.gameData.round === 'idle') {
        return <div></div>
      } else if (this.props.gameData.round === 'showdown') {
        return <div className="userArea">
          <div className="cardsArea">
            <img className="card activeCard1" src={require("../img/cards/" + this.props.showdownData.user_cards[i].cards[0] + ".png")} alt=""/>
            <img className="card activeCard2" src={require("../img/cards/" + this.props.showdownData.user_cards[i].cards[1] + ".png")} alt=""/>
          </div>
          <div className="chipsArea"></div>
        </div>
      } else {
        return <div className="userArea">
          <div className="cardsArea"></div>
          <div className="chipsArea">{this.props.gameData.players[i].bet}</div>
        </div>
      }
    }
  }

  centerCardsRenderer(data) {
    if (data === undefined) {
      return "";
    } else {
        return data.map((card, i) => {
          let cardClass = 'card centerCard' + (i+1).toString();
          return (
            <img key={i} className={cardClass} src={require("../img/cards/" + card + ".png")} alt=""/>
          )
        }
      );
    }
  }

  userActionAreaRenderer() {
    if (this.props.gameData.actor_player_id === parseInt(window.sessionStorage.userID, 10)) {
      let maxBet = 0;
      let currentBet = 0;
      let buttonText = 'CHECK';
      for (let i = 0; i < this.props.gameData.players.length; i++) {
        if (this.props.gameData.players[i].bet > maxBet) {
          maxBet = this.props.gameData.players[i].bet;
        };
        if (this.props.gameData.players[i].id === parseInt(window.sessionStorage.userID, 10)) {
          currentBet = this.props.gameData.players[i].bet;
        };
      }
      if (currentBet < maxBet) {
        buttonText = 'CALL';
      }
      return <div className={this.state.userActionsClasslist}>
        <div className="raiseInput">
          <p className="raiseMinus">-</p>
          <input ref='raiseInput' type="number" className="inputField" placeholder="100"/>
          <p className="raisePlus">+</p>
        </div>
        <div className="actionButtons">
          <button onClick={this.userActionCall} className="gameButton callButton">{buttonText}</button>
          <button onClick={this.userActionRaise} className="gameButton raiseButton">RAISE</button>
          <button onClick={this.userActionFold} className="gameButton foldButton">FOLD</button>
        </div>
      </div>
    }
  }

  userActionCall() {
    console.log('Call action called');
    let message = {"action": 'call'};
    let url = '/games/' + window.sessionStorage.roomID;
    axios.put(root + url, message)
      .then(function (res) {
        console.log("Action response: ",res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  userActionRaise() {
    console.log('Raise action called');
    let amount = parseInt(document.querySelector('.inputField').value, 10);
    console.log('With amount: ', amount);
    let message = {
      "action": 'raise',
      "value": amount
    };
    let url = '/games/' + window.sessionStorage.roomID;
    axios.put(root + url, message)
      .then(function (res) {
        console.log("Action response: ",res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  userActionFold() {
    console.log('Fold action called');
    let message = {"action": 'fold'};
    let url = '/games/' + window.sessionStorage.roomID;
    axios.put(root + url, message)
      .then(function (res) {
        console.log("Action response: ",res);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  startPoll() {
    timeoutFunction = setInterval(() => this.props.fetchTable(window.sessionStorage.roomID), 3000);
  }

  stopPoll() {
    clearInterval(timeoutFunction);
  }

  componentWillMount() {
    setTimeout(function(){
      if (this.props.gameData.round !== 'idle' && this.state.handFetched === false) {
        this.props.fetchHand(window.sessionStorage.roomID);
        this.setState({
          handFetched: true,
          showdownFetched: false
        })
      };
    }.bind(this), 2500);
  }

  componentWillUpdate() {
    if (this.props.gameData.round === 'showdown' && this.state.showdownFetched === false) {
      console.log('Fetch Showdown inited');
      this.props.fetchShowdown(window.sessionStorage.roomID);
      this.setState({
        showdownFetched: true
      })
    };
  }

  render() {
    if (this.props.gameData.round === 'idle') {
      return(
        <div>
          <div className="table">
            {this.playerRenderer(this.props.gameData.players)}
          </div>
        </div>
      );
    } else if (this.props.gameData.round === 'showdown' && this.state.showdownFetched === true) {
      let winnerName = '';
      this.props.gameData.players.forEach(function(player) {
        if (player.id === this.props.showdownData.winner_user_ids[0]) {
          winnerName = player.username;
        }
      }.bind(this));
      return(
        <div>
          <div className="table">
            {this.playerRenderer(this.props.gameData.players)}
              <div className="centerCards">
                {this.centerCardsRenderer(this.props.gameData.cards_on_table)}
              <p className="pot"> Pot: {this.props.gameData.pot}</p>
            </div>
          </div>
          {this.userActionAreaRenderer()}
          <div className="standings">
            <h2>Round ended</h2>
            <p>Winner: {winnerName} </p>
          </div>
        </div>
      );
    } else if (this.props.gameData.round === 'betting') {
      let actorName = '';
      for (let i = 0; i < this.props.gameData.players.length; i++) {
        if (this.props.gameData.players[i].id === this.props.gameData.actor_player_id) {
          actorName = this.props.gameData.players[i].username;
        }
      }
      return(
        <div>
          <div className="table">
            {this.playerRenderer(this.props.gameData.players)}
              <div className="centerCards">
                {this.centerCardsRenderer(this.props.gameData.cards_on_table)}
              <p className="pot"> Pot: {this.props.gameData.pot}</p>
            </div>
          </div>
          {this.userActionAreaRenderer()}
          <div className="standings">
            <p>On turn: {actorName} </p>
            <p>Round: {this.props.gameData.round} </p>
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <div className="table">
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    gameData: state.table.gameData,
    handData: state.table.handData,
    showdownData: state.table.showdownData,
    gameroom: state.gameroom.gameroom
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTable: fetchTable,
    fetchHand: fetchHand,
    fetchShowdown: fetchShowdown
  }, dispatch)
}

let Table = connect(mapStateToProps, matchDispatchToProps)(TableComp);

export default Table;
