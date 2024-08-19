//
const numbers = [1, 2, 3, 4];


const getMax = array => {
    // let currentNumber = array[0];
    // for (let i = 0; i <= array.length; i++)
    //     if (currentNumber < array[i])
    //         currentNumber = array[i];

    // return currentNumber;

    return array.reduce((accumulator, current) => (accumulator > current) ? accumulator : current);
};


console.log(getMax(numbers));