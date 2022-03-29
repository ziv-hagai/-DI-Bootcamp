let colors = ["blue", "yellow", "green", "pink"];

function changeColor(e) {
	document.body.style.background = window.getComputedStyle(e.target).backgroundColor;
}

for (let i=0; i<colors.length; i++) {

	let newbutton = document.createElement("button");

	newbutton.style.background = colors[i];
	newbutton.innerHTML = colors[i];
	document.querySelector("#container").appendChild(newbutton);
	newbutton.addEventListener('click', changeColor);
}

