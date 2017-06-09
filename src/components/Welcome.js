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
        <p>You can join tables:</p>
        <ul>
          {this.user.tables.map((table, i) => <li key={i}>table no. {table}</li>)}
        </ul>
      </div>
    );
  }
}
