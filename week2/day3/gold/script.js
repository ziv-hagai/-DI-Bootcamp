//1

let numbers = [123, 8409, 100053, 333333333, 7]

for (let item of numbers) {
	console.log(item % 3 == 0)
}


//2

let guestList = {
	randy: "Germany",
	karla: "France",
	wendy: "Japan",
	norman: "England",
	sam: "Argentina"
}

let student = prompt("what is your name?")

if (student in guestList) {
	console.log(`Hi! I'm ${student} and I'm from ${guestList[student]}`)
} else {
	console.log("Hi! I'm a guest.")
}


//3

let age = [20,5,12,43,98,55];
let sum = 0

for (item of age) {
	sum += item;
}

console.log(sum)
age.sort(function(a, b){return b - a});
console.log(age[0])

