

function makeRequest(categoryUser){
	fetch(`https://api.giphy.com/v1/gifs/random?tag=${categoryUser}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
	.then(response => {
		// console.log(response) // RESPONSE OBJECT
		// console.log(response.json())
		// parsing the json string to a js object
		// and returns a promise

		if (response.status !== 200){
			throw new Error("Not good status")
		}
		return response.json()
	})
	.then(gif => {
		console.log(gif)
		let gifURL = gif["data"]["images"]["original"]["url"];
		let section = document.getElementById("container");
		let imageGif =  document.createElement("img");
		imageGif.setAttribute("src", gifURL)
		section.appendChild(imageGif);
		return "abc"
	})
	.then(string => console.log(string))
	.catch(error => error)
}