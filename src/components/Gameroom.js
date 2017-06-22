import React from 'react';

export class Gameroom extends React.Component {
    render() {
        return(
            <section>
              <h2>Highrollers 25/50</h2>
              <button className="gameButton buyInButton">BUY IN</button>
              <div className="table">
                <div className="bigBlind player user1">
                  <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png"/>
                  <p className="chips">3100</p>
                  <div className="userArea">
                    <div className="cardsArea"></div>
                    <div className="chipsArea"></div>
                  </div>
                </div>
                <div className="player user2">
                  <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png"/>
                  <p className="chips">3100</p>
                  <div className="userArea">
                    <div className="cardsArea"></div>
                    <div className="chipsArea"></div>
                  </div>
                </div>
                <div className="smallBlind dealer player user3">
                  <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png"/>
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
                  <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png"/>
                  <p className="chips">3100</p>
                  <div className="userArea">
                    <div className="cardsArea"></div>
                    <div className="chipsArea"></div>
                  </div>
                </div>
                <div className="player user5">
                  <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png"/>
                  <p className="chips">3100</p>
                  <div className="userArea">
                    <div className="cardsArea"></div>
                    <div className="chipsArea"></div>
                  </div>
                </div>
                <div className="activeUser onTurn player user6">
                  <img className="avatarImg" src="http://findwise.github.io/Hydra/images/big-hydra-no-text.png"/>
                  <p className="chips">3100</p>
                  <div className="userArea">
                    <div className="cardsArea">
                      <img className="card activeCard1" src="./img/cards/D2.png"/>
                      <img className="card activeCard2" src="./img/cards/H7.png"/>
                    </div>
                    <div className="chipsArea"></div>
                  </div>
                </div>
                <div className="centerCards">
                  <img className="card centerCard1" src="./img/cards/cardsBack.png"/>
                  <img className="card centerCard2" src="./img/cards/SK.png"/>
                  <img className="card centerCard3" src="./img/cards/HA.png"/>
                  <img className="card centerCard4" src="./img/cards/CA.png"/>
                  <img className="card centerCard5" src="./img/cards/SA.png"/>
                </div>
              </div>
              <div className="container">
                <div className="raiseInput">
                  <p className="raiseMinus">-</p>
                  <input ref='raiseInput' type="number" className="raiseInput" placeholder="100"/>
                  <p className="raisePlus">+</p>
                </div>
                <div className="actionButtons">
                  <button className="gameButton callButton">CALL</button>
                  <button className="gameButton raiseButton">RAISE</button>
                  <button className="gameButton foldButton">FOLD</button>
                </div>
              </div>
          </section>
        );
    }
}

export default Gameroom;
