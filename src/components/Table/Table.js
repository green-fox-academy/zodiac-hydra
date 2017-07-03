import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchTable} from './table_actions'
import CenterCards from '../CenterCards/CenterCards';
import UserAction from '../UserAction/UserAction';
import Ajax from '../Ajax';

let ajax = new Ajax();

export class TableComp extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchTable();
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
          <div className="userArea">
            {this.activeCardRenderer(user.id.toString())}
            <div className="chipsArea"></div>
          </div>
        </div>
      )
    })
  }

  activeCardRenderer(id) {
    if (this.props.gameData.round !== 'idle' && id === window.sessionStorage.userID) {
      let url = '/game/' + this.props.gameData.id + '/hand';
      ajax.loadData(url)
        .then((data) => {
          console.log('hand: ', data);
          let message = <div className="cardsArea"></div>
          return message;
        }
      );
    } else {
      return <div className="cardsArea"></div>
    }
  }

  render() {
    return(
      <div>
        <div className="table">
          {this.playerRenderer(this.props.gameData.players)}

          <CenterCards/>
        </div>
        <UserAction/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameData: state.table.gameData
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchTable: fetchTable}, dispatch)
}

let Table = connect(mapStateToProps, matchDispatchToProps)(TableComp);

export default Table;
