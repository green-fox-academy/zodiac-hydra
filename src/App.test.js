import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Dashboard from './components/Dashboard';
import Intro from './components/Intro';
import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';
import App from './main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.render(<Intro />, div);
  ReactDOM.render(<Landing />, div);
  ReactDOM.render(<Login />, div);
  ReactDOM.render(<SignUp />, div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

// test('login with valid input changes layout', () => {
//   let message = {
//     "email": "example@example.com",
//     "password": "1234"
//   };
//
//
// });
