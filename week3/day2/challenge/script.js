let button = document.getElementById("lib-button");
let listWords = [];

function retrieveData(){
	let allInputs = document.querySelectorAll("input");

	for(let i=0; i<allInputs.length;i++){
		listWords.push(allInputs[i].value);
	}
	let span = document.getElementById("story");
	span.textContent = `${listWords[2]} is ${listWords[1]} in ${listWords[4]}. He is ${listWords[3]} with a ${listWords[0]}`
}

button.addEventListener("click", retrieveData);