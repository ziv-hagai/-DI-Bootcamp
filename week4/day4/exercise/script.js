//ex1
const person = {
	name: 'John Doe',
	age: 25,
	location: {
		country: 'Canada',
		city: 'Vancouver',
		coordinates: [49.2827, -123.1207]
	}
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// ex2
function displayStudentInfo(studentObject)  {
	this.first = studentObject.first,
	this.last = studentObject.last,
	console.log(`your full name is ${first} ${last}`);
}


// ex3
const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users);

const double = usersArray.forEach(element => element[1] *= 2); 



// ex4
class Person {
	constructor(name) {
		this.name = name;
	}
}

const member = new Person('John');
console.log(typeof member);
// object


// ex5
// option 2


// ex6
// [2] === [2] //false
// {} === {} //false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5}; 
object1.number = 4;
//object1:4, object2:4, object3:4, object4: 5

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super (name, type, color);
	}
	sound(animalsound) {
		console.log(`${animalsound} is the sound of ${this.name} the ${this.color} ${this.type}`);
		return this
	}
}

let cow = new Mamal('jane','angus','brown');
cow.sound("moo")