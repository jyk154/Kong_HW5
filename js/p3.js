//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

const cLastNameResults = studentList.filter(list => list.lastName.startsWith("C")).map(list=> {
    return {
        firstname: list.firstName,
        lastname: list.lastName,
        minscore: Math.min.apply(null, list.scores),
        maxscore: Math.max.apply(null, list.scores),
        avgGrade: list.scores.reduce((a,b) => a+b) / list.scores.length
    }
});

//Output
console.log(cLastNameResults);
