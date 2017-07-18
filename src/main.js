import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Gameroom from './components/Gameroom/Gameroom';

class App extends React.Component {

  render() {
    return (
      <Router history="">
        <div className="App">
        <Route exact path="/" component={Landing}/>
          <Route path="/register" component={SignUp} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/game" component={GameRoom}/>
        </div>
      </Router>
    )
  }
}

export default App;