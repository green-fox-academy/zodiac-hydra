/**
 * Created by Ylwoi on 2017-06-20.
 */
import React from 'react';
import {Route} from 'react-router-dom';

export class Dialog extends React.Component {

  showDialog() {
    let dialog = document.querySelector('.dialog');
    dialog.show();
  }

  closeDialog() {
    let dialog = document.querySelector('.dialog');
    dialog.close();
  }

  render() {
    return (
      <dialog className="dialog">
        <div className="header">
          <header>{this.props.header}</header>
          <a onClick={this.closeDialog}>X</a>
        </div>
        <Route className="component" component={this.props.component}/>
        <div className="buttons">
          <button onClick={this.props.callback}>OK</button>
          <button onClick={this.closeDialog}>Cancel</button>
        </div>
      </dialog>
    )
  }
}

export default Dialog;
