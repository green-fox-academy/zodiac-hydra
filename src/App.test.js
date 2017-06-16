import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './components/Dashboard';
import Intro from './components/Intro';
import Landing from './components/Landing';
import Login from './components/Login';
import Nav from './components/Nav';
import SignUp from './components/SignUp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.render(<Intro />, div);
  ReactDOM.render(<Landing />, div);
  ReactDOM.render(<Login />, div);
  ReactDOM.render(<Nav />, div);
  ReactDOM.render(<SignUp />, div);
});
