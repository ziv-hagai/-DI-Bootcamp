// let famousPeople = [
// {
//     name: "Angelina Jolie",
//     job: "actor",
//     age: 80
// },
// {
//     name: "Georges Clooney",
//     job: "actor",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     job: "actor",
//     age: 5
// },
// {
//     name: "Kayne West",
//     job: "singer",
//     age: 16
// },
// {
//     name: "Britney Spears",
//     job: "singer",
//     age: 100
// }
// ]
// // 1. Use the map method, to create a new array that contains only the name of the actors
// // 2. Use the map method, to create a new array , that contains objects, each object contains the name of the actor, and it's job
// // 3. BONUS: Use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")


// let newFamousPeople = famousPeople.map (value => value.name);
// // console.log(newFamousPeople)

// let newerFamousPeople = famousPeople.map ((value) => {
//     delete value.age;
//     return value;
// })    
// console.log(famousPeople)

// newerFamousPeople.forEach((element) => {
//     let newP =  document.createElement("p");
//     let text = document.createTextNode(`${element.name}, ${element.job}`)
//     newP.appendChild(text);
//     document.body.appendChild(newP);
// })

// ## Exercise 1:  create a new array that filters only the positive value
// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// let positive = numbers.filter(element => element > 0);
// console.log(positive)




// // ## Exercise 2: Suppose you have a list of Star Trek characters,
// // and you want to get just the characters that appeared in Star Trek: The Next Generation.
// // Use filter() to filter the array of characters below

// const characters = [
// { name: 'James T. Kirk', series: ['Star Trek'] },
// { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
// { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
// { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// ]; 

// const nextGen = characters.filter(element => element.series.includes('Star Trek: The Next Generation'));
// console.log(nextGen)


// // ## Exercise 3 NOT MANDATORY - send me the result by slack
// // Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]
// let colors = ["blue", "red", "red", "blue", "yellow"]

// const noDuplicates = colors.filter((item, pos) => colors.indexOf(item) == pos);
// console.log(noDuplicates)

// # Reduce
// ## Exercise 1
const students = [
{name: 'Rich', score: 33}, 
{name: 'Peter', score: 55},
{name: 'John', score: 75}
];

const stuSum = students.reduce((sum, item) => sum + item["score"],0);
console.log(stuSum)
// Find the sum of the score of the students using reduce



// # Exercise2
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaning map and reduce
let voters = [
{name:'Bob' , age: 30, voted: true},
{name:'Jake' , age: 32, voted: true},
{name:'Kate' , age: 25, voted: false},
{name:'Sam' , age: 20, voted: false},
{name:'Bob' , age: 30, voted: true},
];

// const votersNum = voters.reduce((sum, item) => {
//     if (item.voted) {
//         sum++;
//     }
//     return sum;},0)

const votersNum = voters.map((item) => {
    if (item.voted) {
        return item;
    }
})

console.log(votersNum)