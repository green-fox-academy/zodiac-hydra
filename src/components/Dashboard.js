import React from "react";
import { Tables } from "./Tables";
import { Leaderboard } from "./Leaderboard";
import Nav2 from './Nav2';

export class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      leaderBoard: [],
      user: {}
    };
    this.loadUser();
    this.loadTables();
    this.loadLeaderBoard();
  }

  loadUser() {
    fetch('https://equal-koala.glitch.me/user/' + window.sessionStorage.userID).then( res => {
      res.json().then( user => {
        this.setState({
          user: user
        })
      });
    });
  }

  loadTables() {
    fetch('https://equal-koala.glitch.me/tables').then( res => {
      res.json().then( tables => {
        console.log(tables);
        this.setState({
          tables: tables
        })
      });
    });
  }

  loadLeaderBoard() {
    fetch('https://equal-koala.glitch.me/leaderboard').then( res => {
      res.json().then( leaders => {
        this.setState({
          leaderBoard: leaders
        })
      });
    });
  }

  render() {
    // let user = {
    //   "id": 1234,
    //   "username": "andybendy",
    //   "email": "example@gmail.com",
    //   "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
    //   "chips": 3100
    // };

    let cols = [
        { key: 'table_name', label: 'Table name' },
        { key: 'stakes', label: 'Stakes' },
        { key: 'players', label: 'Players' },
        { key: 'avStack', label: 'Average stack' }
    ];

    return (
      <div>
        <Nav2 user={this.state.user}/>
        <div className="dashboard">
          <Tables cols={cols} data={this.state.tables}/>
          <Leaderboard leaders={this.state.leaderBoard}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
