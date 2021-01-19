import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/app';

describe('<App />', () => {
  it('exists', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div')).toExist();
  });
});
