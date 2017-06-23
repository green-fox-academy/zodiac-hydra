import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard'

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <Router >
        <div className="App">
          <Route exact path="/" component={Landing}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    )
  }
}

export default App
