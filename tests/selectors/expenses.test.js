import selectExpenses from '../../src/selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[3], expenses[1]
    ]);
});

test('should filter by startDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[0]
    ]);
});

// filter by end date
test('should filter by endDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[0], expenses[3], expenses[1]
    ]);
});

// sort by date
test('should sort by date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[2], expenses[0], expenses[3], expenses[1]
    ]);
});

// sort by amount
test('should sort by amount value', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[3], expenses[1], expenses[0], expenses[2]
    ]);
});