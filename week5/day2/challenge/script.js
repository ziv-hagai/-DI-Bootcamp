document.forms[0].addEventListener("submit", makeRequest);
document.getElementById("all").addEventListener("click", deleteAll);

function deleteAll (){
	let divs = document.getElementsByTagName("div");
	for (i of divs) {
		i.style.display = 'none';
	}
}

function makeRequest(event) {
	event.preventDefault();

	let find = document.getElementsByTagName("input").value;
	objxhr = new XMLHttpRequest();

	objxhr.open("GET", `https://api.giphy.com/v1/gifs/search?q=${find}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

	objxhr.responseType = "json";
	objxhr.send();
	objxhr.onload = function () {
		let num = Math.round(Math.random()*objxhr.response.data.length);
		let gif = objxhr.response.data[num].images.preview_gif.url;
		let img =document.createElement("img");
		img.setAttribute("src",gif);
		let div = document.createElement("div");
		document.body.appendChild(div);
		let del = document.createElement('button');
		let text = document.createTextNode("delete");
		del.appendChild(text);
		div.appendChild(img);
		div.appendChild(del);
		del.addEventListener("click", deleteGif);
		function deleteGif (){
			div.style.display = 'none';
		}
	}
}
