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
gameInfo.forEach((element) => usernames.push(element.username+'!'));
console.log(usernames)
// 2
let winners = []
gameInfo.forEach((element) => {element.score>5 ? winners.push(element.username) : null});

// 3
let total = 0
gameInfo.forEach((element) => total += element.score);
console.log(total)