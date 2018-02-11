import React from 'react';
import { shallow } from 'enzyme';

import { ErrorMessage, Loading } from '../FlashMessage';

describe('<Loading />', () => {
  it('renders dimmer', () => {
    const props = {active: true};
    const wrapper = shallow(<Loading {...props} />);
    expect(wrapper.find('Dimmer').props()).toMatchObject(props);
  });
});

describe('<ErrorMessage />', () => {
  it('renders error with message', () => {
    const wrapper = shallow(<ErrorMessage message="my error" />);
    expect(wrapper.contains("my error")).toEqual(true);
  });

  it('does not render when no message', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper.getElement()).toBeNull();
  });
});
