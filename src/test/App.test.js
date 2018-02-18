import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  const wrapper = shallow(<App />);
  const response = {
    id: 1,
    status: 1,
    status_str: 'yup',
    next_status_str: 'nope',
    start: "2018-02-04T07:30:00-08:00",
    end: "2018-02-04T17:15:00-08:00"
  };

  it('renders the app', () => {
    expect(wrapper.find('CardGroup')).toHaveLength(1);
  });

  it('renders cards with correct data', () => {
    wrapper.setState({door: {data: response}});
    expect(wrapper.find('ActionCard')).toHaveLength(2);
    expect(wrapper.find('ActionCard').first().props()).toMatchObject({data: response});
    expect(wrapper.find('ActionCard').last().props()).toMatchObject({data: {}});
  });
});
