import React from 'react';

export class Header extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.table_name} {this.props.big_blind /2} / {this.props.big_blind}</h2>
                <button className="gameButton buyInButton">BUY IN</button>
            </div>
        );
    }
}

export default Header;
