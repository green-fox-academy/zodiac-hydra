import React from "react";
import { Tables } from "./Tables";
import { Leaderboard } from "./Leaderboard";

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
    let cols = [
        { key: 'table_name', label: 'Table name' },
        { key: 'stakes', label: 'Stakes' },
        { key: 'players', label: 'Players' },
        { key: 'avStack', label: 'Average stack' }
    ];

    return (
      <div className="dashboard">
        <Tables cols={cols} data={this.state.tables}/>
        <Leaderboard leaders={this.state.leaderBoard}/>
        <button onClick={this.loadTables.bind(this)}>Refresh Tables</button>
      </div>
    );
  }
}

export default Dashboard;