import React from 'react';

export class Header extends React.Component {
    render() {
        return(
            <div>
                <h2>Highrollers 25/50</h2>
                <button className="gameButton buyInButton">BUY IN</button>
            </div>
        );
    }
}

export default Header;
