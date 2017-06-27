import React from 'react';
import Table from './Table';
import Header from './Header';
import UserAction from './UserAction';
import Ajax from './Ajax';

const ajax = new Ajax();

export class Gameroom extends React.Component {

  constructor(props) {
    super(props);
    this.game_id = window.location.pathname.slice(10);
    this.state = {
      table_name: '',
      big_blind: null,
    };

    ajax.loadData('/games')
      .then((data) => {
        data.forEach((game) => {
          if (game.gamestate_id == this.game_id) {
            this.setState({
              table_name: game.name,
              big_blind: game.big_blind
            })
          }
        })
      })
  }

    render() {
        return(
            <section>
              <Header table_name={this.state.table_name} big_blind={this.state.big_blind}/>
              <Table/>
              <div className="container">
                <div className="raiseInput">
                  <p className="raiseMinus">-</p>
                  <input ref='raiseInput' type="number" className="raiseInput" placeholder="100"/>
                  <p className="raisePlus">+</p>
                </div>
                <UserAction/>
              </div>
            </section>
        );
    }
}

export default Gameroom;
