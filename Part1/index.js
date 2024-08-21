// 
const numbers = [1, 2, 3];

const testArray = (array) => {
    if (!Array.isArray(array))
        throw new Error('Invalid input!');

    console.log('Working :)')
};

try {
    console.log(testArray(numbers));
}
catch (error) {
    console.error('NO!');
}