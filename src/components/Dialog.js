/**
 * Created by Ylwoi on 2017-06-20.
 */
import React from 'react';

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
      <div>
        <dialog className="dialog">
          <a onClick={this.closeDialog}>X</a>
          <header>Header</header>
          <p>The content</p>
          <button>OK</button>
          <button onClick={this.closeDialog}>Cancel</button>
        </dialog>
      </div>

    )
  }
}

export default Dialog;