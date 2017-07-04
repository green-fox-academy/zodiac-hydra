import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchTable, fetchHand} from './table_actions'
import UserAction from '../UserAction/UserAction';

export class TableComp extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchTable();
    this.props.fetchHand();
  }

  playerRenderer(userData) {
    return (userData).map((user, i) => {
      let userClass = 'player user' + (i+1).toString();
      let dealerIcon = '';
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
      return (
        <div key={i} className={userClass}>
          <img className="avatarImg" src={user.avatar} alt=""/>
          <p className="username">{user.username}</p>
          <p className="chips">{user.chips}</p>
          {dealerIcon}
          {this.userAreaRenderer(user.id.toString())}
        </div>
      )
    })
  }

  userAreaRenderer(id) {
    if (this.props.gameData.round !== 'idle' && id === window.sessionStorage.userID) {

      return <div className="userArea">
        <div className="cardsArea">
          <img className="card activeCard1" src={require("../img/cards/" + this.props.handData[0] + ".png")} alt=""/>
          <img className="card activeCard2" src={require("../img/cards/" + this.props.handData[1] + ".png")} alt=""/>
        </div>;
        <div className="chipsArea"></div>
      </div>
    } else {
      return <div className="userArea">
        <div className="cardsArea"></div>
        <div className="chipsArea"></div>
      </div>
    }
  }

  centerCardsRenderer(data) {
    return data.map((card, i) => {
      let cardClass = 'card centerCard' + (i+1).toString();
      return (
        <img key={i} className={cardClass} src={require("../img/cards/" + card + ".png")} alt=""/>
      )
    });
  }

  

  render() {
    return(
      <div>
        <div className="table">
          {this.playerRenderer(this.props.gameData.players)}
          <div className="centerCards">
            {this.centerCardsRenderer(this.props.gameData.cards_on_table)}
            <p className="pot"> Pot: {this.props.gameData.pot}</p>
          </div>
        </div>
        <UserAction/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameData: state.table.gameData,
    handData: state.table.handData
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTable: fetchTable,
    fetchHand: fetchHand
  }, dispatch)
}

let Table = connect(mapStateToProps, matchDispatchToProps)(TableComp);

export default Table;
