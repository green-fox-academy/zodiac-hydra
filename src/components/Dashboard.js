import React from "react";
import { Tables } from "./Tables";
import { Leaderboard } from "./Leaderboard";
import Nav2 from './Nav2';

export class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      leaderBoard: []
    };
    this.loadTables();
    this.loadLeaderBoard();
  }

  loadTables() {
    fetch('https://equal-koala.glitch.me/tables').then( res => {
      res.json().then( tables => {
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
    let user = {
      "id": 1234,
      "username": "andybendy",
      "email": "example@gmail.com",
      "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
      "chips": 3100
    };

    let cols = [
        { key: 'table_name', label: 'Table name' },
        { key: 'stakes', label: 'Stakes' },
        { key: 'players', label: 'Players' },
        { key: 'avStack', label: 'Average stack' }
    ];

    return (
      <div>
        <Nav2 user={user}/>
        <div className="dashboard">
          <Tables cols={cols} data={data}/>
          <Leaderboard leaders={leaders}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
