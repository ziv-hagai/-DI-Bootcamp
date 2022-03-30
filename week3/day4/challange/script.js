let listTasks = [];
let input = '';
let add = document.getElementsByTagName("button")[0];
let form = document.forms[0];

let list = document.getElementsByClassName("listTasks")[0];
form.addEventListener("submit",addTask)

function addTask(event){
	event.preventDefault()
	let myInput = document.getElementsByTagName("input")[0]
	input = myInput.value
	if (input.length > 0) {
		listTasks.push(input);
		let div = document.createElement("div");
		let span = document.createElement("span");
		span.textContent = input;
		let x = document.createElement("span");
		x.setAttribute("class","fa-solid fa-rectangle-xmark");
		let check = document.createElement("input");
		check.setAttribute("type", "checkbox");
		div.appendChild(x);
		div.appendChild(check);
		div.appendChild(span);
		list.appendChild(div);
		myInput.value = '';
	}
}


// type="checkbox"
// x button