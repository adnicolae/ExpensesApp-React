// Export a stateless functional component
// Render info about each individual expense
// description, amount, createdAt value

import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;


