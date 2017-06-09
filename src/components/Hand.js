import React from "react";

export class Hand extends React.Component {

  constructor(props) {
    super();
    this.hand = props.hand;
  }

  render() {
    return (
      <div className="Hand">
        <p>In hand: {this.hand} </p>
      </div>
    );
  }
}
