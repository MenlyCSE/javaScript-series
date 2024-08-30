// prototype = parent :)
let person = { name: 'Mosh' };

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true
});

person.name = 'john';

console.log(Object.keys(person));