//
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
];

console.log(courses.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
}));