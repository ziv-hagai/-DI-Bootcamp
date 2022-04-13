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
}`

async function toJs (str) => {
	if (str.length === 0) {
		throw new Error('this string is empty -- ERROR IN 1st FUNCTION')
	} else {
		let obj = JSON.parse(str)
		console.log('first function --OK--')
		resolve(obj)
	}
}

async function toMorse = (obj) {
	return new Promise((resolve , reject)=>{
		let str = prompt('enter a word')
		let arrStr = str.split('')
		let returnArr=[]

		for(let i = 0 ; i < arrStr.length ; i++){
			if(arrStr[i] in obj){
				returnArr.push(obj[arrStr[i]])
			}else{
				throw new Error('One letter of the prompt doesnt exist in the object ERROR SECOND FUNCTION')
			}
       }//end of loop
       console.log('second function --OK--')
       return returnArr
   }
}

async function displayResult (){
	try {
		let morseObj = await toJs(morse);
		let arrayLetter = await toMorse(morseObj);
		let str =''
		arrayLetter.forEach(element => {
			str+= `${element}\n`
		});
		console.log('Third function --OK--')
		document.querySelector('.container').innerText = str
	} catch (err) {
		console.log(err.massage)
	}
}

displayResult ()