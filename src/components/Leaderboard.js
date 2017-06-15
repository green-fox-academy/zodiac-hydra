import React from "react";

export class Leaderboard extends React.Component {

  render() {
    let leaders = this.props.leaders;

    return (
      <div className="leaderboard">
        <p className="componentTitle">leaderboard</p>
        {leaders.map((user, i) =>
          <div key={i} className="leader">
            <img src={user.avatar} alt="" height="50" width="50"/>
            <div>
              <p>{user.username}</p>
              <p className="chips">{user.chips} chips</p>
            </div>
          </div>)
        }
      </div>
    );
  }
}
