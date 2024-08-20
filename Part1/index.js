// Reverse String
const myName = 'Menly';

const string = (name) => {
    let string = '';
    for (let i = name.length - 1; i >= 0; i--)
        string += name[i];

    return string;
};

console.log(string(myName));