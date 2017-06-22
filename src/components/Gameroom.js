import React from 'react';
import Table from './Table';

export class Gameroom extends React.Component {
    render() {
        return(
            <section>
              <h2>Highrollers 25/50</h2>
              <button className="gameButton buyInButton">BUY IN</button>
              <Table/>
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
