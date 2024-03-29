import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../src/components/NotFoundPage';
import expenses from '../fixtures/expenses';

test('should render not found page', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});
