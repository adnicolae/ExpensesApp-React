const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            // use concat instead of push to not modify the array
            // return state.concat(action.expense);
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};