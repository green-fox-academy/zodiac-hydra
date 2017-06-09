import React from "react";

export class Cardstock extends React.Component {

  constructor(props) {
    super();
    this.stock = props.stock;
  }

  render() {
    return (
      <div className="Cardstock">
        <p>Cardstock: {this.stock} </p>
      </div>
    );
  }
}
