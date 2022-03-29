// Retrieve data from a form

//1. retrieve the form
// let formDetail = document.forms[0];
// let formDetail = document.forms.detailform;
// // console.log(formDetail)

// // 2. Rettrieve the elements of the form
// let formElements = formDetail.elements;
// console.log(formElements)

// // retrieve the first input by index
// let firstInput = formElements[0];
// // retrieve the second input by name
// let secondInput = formElements.lastname;

// console.log(`The firstInput is ${firstInput}`)
// console.log(`The secondInput is ${secondInput}`)


// Retrieve the data when I click on the form
// 1. Retrieve the form

let formDetail = document.forms[0];
let formDetailAnimal = document.forms[1];

function retrieveFormInfo (evt) {
	evt.preventDefault();
	console.log("test")

	// retrieve the data of the first input
	let firstInput = evt.target.elements[0].value;
	// let firstInput = formDetail.elements[0].value;

	//retrieve the data of the second input
	let secondInput = evt.target.elements[1].value;
	// let secondInput = formDetail.elements[1].value;

	// retrieve the paragraph
	let paragraph = document.getElementById("result");
	paragraph.textContent += `The data is ${firstInput} and ${secondInput}`; 
}


// When you click on a button in a form - you need to SUBMIT THE FORM
formDetail.addEventListener("submit", retrieveFormInfo)
formDetailAnimal.addEventListener("submit", retrieveFormInfo)