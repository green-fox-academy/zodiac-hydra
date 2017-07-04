import React from 'react';
import Table from './Table/Table';
import Header from './Header';

export class Gameroom extends React.Component {
  render() {
    return(
      <section>
        <Header/>
        <Table/>
      </section>
    );
  }
}

export default Gameroom;
