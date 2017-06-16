import React from 'react';
import ReactDOM from 'react-dom';

import Ajax from './components/Ajax';
import Dashboard from './components/Dashboard';
import Intro from './components/Intro';
import Landing from './components/Landing';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import Tables from './components/Tables';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ajax />, div);
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.render(<Intro />, div);
  ReactDOM.render(<Landing />, div);
  ReactDOM.render(<Leaderboard />, div);
  ReactDOM.render(<Login />, div);
  ReactDOM.render(<Nav />, div);
  ReactDOM.render(<SignUp />, div);
  ReactDOM.render(<Tables />, div);
});
