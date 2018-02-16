import React from 'react';
import { shallow } from 'enzyme';

import MainMenu from '../MainMenu';

describe('<MainMenu />', () => {
  const wrapper = shallow(<MainMenu />);

  it('renders a mneu', () => {
    expect(wrapper.find('Menu')).toHaveLength(1);
  });

  it('renders video transition by default', () => {
    const transition = wrapper.find('Transition');
    expect(transition).toHaveLength(1);
    expect(transition.find('Image')).toHaveLength(1);
  });
});
