const person = {
    name: 'Andrew',
    age: 23,
    location: {
        city: 'Newbury',
        temp: 13
    }
}

const { name: firstName = 'BackupValue', age, location } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature, defaultvalue = 'def' } = person.location;

// Although if temp is 0 then it is falsy
if (city && temperature) {
    console.log(`${name} is ${age}, from ${location.city} where temperature is ${location.temperature}`);
    console.log(`${defaultvalue}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-published' } = book.publisher;

// if valid publisher and name value, use it, else use default of 'self-published'
console.log(`${publisherName}`);
