import React from 'react';

export class Table extends React.Component {
    render() {
        return(
            <div className="table">
              <div className="bigBlind player user1">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea"></div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="player user2">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea"></div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="smallBlind dealer player user3">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
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
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea"></div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="player user5">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea"></div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="activeUser onTurn player user6">
                <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png" alt=""/>
                <p className="chips">3100</p>
                <div className="userArea">
                  <div className="cardsArea">
                    <img className="card activeCard1" src="./img/cards/D2.png" alt=""/>
                    <img className="card activeCard2" src="./img/cards/H7.png" alt=""/>
                  </div>
                  <div className="chipsArea"></div>
                </div>
              </div>
              <div className="centerCards">
                <img className="card centerCard1" src="./img/cards/cardsBack.png" alt=""/>
                <img className="card centerCard2" src="./img/cards/SK.png" alt=""/>
                <img className="card centerCard3" src="./img/cards/HA.png" alt=""/>
                <img className="card centerCard4" src="./img/cards/CA.png" alt=""/>
                <img className="card centerCard5" src="./img/cards/SA.png" alt=""/>
              </div>
            </div>
        );
    }
}

export default Table;
