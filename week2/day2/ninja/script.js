//Exercise 1

let a = Number(prompt("enter person A's birth year"));
let b = Number(prompt("enter person B's birth year"));
if (a>b) {
	document.write(2 * a - b)
} else if (a<b) {
	document.write(2 * b - a)
} else {
	document.write("never")
}


// Exercise 2

let z = prompt("enter zipcode");
let x = z.search(/^\d{5}$/);

if (!x) {
	document.write("success")
} else {
	document.write("error")
}


//Exercise 3

let w = prompt("enter a word");
let newW = w.replace(/[aeiou]/gi, '');

document.write(newW)
