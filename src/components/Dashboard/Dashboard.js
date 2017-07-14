import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchUserInfo from './dashboard_actions'
import Tables from "../Tables/Tables";
import Leaderboard from "../Leaderboard/Leaderboard";
import Nav2 from '../Nav2';

export class DashboardComp extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchUserInfo()
  }

  render() {

    let cols = [
        { key: 'name', label: 'Table name' },
        { key: 'big_blind', label: 'Big blind' },
        { key: 'max_players', label: 'Max players' },
    ];

    return (
      <div>
        <Nav2 user={this.props.userInfo}/>
        <div className="dashboard">
          <Tables cols={cols}/>
          <Leaderboard/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo.userInfo
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchUserInfo: fetchUserInfo}, dispatch)
}

let Dashboard = connect(mapStateToProps, matchDispatchToProps)(DashboardComp);

export default Dashboard;
