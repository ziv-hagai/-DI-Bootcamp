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
const toJs = (str) => {
	return new Promise((resolve, reject) => {
		if (str.length === 0) {
			reject('this string is empty -- ERROR IN 1st FUNCTION')
		} else {
			let obj = JSON.parse(str)
			console.log('first function --OK--')
			resolve(obj)
		}
	})
}
let object = toJs(morse).then((value)=>toMorse(value)).then((response)=>displayResult(response)).catch((error)=>console.log(error +'  ***CATCHED***'))
// toJs('').then((value) => console.log(value)).catch((error)=>console.log(error ))

const toMorse = (obj) =>{
	return new Promise((resolve , reject)=>{
		let str = prompt('enter a word')
		let arrStr = str.split('')
		let returnArr=[]
		
		for(let i = 0 ; i < arrStr.length ; i++){
			if(arrStr[i] in obj){
				returnArr.push(obj[arrStr[i]])
			}else{
				reject('One letter of the prompt doesnt exist in the object ERROR SECOND FUNCTION')
			}
       }//end of loop
       console.log('second function --OK--')
       resolve(returnArr)

    })//end of promise

}
const displayResult =(arr)=>{
	
	let str =''
	arr.forEach(element => {
		str+= `${element}\n`
	});
	console.log('Third function --OK--')
	document.querySelector('.container').innerText = str
}