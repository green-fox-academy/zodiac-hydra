import React from 'react';
import Ajax from './Ajax';

let ajax = new Ajax();

export class RoundEnd extends React.Component {
  constructor() {
    super();
    this.state = {
      game: {
        winner_user_id: 0,
        user_cards: [{
          user_id: 0,
          cards: []
        }]
      }
    }
    ajax.loadData('/game/6/showdown')
      .then((data) => {
        this.setState({
          game: data
        })
      });
  }



  render() {
    console.log("./img/cards/" + this.state.game.user_cards[0].cards[0] + ".png");
    let cards_list = this.state.game.user_cards;
    console.log(cards_list);
    return(
      <div className="standings invisible">
        <h2>Round ended</h2>
        <p>Winner ID: {this.state.game.winner_user_id} </p>
        <div>
          {this.state.game.user_cards.map((user, i) =>
            <div key={i} className="cardsArea">
              <img key={i + "0"} className="card activeCard1" src={require("./img/cards/D2.png")} alt=""/>
              <img key={i + "1"} className="card activeCard2" src={require("./img/cards/DT.png")} alt=""/>
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default RoundEnd;
