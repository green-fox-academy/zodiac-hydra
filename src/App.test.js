import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow } from 'enzyme';

import Intro from './components/Intro';

//JEST testing

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Intro />, div);
});

//ENZYME testing
/*
it('renders without crashing', () => {
  shallow(<App />);
});
*/