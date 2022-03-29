let form = document.querySelector("form")

function showV (e) {
	e.preventDefault();
	let r = Number(document.getElementById("radius").value)
	let v = document.getElementById("volume")
	let c = 4/3*Math.PI*r**3
	v.value = c
}

form.addEventListener("submit", showV);
