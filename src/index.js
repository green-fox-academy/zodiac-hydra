import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import SignUp from './components/SignUp';

ReactDOM.render(
  <Router history="">
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Landing}/>
      <Route path="/signUp" component={SignUp}/>
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
