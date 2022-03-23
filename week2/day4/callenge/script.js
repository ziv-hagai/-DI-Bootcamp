for (let i = 0; i < 7; i++) {
	let asterisk = '* ';
	let pyramid = asterisk.repeat(i) + "\n"
	console.log(pyramid);
}


// nested

for (let i = 1; i < 7; i++) {
	let pyramid = "";
	for (let j = 1; j <= i; j++) {
		pyramid += "* ";

	}
	console.log(pyramid);
}