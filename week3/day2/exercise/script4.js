
let form = document.querySelector("form")


function showV (e) {
	let r = document.getElementById("radius").value
	let v = document.getElementById("volume").value
	let c = 4/3*Math.PI*r**3
	v = c

}

form.addEventListener("submit", showV);

