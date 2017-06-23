import React from 'react';
import CenterCards from './CenterCards';

export class Table extends React.Component {
    render() {
        return(
            <div className="table">
              <div className="bigBlind player user1">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="username">username</p>
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea"></div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="player user2">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="username">username</p>
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea"></div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="smallBlind dealer player user3">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="username">username</p>
                <p className="chips">3100</p>
                <p className="dealerPar">D</p>
                <p className="raisedPar">RAISED</p>
                <div className="userArea">
                  <div className="cardsArea"></div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="folded player user4">
                <p className="foldedPar">FOLDED</p>
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="username">username</p>
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea"></div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="player user5">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="username">username</p>
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea"></div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="activeUser onTurn player user6">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="username">username</p>
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea">
                    <img className="card activeCard1" src={require("./img/cards/D2.png")} alt="" width='34' height='50'/>
                    <img className="card activeCard2" src={require("./img/cards/H7.png")} alt=""/>
                  </div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <CenterCards/>
            </div>
        );
    }
}

export default Table;
