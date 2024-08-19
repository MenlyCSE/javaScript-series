//
const movie = [
    {
        title: 'Gotham',
        year: 2018,
        rating: 4.5
    },
    {
        title: 'Mike Scores',
        year: 2018,
        rating: 4.7
    },
    {
        title: 'City Girls',
        year: 2018,
        rating: 3
    },
    {
        title: 'City Girls',
        year: 2017,
        rating: 4.5
    },
];

const result = movie
    .filter(movie => movie.year === 2018 && movie.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(movie => movie.title);


console.log(result);