import React from 'react';
import { Cardstock } from "./Cardstock";
import { Hand } from "./Hand";

export class Table extends React.Component {

  constructor() {
    super()
    let colors = ['♠', '♣', '♥', '♦'];
    let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    this.stock = [];
    for (let i = 0; i < colors.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        this.stock.push(colors[i] + numbers[j]);
      }
    }
    this.hand = [];
    console.log(this.stock);
  }

  onDraw() {
    let shuffledStock = shuffleArray(this.stock);
    this.hand.push(shuffledStock.shift());
    this.stock = shuffledStock;
    console.log( 'Hand: ' + this.hand);
    console.log( 'Stock: ' + this.stock);
    this.render()
  }

  render() {

    return (
      <div className="Table">
        <Cardstock stock={this.stock}/>
        <button onClick={this.onDraw.bind(this)} className="btn btn-primary">Draw card</button>
        <Hand hand={this.hand}/>
      </div>
    );
  }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
