import { addExpense, removeExpense, editExpense } from '../../src/actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('myid', { description: 'new description value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'myid',
        updates: {
            description: 'new description value'
        }
    });
});

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'rent',
        amount: 10232100,
        createdAt: 1000,
        note: 'This was last month`s rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense default action object', () => {
    const defaultExpenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultExpenseData,
            id: expect.any(String)
        }
    });
});



