// 1
function makeRequest() {
	objxhr = new XMLHttpRequest();

	objxhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
	objxhr.responseType = "json";
	objxhr.send();
	objxhr.onload = function () {
		console.log(objxhr.response.data);
	}
}
makeRequest()

// 2
function makeRequest2() {
	objxhr2 = new XMLHttpRequest();

	objxhr2.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
	objxhr2.responseType = "json";
	objxhr2.send();
	objxhr2.onload = function () {
		console.log(objxhr2.response.data);
	}
}
makeRequest2()
