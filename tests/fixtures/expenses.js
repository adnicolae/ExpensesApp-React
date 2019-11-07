import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 600,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'credit',
    note: '',
    amount: 10,
    createdAt: moment(0).add(4, 'days').valueOf()
}, {
    id: '4',
    description: 'phone',
    note: '',
    amount: 1222,
    createdAt: moment(0).subtract(2, 'days').valueOf()
}
]