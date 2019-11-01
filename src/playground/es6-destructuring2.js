// Array destructuring in ES6

const address = ['1299 St Juniper', 'Newbury', 'Berkshire', 'RG14'];

console.log(`You are in ${address[1]} ${address[2]}.`)

// Destructure
// Matching is done by position
const [, city, county =  'West Berkshire'] = address;

console.log(`You are in ${city} ${county}.`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, small, medium, large] = item;

console.log(`A medium ${name} costs ${medium}`)





 