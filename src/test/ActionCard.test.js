import React from 'react';
import { shallow } from 'enzyme';

import ActionCard from '../ActionCard';

describe('<ActionCard />', () => {
  let props = {
      id: 1,
      key: 1,
      name: "test",
      status: 1,
      status_name: ["nope", "yup"],
      status_actions: ["no", "yes"],
      start: "2018-02-04T07:30:00-08:00",
      end: "2018-02-04T17:15:00-08:00"
  };

  it('renders', () => {
    const wrapper = shallow(<ActionCard {...props} />);
    expect(wrapper.find('Card')).toHaveLength(1);
  });

  it('translates dates to times', () => {
    const wrapper = shallow(<ActionCard {...props} />);
    expect(wrapper.find('CardDescription').contains('7:30:00 AM', '5:15:00 PM')).toEqual(true);
  });

  it('shows the correct label', () => {
    const wrapper = shallow(<ActionCard {...props} />);
    const label = wrapper.find('Label');
    expect(label).toHaveLength(1);
    expect(label.contains('YUP')).toEqual(true);
    expect(label.props()).toMatchObject({color: 'green'});
  });

  it('shows a button with the correct action', () => {
    const wrapper = shallow(<ActionCard {...props} />);
    const button = wrapper.find('Button');
    expect(button).toHaveLength(1);
    expect(button.contains('NO test')).toEqual(true);
  });

  it('uses the click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<ActionCard {...props} onClick={handleClick} />);
    wrapper.find('Button').simulate('click');
    expect(handleClick.mock.calls).toHaveLength(1);
  });
});
