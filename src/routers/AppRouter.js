import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const ExpenseDashboardPage = () => (
    <div>
        This is from  my dashboard component;
    </div>
);

const AddExpensePage = () => (
    <div>
        Add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        HEELP
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to='/'>Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to='/create' activeClassName="is-active">Create Expense</NavLink>
        <NavLink to='/edit' activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to='/help' activeClassName="is-active">Help</NavLink>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path='/' component={ ExpenseDashboardPage } exact={true} />
            <Route path='/create' component={ AddExpensePage } />
            <Route path='/edit' component={ EditExpensePage } />
            <Route path='/help' component={ HelpPage } />
            <Route component={ NotFoundPage } />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;