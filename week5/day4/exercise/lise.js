// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// # Part II

// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page

// For example:
// you will fetch the random-word-api. This api will return a random word - for example : "happy"
// Using this word as a category, you will fetch one random gif with the category of "happy"
// and display it on the page

// # Part III

// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

// `https://api.giphy.com/v1/gifs/random?tag=${categoryUser}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

// .then() method - it takes one argument : the result of the previous promise

async function fetchWord () {
	await fetch('http://random-word-api.herokuapp.com/word?number=1')
	.then(response => {
			// let result = response.json(); 
			// //the method returns a promise that has a state (fulfilled) and a result
			// // which the Json string parses into a JS object
			// console.log("result", result)
			return response.json()
		})
	.then(result => {
		let [word] = result;
		console.log(result)
		fetchGif(word)
	})
	.catch(error => console.log("IN THE CATCH", error)) //catch an error if there is
}

async function fetchGif (wordrandom) {
	const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`) // return a promise with as a result a Response object
	.then(response => {
		if (response.status !== 200){
			throw new Error ("404 ERROR")	
		} else {
			return response.json(); //returns a promise
		}
	})
	.then(result => {
		console.log(result)
		if (result["data"] == []){
			throw new Error ("GIF NOT FOUND");
		} else {
			let gif = result["data"]["images"]["original"]["url"];
			let imageGif =  document.createElement("img");
			imageGif.setAttribute("src", gif);
			document.body.appendChild(imageGif)
		}
		
	})
	.catch(error => {
		let imageGif = document.createElement("img");
		imageGif.setAttribute("src", "https://i.pinimg.com/originals/13/3d/62/133d62f4c7611596b265b81bfb9be08c.gif");
		document.body.appendChild(imageGif)
		console.log("IN THE CATCH", error)
	})
}

fetchWord()