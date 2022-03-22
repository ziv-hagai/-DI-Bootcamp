// Exercise 1

for (let i=0; i<=15; i++) {
	if (i%2) {
		console.log(`${i} is odd`)
	} else {
		console.log(`${i} is even`)
	}
}



// Exercise 2

let names = ["john", "sarah", 23, "Rudolf",34];

// for (let i of names) {
	for (let i=0; i<5; i++) {
		if (typeof names[i] === 'string' && names[i][0] === names[i][0].toLowerCase()) {
			console.log(names[i].charAt(0).toUpperCase() + names[i].slice(1))
		}
	}
