import { createStore } from 'redux';

// Action Generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 10 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 101 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({ type: 'RESET'});

// Reducers
// 1. Reducers are pure functions.
// 2. Never change state or action.

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: -101 }));