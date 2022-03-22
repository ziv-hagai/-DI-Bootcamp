let sentence = 'The movie is not that bad, I like it';
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');

if (wordNot<wordBad && wordBad >= 0 && wordNot >= 0) {
	notBad = sentence.slice(wordNot,wordBad+3) ;
	let newSentence = sentence.replace(notBad, "good");
	console.log(newSentence)
} else {
	console.log(sentence)
}

// let str = "Happy BirthDay";
// let patt = /birthday/i;
// let result = str.match(patt);
// console.log(result); //returns true

// if (result){
// 	console.log('Yes')
// } else{
// 	console.log('No');
// }
// let regex = /^.+@.+\..+$/;
// console.log(regex.test('johndoe@gmail.com')); //returns true