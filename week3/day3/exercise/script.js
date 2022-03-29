let press = document.getElementsByTagName("button")
press.addEventListener("click", myMove)

function myMove() {
	let box = document.getElementById("animate")
	let pos = 0
	let move = setInterval(function(){

		if (pos >= 350) {
			clearInterval(move);
		}
		pos++;
		box.style.left = pos+"px"
	}, 5)
}