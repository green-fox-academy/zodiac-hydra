/**
 * Created by Ylwoi on 2017-06-20.
 */
import React from 'react';
import {Route} from 'react-router-dom';

export class Dialog extends React.Component {

  showDialog() {
    let dialog = document.querySelector('.dialog');
    dialog.classList.remove('invisible');
    dialog.show();
  }

  closeDialog() {
    let dialog = document.querySelector('.dialog');
    dialog.classList.add('invisible');
    dialog.close();
  }

  render() {
    return (
      <dialog className="dialog invisible">
        <div className="wrapper">
          <div className="header">
            <header>{this.props.header}</header>
            <a onClick={this.closeDialog}>X</a>
          </div>
          <Route className="component" component={this.props.component}/>
          <div className="buttons">
            <button className="dialogButton" onClick={this.props.callback}>OK</button>
            <button className="dialogButton" onClick={this.closeDialog}>Cancel</button>
          </div>
        </div>
      </dialog>
    )
  }
}

export default Dialog;
