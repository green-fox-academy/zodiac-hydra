import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Table from '../Table/Table';
import Header from '../Header/Header';
import {fetchGameroom} from './gameroom_actions'

export class GameRoomComp extends React.Component {

  constructor(props) {
    super(props);
    this.roomID = window.location.pathname.slice(10);
    this.props.fetchGameroom(this.roomID)
  }

  render() {
    return(
      <section>
        <Header />
        <Table />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameroom: state.gameroom.gameroom
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchGameroom: fetchGameroom}, dispatch)
}

let gameRoom = connect(mapStateToProps, matchDispatchToProps)(GameRoomComp);

export default gameRoom;
