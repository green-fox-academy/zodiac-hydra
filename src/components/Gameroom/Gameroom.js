import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Table from '../Table/Table';
import Header from '../Header/Header';
import {fetchGameroom} from './gameroom_actions'

export class GameroomComp extends React.Component {

  constructor(props) {
    super(props);
    this.roomID = window.location.pathname.slice(7);
    window.sessionStorage.roomID = this.roomID;
    console.log('Room ID', this.roomID);
    this.props.fetchGameroom(this.roomID);
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

let gameroom = connect(mapStateToProps, matchDispatchToProps)(GameroomComp);

export default gameroom;
