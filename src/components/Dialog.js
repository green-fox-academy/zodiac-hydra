/**
 * Created by Ylwoi on 2017-06-20.
 */
import React from 'react';
import {Route} from 'react-router-dom';

export class Dialog extends React.Component {

  showDialog() {
    var dialog = document.querySelector('.dialog');
    dialog.show();
  }

  closeDialog() {
    var dialog = document.querySelector('.dialog');
    dialog.close();
  }

  render() {
    return (
      <dialog className="dialog">
        <a onClick={this.closeDialog}>X</a>
        <header>{this.props.header}</header>
        <Route component={this.props.component}/>
        <button>OK</button>
        <button onClick={this.closeDialog}>Cancel</button>
      </dialog>
    )
  }
}

export default Dialog;