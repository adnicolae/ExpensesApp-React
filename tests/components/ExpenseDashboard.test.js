import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../src/components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';

test('should render expense dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
