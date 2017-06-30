import React from 'react';

export class CenterCards extends React.Component {
    render() {
        return(
            <div className="centerCards">
              <img className="card centerCard1" src={require("../img/cards/cardsBack.png")} alt=""/>
              <img className="card centerCard2" src={require("../img/cards/SK.png")} alt=""/>
              <img className="card centerCard3" src={require("../img/cards/HA.png")} alt=""/>
              <img className="card centerCard4" src={require("../img/cards/CA.png")} alt=""/>
              <img className="card centerCard5" src={require("../img/cards/SA.png")} alt=""/>
              <p className="pot"> Pot: 300</p>
            </div>
        );
    }
}

export default CenterCards;
