
async function fetchWord() {
	let response = await fetch('http://random-word-api.herokuapp.com/word?number=1');
	return response.json();
}
async function fetchGif(word) {
	let response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
	let responseAsJSObject = response.status !== 200 ? (function(){throw new Error ("404 ERROR")}()) : response.json();
	return responseAsJSObject;
}
function appendGifToBody(gifUrl){
	let imageGif = document.createElement("img");
	imageGif.setAttribute("src", gifUrl);
	document.body.appendChild(imageGif);
}
async function start() {
	try {
		let randomWordJSObject = await fetchWord();
        // ['happy'] = randomWordJSObject
        let [word] = randomWordJSObject;
        // word = 'happy';
        let result = await fetchGif(word);
        if (result["data"] == []) {
        	throw new Error("GIF NOT FOUND");
        } else {
        	let gifUrl = result["data"]["images"]["original"]["url"];
        	appendGifToBody(gifUrl);
        }
    } catch (error) {console.log("IN THE CATCH", error.message)}
}
start();