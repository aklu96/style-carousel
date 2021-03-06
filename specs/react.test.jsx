import React from 'react';
import { mount, shallow } from 'enzyme';

function Fixture() {
  return (
    <div>
      <input id="disabled" disabled />
      <input id="not" />
    </div>
  );
}

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = mount(<Fixture />);
    expect(wrapper.find('#disabled')).toBeDisabled();
    expect(wrapper.find('#not')).not.toBeDisabled();
  });
});
