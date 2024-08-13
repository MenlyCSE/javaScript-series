// 10: 3, 6, 9
// 10: 5, 10
// sum: 33

const sum = (limit) => {
    if (typeof limit !== 'number')
        console.log('Please enter a numerical value...');

    let divisibles = {
        three: 0,
        five: 0
    };

    // get multiples
    for (let i = 0; i <= limit; i++) {
        (i % 3 === 0) ? divisibles.three += i : divisibles.three += 0;
        (i % 5 === 0) ? divisibles.five += i : divisibles.five += 0;
    }

   return `Sum: ${divisibles.three + divisibles.five}`;
};

// console.log(sum(10));