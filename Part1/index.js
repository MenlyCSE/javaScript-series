// display properties
const showProperties = (object) => {
    for (let props in object) 
        if (typeof object[props] === 'string')
            console.log(`${props}: ${object[props]}`);
};

const movie = {
    title: 'Aqua man',
    releaseYear: 2018,
    rating: 4.5,
    directors: 'Tony Starx'
};

showProperties(movie);