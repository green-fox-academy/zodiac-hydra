import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Intro from './components/Intro';
import App from './main'


describe('Intro component testing with shallow', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Intro />).contains(
      <div className="intro">
        <div className="introTitle">
          <p className="introTitle1">100% FREE</p>
          <p className="introTitle2">ONLINE POKER</p>
        </div>
        <div className="introPar">
          <p> Play Texas Hold’em no limit poker right in your browser,</p>
          <p> no plugins or anything just cool web technologies.</p>
        </div>
      </div>
    )).toBe(true);
  });

  it('should be selectable by class "intro"', function() {
    expect(shallow(<Intro />).is('.intro')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Intro />).find('.intro').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Intro />).text()).toEqual('100% FREEONLINE POKER Play Texas Hold’em no limit poker right in your browser, no plugins or anything just cool web technologies.');
  });
});

it('renders without crashing', () => {
  shallow(<App />);
});
