let morse = `{
	"0": "-----",
	"1": ".----",
	"2": "..---",
	"3": "...--",
	"4": "....-",
	"5": ".....",
	"6": "-....",
	"7": "--...",
	"8": "---..",
	"9": "----.",
	"a": ".-",
	"b": "-...",
	"c": "-.-.",
	"d": "-..",
	"e": ".",
	"f": "..-.",
	"g": "--.",
	"h": "....",
	"i": "..",
	"j": ".---",
	"k": "-.-",
	"l": ".-..",
	"m": "--",
	"n": "-.",
	"o": "---",
	"p": ".--.",
	"q": "--.-",
	"r": ".-.",
	"s": "...",
	"t": "-",
	"u": "..-",
	"v": "...-",
	"w": ".--",
	"x": "-..-",
	"y": "-.--",
	"z": "--..",
	".": ".-.-.-",
	",": "--..--",
	"?": "..--..",
	"!": "-.-.--",
	"-": "-....-",
	"/": "-..-.",
	"@": ".--.-.",
	"(": "-.--.",
	")": "-.--.-"
}`;
let morse1 = {
	0: "-----",
	1: ".----",
	2: "..---",
	3: "...--",
	
};

function toJs () {
	const pro = new Promise((resolve,reject) => {
		let morseJS = JSON.parse(morse);
		if (morseJS.length === 0) {
			reject("empty object")
		} else {
			resolve("got it");
			console.log(morseJS);		
			return morseJS		
		}
	})
}
toJs()


const test = ['a']

function toMorse (morseJS){
	let word = prompt('write a word').split('');
	console.log(word)
	const pro = new Promise((resolve,reject) => {
		word.forEach(element){
			if (!element in morse1) {
				reject('n')
			} else {
				resolve('y')
			}
		}
	})
	
}
toMorse()

function joinWords(morseTranslation){}