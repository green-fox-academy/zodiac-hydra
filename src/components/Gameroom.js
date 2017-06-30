import React from 'react';
import Table from './Table';
import Header from './Header';
import RoundEnd from './RoundEnd';

export class Gameroom extends React.Component {
  render() {
    return(
      <section>
        <Header/>
        <Table/>
        <RoundEnd/>
      </section>
    );
  }
}

export default Gameroom;
