// 1

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
	console.log(values);
});


// 2

// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 6 inputs:
// name of the first city, its latitude and its longitude
// name of the second city, its latitude and its longitude.

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

let form = document.forms[0]
form.addEventListener("submit",getCities)

function getCities (event) {
	event.preventDefault();
	const formArr = [];
	for (let i of form) {
		formArr.push(i.value);
	}
	getSunrise(formArr)
}

async function getSunrise (arr) {
	try {
		let first = await fetch(`https://api.sunrise-sunset.org/json?lat=${arr[1]}&lng=${arr[2]}`)
		let second = await fetch(`https://api.sunrise-sunset.org/json?lat=${arr[4]}&lng=${arr[5]}`)

		let [resultFirst, resultSecond] = await Promise.all([first,second])

		if (resultFirst.status !== 200 || resultSecond.status !== 200){
			throw new Error("ERROR STATUS")
		} else {
			let [objectsFirst, objectSecond] = await Promise.all([resultFirst.json(), resultSecond.json()])
			console.log(`${arr[0]} sunrise is at ${objectsFirst.results.sunrise}, ${arr[3]} sunrise is at ${objectSecond.results.sunrise}`)

		}

	} catch (err){
		console.log("IN THE CATCH", err)

	}
}


// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

