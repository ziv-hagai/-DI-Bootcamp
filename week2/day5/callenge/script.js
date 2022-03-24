let init = Number(prompt("How many bottles would you like?"))

console.log(`	${init} bottles of beer on the wall
	${init} bottles of beer
	Take 1 down, pass it around
	${init-1} bottles of beer on the wall`);

let bottles = init-1

for (let i=2; i<=bottles; i++) {
	console.log(`	${bottles} bottles of beer on the wall
	${bottles} bottles of beer
	Take ${i} down, pass them around
	${bottles-i} bottles of beer on the wall`)
	bottles -= i; 
}
if (bottles === 1) {
	console.log(`	1 bottle of beer on the wall
	1 bottle of beer
	Take 1 down, pass it around
	0 bottle of beer on the wall`);
} else if (bottles) {
	console.log(`	${bottles} bottles of beer on the wall
	${bottles} bottles of beer
	Take ${bottles} down, pass it around
	0 bottle of beer on the wall`);
}