import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/app';
import MainCarousel from '../client/src/mainCarousel';
import Item from '../client/src/item';

const mockItem = {
  _id: '60026596b346eb11d047d1c7',
  name: 'Illum',
  styles: [{
    _id: '6007822fdacda945adf16832',
    styleName: 'Porro',
    color: 'corporis',
    price: 253,
    abbreviation: 'architecto',
    styleNo: 41752,
    url: 'http://d1f5qc7bkni254.cloudfront.net/1.jpg',
  },
  {
    _id: '6007822fdacda945adf16833',
    styleName: 'Explicabo',
    color: 'quis',
    price: 422,
    abbreviation: 'et',
    styleNo: 31412,
    url: 'http://d1f5qc7bkni254.cloudfront.net/2.jpg',
  },
  ],
};

describe('<App />', () => {
  it('exists', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div')).toExist();
  });
});

describe('<MainCarousel />', () => {
  it('accepts an item as props', () => {
    const wrapper = mount(<MainCarousel name={mockItem.name} styles={mockItem.styles} />);
    expect(wrapper.props().name).toEqual(mockItem.name);
  });
});

describe('<Item />', () => {
  it('uses a styled span to render the styleName', () => {
    const wrapper = mount(<Item style={mockItem.styles[0]} />);
    const styledComponent = wrapper.find('span').text();
    expect(styledComponent).toEqual('Porro');
  });
});
