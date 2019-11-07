import filtersReducer from '../../src/reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }); 
});


test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        startDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'testaction'
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
});

test('should startDate filter', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE', startDate };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toBe(startDate);
});

test('should endDate filter', () => {
    const endDate = moment()
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toBe(endDate);
});
