const input = document.getElementsByTagName("input")[0];

document.getElementById('enter').addEventListener('click', clickEnter);

document.getElementById('del').addEventListener('click', clickDel);

let player = localStorage.getItem('name');
document.getElementsByClassName('nav-item')[0].innerHTML=player;

let a;
let b;
let operations = localStorage.getItem('operations').split(',')

let userRelult = 0;
let result; 

let currentScore = Number(localStorage.getItem('score'));
let score = document.getElementById('score');
score.textContent = currentScore;

const lives = document.getElementsByClassName('lives');

const timeLine = document.getElementById('time');
let timeInt;

const pause = document.getElementById('pause');
let paused = false;
pause.addEventListener('click', togglePause);

function modal() {
	const modal = document.getElementsByClassName("modal")[0];
	document.getElementsByClassName("modal")[0].style.display = "block";
	document.getElementsByTagName("p")[0].textContent+=currentScore;
	clearInterval(timeInt);
}

function togglePause() {
	if (!paused)    {
		clearInterval(timeInt);
		paused = true;
		pause.innerHTML='&#x25BA';
    } else {
		timeInt = setInterval(timer, 30);
		paused = false;
	   	pause.innerHTML='&#x23F8';
    }
}

start()

function start () {
	a = 0;
	b = 0;
	result = 0;
	input.style.color = 'lightgrey';
	choose ();
	timeLine.style.width = '100%';
	if (!timeInt){
		timeInt = setInterval(timer, 30)
	}
}

function timer() {
	let timeWidth = Number(timeLine.style.width.slice(0,-1));
	timeWidth -= 0.1;
	timeLine.style.width = `${timeWidth}%`;
	if (!timeWidth){
		clickEnter()
	}
};

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
		input.value += e.key;
	} 
}, false);

function clickEnter () {
	input.disabled='true';
	if(!input.value) {
		input.value = '?'
	}
	userRelult = input.value;
	
	if (result === Number(userRelult)) {
		input.style.color = 'lime';
		currentScore += 10;

	} else {
		input.style.color = 'tomato';
		lives[lives.length-1].remove();
		if (currentScore > 0) {
			currentScore -= 2
		}
	}
		
	localStorage.removeItem('score');
	localStorage.setItem('score', currentScore);
	score.textContent = currentScore;
	clearInterval(timeInt);
	timeInt = null;

	if (lives.length == 0){
		modal()
	} else {
	setTimeout (start, 2000)
	}
}

function clickDel () {
	input.value = input.value.slice(0, -1);
}

function choose (){
input.value='';
	let choice = operations[Math.floor(Math.random()*operations.length)];
	
switch(choice) {
	case '+':
	plus();
	break;

	case '-':
	minus();
	break;

	case '*':
	multiply();
	break;

	case '/':
	divide();
	break;
	
	case '/':
	plus();
	break;
	}
}

function plus(){
	let exercise = document.getElementById('exercise')
	result = Math.round(Math.random()*100);
	while (a >= result || a<2) {
		a = Math.round(Math.random()*99);
	} 
	b = result - a
	exercise.innerHTML = `${a} + ${b} = `
}

function minus(){
	let exercise = document.getElementById('exercise')
	a = Math.round(Math.random()*99);
	while (a <= result || result<2) {
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