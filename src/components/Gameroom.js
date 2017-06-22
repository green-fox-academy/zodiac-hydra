import React from 'react';
import Table from './Table';
import Header from './Header';
import UserAction from './UserAction';

export class Gameroom extends React.Component {
    render() {
        return(
            <section>
              <Header/>
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
