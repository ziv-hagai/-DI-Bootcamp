//2
let winBattle = () => true;
let experiencePoints = (winBattle() ? 10 : 1);

console.log(experiencePoints)


// 3
let isString = (a) => (typeof a === 'string');


// 4
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, index) => {
	console.log(`${index+1}# choice is ${element}`)
});

const even = (element) => element === 'Violet';

colors.some(even) ? console.log('Yeah') : console.log('No...');


// 5
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach ((element, index) => {let suffix = index<3 ? ordinal[index+1] : ordinal[0]
	console.log(`${index+1}${suffix} choice is ${element}`)})


// 6

let bankAmount = 0
const vat = 0.17
let details = ["+200", "-100", "+146", "+167", "-2900"]

details.forEach((element, index) => {details[index] *= (1+vat); bankAmount += details[index]})
console.log(bankAmount)

