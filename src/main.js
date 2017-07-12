import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard/Dashboard'
import GameRoomTables from './components/Gameroom/Gameroom'

class App extends React.Component {

  render() {
    return (
      <Router history="">
        <div className="App">
        <Route exact path="/" component={Landing}/>
          <Route path="/signUp" component={SignUp} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/gameroom" component={GameRoomTables}/>
        </div>
      </Router>
    )
  }
}

export default App
