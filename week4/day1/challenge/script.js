const gameInfo = [
{
 username: "john",
 team: "red",
 score: 5,
 items: ["ball", "book", "pen"]
},
{
 username: "becky",
 team: "blue",
 score: 10,
 items: ["tape", "backpack", "pen"]
},
{
 username: "susy",
 team: "red",
 score: 55,
 items: ["ball", "eraser", "pen"]
},
{
 username: "tyson",
 team: "green",
 score: 1,
 items: ["book", "pen"]
},
];

// 1
let usernames = []
gameInfo.forEach((element, index) => usernames.push(gameInfo[index].username+'!'));

// 2
let winners = []
gameInfo.forEach((element, index) => {gameInfo[index].score>5 ? winners.push(gameInfo[index].username) : null});


// 3
let total = 0
gameInfo.forEach((element, index) => total += gameInfo[index].score);
console.log(total)