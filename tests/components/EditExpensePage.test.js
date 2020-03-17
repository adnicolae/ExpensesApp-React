import React from 'react';
import { EditExpensePage } from '../../src/components/EditExpensePage';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[2]}/>);
});

// should render edit expense page
// snapshot
test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


// should handle edit expense
// spies
test('should handle edit expense', () => {
    // wrapper.find('ExpenseForm').prop('expense')(expense[0]);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});


// should handle remove expense
// spies
test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});