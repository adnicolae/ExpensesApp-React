// react test renderer
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../src/components/Header';
import toJson from 'enzyme-to-json';

test('should render header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').length).toBe(1); // check that we only have only one h1
    //expect(wrapper.find('h1').text()).toBe('Expensify'); // check that the text is expensify
    
    expect(toJson(wrapper)).toMatchSnapshot();

});


