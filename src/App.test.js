import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow } from 'enzyme';

import Intro from './components/Intro';
import Login from './components/Login';
import App from './main';
import SignUp from './components/SignUp';

//JEST testing

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Intro />, div);
  ReactDOM.render(<Login />, div);
});

//ENZYME testing
/*
it('renders without crashing', () => {
  shallow(<App />);
});
*/