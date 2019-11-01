import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// add expense water and gas bill
// set text filter of 'bill'
// get visible expenses function
// print to screen

store.dispatch(addExpense({ description: 'Water Bill', amount: 20, createdAt: 2018 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 160, createdAt: 2019 }));

store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);



ReactDOM.render(<AppRouter />, document.getElementById('app'));


 