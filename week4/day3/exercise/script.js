// ex1
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); //['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]); //['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); //[undefined, undefined]


//ex2

let users = [
{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];


const hello = users.map(item => console.log(`Hello ${item.firstName}`))

const full = users.filter(item => item.role === 'Full Stack Resident')

let fuller = users
.filter(item => item.role === 'Full Stack Resident')
.map(item => console.log(`Good job ${item.firstName}`))


// ex3

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let single = epic.reduce((all,word) => all+word+' ','');


// ex4

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

const passed = student
.filter(item => item.isPassed)
.map(item => console.log(`Good job ${item.name}, you passed the course in ${item.course}`))






