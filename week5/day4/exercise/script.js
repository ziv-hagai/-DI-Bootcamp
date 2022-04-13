
// # Exercise : use fetch

// # PART I
// Use fetch to fetch one 1 random gif with the category of "cat", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My



// # Part II

// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// Then, you will fetch 1 random gif, depending on the word. The word will be the gif category

// Display the word and the gif on the page

// For example:
// you will fetch the random-word-api. This api will return a random word - for example : "happy"
// Using this word as a category, you will fetch one random gif with the category of "happy"
// and display it on the page

// # Part III

// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

function getWord (){
	let section = document.getElementById("container");

	fetch("http://random-word-api.herokuapp.com/word?number=1")
	.then(response => response.json())
	.then(value => {
		let title = document.createElement("p");
		let text = document.createTextNode(value[0]);
		title.appendChild(text);
		section.appendChild(title);
		return fetch(`https://api.giphy.com/v1/gifs/random?tag=${value[0]}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
	})
	
	.then(response => response.json())
	.then(gif => {
		let gifURL = gif["data"]["images"]["original"]["url"];
		
		if (gif["data"].length === 0) {
			throw new Error("no gif");
			
		} else {
			return gifURL
		}
	})
	.then(end => {
		let imageGif =  document.createElement("img");
		imageGif.setAttribute("src", end)
		section.appendChild(imageGif);
		return imageGif
	})
	.catch(error => {
		console.log(error.massage);
		fetch(`https://api.giphy.com/v1/gifs/random?tag=404&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
		.then(response => response.json())
		.then (fof => fof["data"]["images"]["original"]["url"])
		.then(error => {
			let imageGif =  document.createElement("img");
			imageGif.setAttribute("src", error)
			section.appendChild(imageGif);
			return imageGif
		})
	})
}


getWord()