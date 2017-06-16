import React from "react";
import ReactDOM from 'react-dom';
import App from './main';

import registerServiceWorker from './registerServiceWorker';

<<<<<<< HEAD
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: Landing
    }
  }
  render() {
    return (
      <Router history="">
        <div className="App">
          <Nav/>
          <Route exact path="/" component={this.state.comp}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    )
  }
}
=======

>>>>>>> testing

ReactDOM.render(
    <App/>
  , document.getElementById('root'));
registerServiceWorker();
