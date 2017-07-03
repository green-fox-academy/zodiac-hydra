import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchLeaderBoard} from './leaderboard_actions'


export class LeaderboardComp extends React.Component {


  constructor(props) {
    super(props);
    this.props.fetchLeaderBoard()
  }

  leaderBoardMaker() {
    return this.props.users.map((user, i) => {
      return (
        <div key={i} className="leader">
          <img src={user.avatar} alt="" height="50" width="50"/>
          <div>
            <p>{user.username}</p>
            <p className="leader-chips">{user.chips} chips</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="leaderboard">
        <p className="componentTitle">leaderboard</p>
        {this.leaderBoardMaker()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.leaderBoard.users
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchLeaderBoard: fetchLeaderBoard}, dispatch)
}

let Leaderboard = connect(mapStateToProps, matchDispatchToProps)(LeaderboardComp);

export default Leaderboard;
