import React from 'react';

export class UserAction extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="raiseInput">
          <p className="raiseMinus">-</p>
          <input ref='raiseInput' type="number" className="inputField" placeholder="100"/>
          <p className="raisePlus">+</p>
        </div>
        <div className="actionButtons">
          <button className="gameButton callButton">CALL</button>
          <button className="gameButton raiseButton">RAISE</button>
          <button className="gameButton foldButton">FOLD</button>
        </div>
      </div>
    );
  }
}

export default UserAction;
