import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Leaderboard from './components/Leaderboard'
import Nav from './components/Nav';

ReactDOM.render(
  <Router history="">
    <div className="App">
      <Nav/>
      <Route exact path="/" component={App}/>
      <Route path="/lead" component={Leaderboard}/>
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
