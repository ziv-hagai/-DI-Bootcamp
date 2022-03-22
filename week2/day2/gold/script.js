//Exercise 1
let lan = prompt("what is your language?").toLowerCase();

if (lan === "french") {
	console.log("Bonjour")
} else if (lan === "english") {
	console.log("Hello")
} else if 
(lan === "hebrew") {
	console.log("Shalom")
} else {
	console.log("Sorry")
}


//Exercise 2

let grade = prompt("what is your grade?");

if (grade > 90) {
	console.log("A")
} else if (grade > 80) {
	console.log("B")
} else if (grade >= 70) {
	console.log("C")
} else {
	console.log("D")
}


//Exercise 3
let v = prompt("write a verb").toLowerCase();
let end = v.slice(-3);

if (v.length >= 3 && end !== "ing") {
	v = v.concat('ing');
}
else if (v.length >= 3 && end === "ing") {
	v = v.concat('ly');
}

document.write(v)

