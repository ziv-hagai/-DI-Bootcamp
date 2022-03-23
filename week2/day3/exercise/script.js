// //Exercise 1

let people = ["Greg", "Mary", "Devon", "James"]

people.shift();
people.splice(2,1,"Jason");
people.push("Ziv");
console.log(people.indexOf("Mary"))
let newPeople = people.slice(1,-1);
console.log(people.indexOf("Foo"))
// -1 means not found
let last = people.slice(-1).toString();

for (let item of people) {
	console.log(item)
	if (item === 'Jason') {
		break;
	}
}


// //Exercise 2

let colors = ['red', 'blue', 'green', 'yellow', 'orange']
let suffix = ['st', 'nd', 'rd', 'th', 'th']

for (let i=0; i < colors.length; i++) {
	console.log(`My ${i+1}${suffix[i]} choice is ${colors[i]}`);
}


// //Exercise 3

let n = 0;
while (n < 10) {
	let n = Number(prompt("insert a number"));
	if (!isNaN(n) && n > 10) {
		break;	
	}
}


// //Exercise 4

let building = {
	numberOfFloors : 4,
	numberOfAptByFloor : {
		firstFloor : 3,
		secondFloor : 4,
		thirdFloor : 9,
		fourthFloor : 2,
	},
	nameOfTenants : ["Sarah", "Dan", "David"],
	numberOfRoomsAndRent:  {
		sarah: [3, 990],
		dan :  [4, 1000],
		david : [1, 500],
	},
}

console.log(building.numberOfFloors)
console.log(`There are ${building.numberOfAptByFloor.firstFloor} apartments on the 1st frore & ${building.numberOfAptByFloor.thirdFloor} on the 3rd.`)
console.log(`the 2nd tenant is ${building.nameOfTenants[1]} who has ${building.numberOfRoomsAndRent['dan'][0]} rooms`)

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.sarah[1] > building.numberOfRoomsAndRent.dan[1]) {
	building.numberOfRoomsAndRent.dan[1] = 1200; 
}


// //Exercise 5

let family = {dad: 'Ziv', mom: 'Anat', oldSon: 'Gur', youngSon: 'Eytam'}

for (const key in family) {
	console.log(key)
}

for (const key in family) {
	console.log(family[key])
}


// //Exercise 6

let details = {
	my: 'name',
	is: 'Rudolf',
	the: 'raindeer'
}

for (const i in details) {
	console.log(`${i} ${details[i]}`)
}


//Exercise 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let secret = '';

for (let item of names) {
	secret = secret.concat(item[0]);
}
secret = secret.split('').sort().join('');

console.log(secret)