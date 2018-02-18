import React from 'react';
import { shallow } from 'enzyme';

import ActionCard from '../ActionCard';

describe('<ActionCard />', () => {
  let props = {
      name: "test",
      error: null,
      isLoaded: false,
      isDisabled: true,
      data: {
        id: 1,
        status: 1,
        status_str: 'yup',
        next_status_str: 'nope',
        start: "2018-02-04T07:30:00-08:00",
        end: "2018-02-04T17:15:00-08:00"
      }
  };

  it('renders a card', () => {
    const wrapper = shallow(<ActionCard {...props} />);
    expect(wrapper.find('Card')).toHaveLength(1);
  });

  it('renders loading with no data', () => {
    const {data, ...nodata} = props;
    const wrapper = shallow(<ActionCard {...nodata} data={{}} />);
    expect(wrapper.find('Card')).toHaveLength(1);
    expect(wrapper.find('Segment').props()).toMatchObject({loading: true});
  });

  it('translates dates to times', () => {
    const wrapper = shallow(<ActionCard {...props} />);
    expect(wrapper.find('CardDescription').contains('7:30:00 AM', '5:15:00 PM')).toEqual(true);
  });

  it('shows the label with the correct status', () => {
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
    expect(button.contains('test NOPE')).toEqual(true);
  });

  it('uses the click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<ActionCard {...props} onClick={handleClick} />);
    wrapper.find('Button').simulate('click');
    expect(handleClick.mock.calls).toHaveLength(1);
  });
});
