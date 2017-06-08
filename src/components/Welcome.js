import React from "react";

export class Welcome extends React.Component {

  constructor(props) {
    super();
    this.user = props.user;
  }

  render() {
    return (
      <div className="Welcome">
        <h4>Welcome, {this.user.name}!</h4>
        <p>You have {this.user.credit} credits.</p>
        <p>You can join tables {this.user.tables}</p>
      </div>
    );
  }
}
