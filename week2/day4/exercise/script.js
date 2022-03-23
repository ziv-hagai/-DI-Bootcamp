//1

function infoAboutMe(){
	console.log("I'm Ziv, 37, like music")
}
infoAboutMe()


function infoAboutPerson(personName, personAge, personFavoriteColor) {
	console.log(`Your name is ${personName}, ${personAge} years old, and your color is ${personFavoriteColor}.`)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// 2

function calculateTip() {
	let bill = Number(prompt("what is your bill?"))
	let finalBill = 0;
	if (bill < 50) {
		finalBill = bill * 1.2;
	} else if (bill <= 200) {
		finalBill = bill * 1.15;
	} else {
		finalBill = bill * 1.1;
	}
	console.log(finalBill)
}

calculateTip()


//3

function isDivisible(d) {
	let sum = 0
	for (let i=0; i<500; i++) {
		if (!(i % d)) {
			console.log(i)
			sum += i;
		}
	}
	console.log(sum)
}
isDivisible()


//4

let stock = { 
	"banana": 6, 
	"apple": 0,
	"pear": 12,
	"orange": 32,
	"blueberry":1
}  

let prices = {    
	"banana": 4, 
	"apple": 2, 
	"pear": 1,
	"orange": 1.5,
	"blueberry":10
} 

let shoppingList = ['banana', 'orange', 'apple']

function myBill() {
	let totalPrice = 0
	for (const i of shoppingList) {
		if (stock[i] > 0) {
			totalPrice += prices[i];
			stock[i] -= 1;
		}
	}
	return(totalPrice)
}

console.log(myBill())


// 5

function changeEnough(itemPrice, amountOfChange) {
	let mySum = amountOfChange[0]/4 + amountOfChange[1]/10 + amountOfChange[2]/20 + amountOfChange[3]/100
	return (mySum >= itemPrice);
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))


// 6

function hotelCost() {
	let nights = prompt('How many nights will you stay?');
	while (!nights) {
		nights = prompt('How many nights will you stay?');
	}
	nights = Number(nights);

	while (isNaN(nights)) {
		nights = prompt('How many nights will you stay?');
	}
	nights = Number(nights);

	return(nights*140);
}


function planeRideCost() {
	let destination = prompt('Where will you fly?').toLowerCase();

	while (!destination) {
		destination = prompt('Where will you fly?').toLowerCase();
	}
	while (!isNaN(Number(destination))) {
		destination = prompt('Where will you fly?').toLowerCase();
	}

	let price = 0;

	if (destination === 'london') {
		price += 183;
	} else if (destination === 'paris') {
		price += 220;
	} else {
		price += 300;
	}
	return (price)
}

function rentalCarCost() {
	let days = prompt('For how many days will you rent a car?');
	while (!days) {
		days = prompt('For how many days will you rent a car?');
	}
	days = Number(days);

	while (isNaN(days)) {
		days = prompt('For how many days will you rent a car?');
	}
	let carPrice = days*40;
	if (days > 10) {
		carPrice *= 0.95
	}

	return(carPrice);
}

function totalVacationCost() {
	return (hotelCost() + planeRideCost() + rentalCarCost());
}

console.log(totalVacationCost())