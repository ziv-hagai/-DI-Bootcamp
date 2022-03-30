let board = document.querySelector(".board");
let blanks = board.getElementsByTagName("div");
let side = document.querySelector(".colors");
let colors = side.getElementsByTagName("div");
let currentColor = '0';
let mouseDown = false;
let body = document.getElementsByTagName("body")[0];
let clear = body.getElementsByTagName('button')[0];

//creating board

for (let i=0; i<2400; i++) {
	let div = document.createElement("div")
	board.appendChild(div)
}

// pick a color
for (let i of colors) {
	i.addEventListener("click", pickColor)
}

function pickColor(e){
	currentColor = e.target.style.backgroundColor;
}

// paint
body.addEventListener("mousedown",function(e){
	mouseDown = true;
})

body.addEventListener("mouseup",function(e){
	mouseDown = false;
})

for (let i of blanks) {
	i.addEventListener("mouseover", paint)
}


function paint (e){
	if (mouseDown) {
		e.target.style.backgroundColor = currentColor;
	}	
}

// clear
clear.addEventListener("click", refresh)

function refresh () {
	location.reload()
}