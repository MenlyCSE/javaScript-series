// 10: 3, 6, 9
// 10: 5, 10
// sum: 33

const sum = (limit) => {
    if (typeof limit !== 'number')
        console.log('Please enter a numerical value...');

    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0))
            sum += i;
    }

   return `Sum: ${sum}`;
};

// console.log(sum(10));