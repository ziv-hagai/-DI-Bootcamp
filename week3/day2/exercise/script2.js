//1
let form = document.querySelector("form")
console.log(form)

// 2
let fid = document.getElementById("fname")
console.log(fid)
let lid = document.getElementById("lname")
console.log(lid)


// 3
let fname = document.getElementsByName("fname");
console.log(fname)
let lname = document.getElementsByName("lname");
console.log(lname)


// 4

let formDetail = document.forms[0];
let ul = document.getElementsByClassName("usersAnswer")[0];

function retrieveFormInfo (evt) {
	evt.preventDefault();

	let firstInput = evt.target.elements[0].value;
	let secondInput = evt.target.elements[1].value;
	let fi = document.createElement("li");
	let si = document.createElement("li");
	ul.appendChild(fi);
	ul.appendChild(si);
	fi.textContent += `${firstInput}`;
	si.textContent += `${secondInput}`;
}

form.addEventListener("submit", retrieveFormInfo);

// not sure how to DRY it