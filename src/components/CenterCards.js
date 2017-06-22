import React from 'react';

export class CenterCards extends React.Component {
    render() {
        return(
            <div className="centerCards">
              <img className="card centerCard1" src="./img/cards/cardsBack.png" alt=""/>
              <img className="card centerCard2" src="./img/cards/SK.png" alt=""/>
              <img className="card centerCard3" src="./img/cards/HA.png" alt=""/>
              <img className="card centerCard4" src="./img/cards/CA.png" alt=""/>
              <img className="card centerCard5" src="./img/cards/SA.png" alt=""/>
            </div>
        );
    }
}

export default CenterCards;
