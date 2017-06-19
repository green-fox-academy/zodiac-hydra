import React from "react";
import { Tables } from "./Tables";
import { Leaderboard } from "./Leaderboard";
import Nav2 from './Nav2';

export class Dashboard extends React.Component {

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

    let data = [
      {
        id: 1,
        table_name: "Tibor's cool room",
        stakes: '50/100',
        players: 3,
        maxPlayers: 6,
        avStack: 1300
      }, {
        id: 2,
        table_name: "Dori's cool room",
        stakes: '50/100',
        players: 2,
        maxPlayers: 6,
        avStack: 1000
      }, {
        id: 3,
        table_name: "Balazs's cool room",
        stakes: '50/100',
        players: 4,
        maxPlayers: 6,
        avStack: 1800
      }, {
        id: 4,
        table_name: "Gabor's cool room",
        stakes: '50/100',
        players: 3,
        maxPlayers: 6,
        avStack: 600
      }
    ];

    let leaders = [
      {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }, {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }, {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }, {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }, {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }, {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }, {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }, {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }, {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }, {
       "id": 1234,
       "username": "andybendy",
       "email": "example@gmail.com",
       "avatar": "http://findwise.github.io/Hydra/images/big-hydra-no-text.png",
       "chips": 3100
      }
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
