let input = document.getElementsByTagName("input")[0];

let padEnter = document.getElementById('enter');
padEnter.addEventListener('click', clickEnter);

let padDel = document.getElementById('del');
padDel.addEventListener('click', clickDel);

let a = 0;
let b = 0;
let operations = ['+','-','*','/'];

let userRelult = 0;
let result = 0; 
let currentScore = 0;
let score = document.getElementById('score');

(function pad () {
	const dials = document.getElementsByClassName("button");
	for (i of dials) {
		i.addEventListener("click", padInput)
	}
	function padInput(e){
		if (input.value.length < 3) {
			input.value += e.target.innerText
		}
	}
})()

document.addEventListener('keydown', (e) => {
	if (e.which < 48 || e.which > 57) {
		e.preventDefault()
		if (e.which === 13) {
			clickEnter()
		} else if (e.which === 8) {
			clickDel()
		}
	} else if (input.value.length < 3) {
		input.value += e.key
	} 
}, false);

function clickEnter () {
	userRelult = input.value
	if (result === Number(userRelult)) {
		input.style.color = 'lime';
		currentScore += 10;

	} else {
		input.style.color = 'tomato';
		if (currentScore > 0) {
			currentScore -= 2
		}
	}
	score.textContent = currentScore;
}

function clickDel () {
	input.value = input.value.slice(0, -1);
}

function plus(){
	let exercise = document.getElementById('exercise')
	a = Math.round(Math.random()*99);
	while (a >= result) {
		result = Math.round(Math.random()*100);
	} 
	b = result - a
	exercise.innerHTML = `${a} + ${b} = `
}


function minus(){
	let exercise = document.getElementById('exercise')
	a = Math.round(Math.random()*99);
	while (a <= result || !result) {
		result = Math.round(Math.random()*99);
	} 
	b = a - result
	exercise.innerHTML = `${a} &#8722 ${b} = `
}

function multiply(){
	let exercise = document.getElementById('exercise')
	a = Math.round(Math.random()*8) + 2;
	b = Math.round(Math.random()*8) + 2;
	result = a * b
	exercise.innerHTML = `${a} &times ${b} = `
}

function divide(){
	let exercise = document.getElementById('exercise')
	result = Math.round(Math.random()*8) + 2;
	b = Math.round(Math.random()*8) + 2;
	a = result * b
	exercise.innerHTML = `${a} &#247 ${b} = `
}

function operation (chosen) {
	let choice = Math.floor(Math.random()*operations.length);
	console.log(choice)
	switch(choice) {
		case 0:
		if (chosen.includes('+')) {
			plus()
		}
		break;
		
		case 1:
		if (chosen.includes('-')) {
			minus()
		}
		break;
		
		case 2:
		if (chosen.includes('*')) {
			multiply()
		}
		break;
		
		case 3:
		if (chosen.includes('/')) {
			divide()
		}
		break;		
	}
}

operation(operations)


// query string: ?foo=lorem&bar=&baz
// var foo = getParameterByName('foo'); // "lorem"
// var bar = getParameterByName('bar'); // "" (present with empty value)
// var baz = getParameterByName('baz'); // "" (present with no value)
// var qux = getParameterByName('qux'); // null (absent)


// function getParameterByName(name, url = window.location.href) {
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }‏