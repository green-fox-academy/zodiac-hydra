import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow } from 'enzyme';

import Intro from './components/Intro';
import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';
//import App from './main';

//JEST testing

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Intro />, div);
  ReactDOM.render(<Landing />, div);
  ReactDOM.render(<Login />, div);
  ReactDOM.render(<SignUp />, div);
});

//ENZYME testing
/*
it('renders without crashing', () => {
  shallow(<App />);
});
*/