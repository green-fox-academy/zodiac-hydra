import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard'
import Gameroom from './components/Gameroom'

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <Router history="">
        <div className="App">
          <Route exact path="/" component={Landing}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/gameroom" component={Gameroom}/>
        </div>
      </Router>
    )
  }
}

export default App
