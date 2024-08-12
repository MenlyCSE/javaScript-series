const checkSpeed = (speed) => {
    let points = 0;

    // replace with loop to avoid nesting
    if (speed >= 75) {
        points += (speed - 70) / 5;

        if (points >= 12)
            return 'License suspended';

        return `Point: ${Math.floor(points)}`;
    }
    
    if (speed <= 70)
        return 'Ok';

    return 'Please enter a value';
};

console.log(checkSpeed());
