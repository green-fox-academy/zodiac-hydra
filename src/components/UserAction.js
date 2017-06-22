import React from 'react';

export class UserAction extends React.Component {
    render() {
        return(
            <div className="actionButtons">
              <button className="gameButton callButton">CALL</button>
              <button className="gameButton raiseButton">RAISE</button>
              <button className="gameButton foldButton">FOLD</button>
            </div>
        );
    }
}

export default UserAction;
