let words = prompt('Write some words separated by commas');
newWords = words.split(',');
newWords.sort((a,b) => b.length - a.length)
let side = newWords[0].length + 4;
words = words.split(',');

console.log('*'.repeat(side));

for (const item of words) {
	let spaces = newWords[0].length - item.length;
	console.log('* '+item+' '.repeat(spaces)+' *');
	// console.log(spaces)
}

console.log('*'.repeat(side));

