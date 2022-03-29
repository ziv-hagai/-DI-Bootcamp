let input = document.getElementsByName("letters")[0]

input.addEventListener('keyup', onlyLetters);

function onlyLetters(e) {
	let unicode = Number(e.keyCode);
	if (unicode<65 || unicode>90) {
		input.value = input.value.slice(0,-1)
		console.log(unicode)
	}
}
