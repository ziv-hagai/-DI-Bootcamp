let board = document.querySelector(".board");
let blanks = board.getElementsByTagName("div");
let side = document.querySelector(".colors");
let colors = side.getElementsByTagName("div");
let currentColor;
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

for (let i of blanks) {
	i.addEventListener("mouseover", paint)
	i.addEventListener("mousedown",function(e){
		mouseDown = true;
		paint(e)
	})
	i.addEventListener("mouseup",function(e){
		mouseDown = false;
	})
}

function paint (e){
	if (mouseDown) {
		e.target.style.backgroundColor = currentColor;
		console.log(e.target)
	}	
}

// clear
clear.addEventListener('click',function(){
	for(i of blanks){
		i.style.backgroundColor = "white";
	}
})