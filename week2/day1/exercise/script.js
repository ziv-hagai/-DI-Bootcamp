//Exercise 1
let favFood = "mushroom";
let favMeal = "lunch";
console.log(`I eat ${favFood} at every ${favMeal}`);


//Exercise 2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`
console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`);

myWatchedSeries.splice(2, 1, "friens");
myWatchedSeries.push("louie");
myWatchedSeries.unshift("the wire");
myWatchedSeries.splice(1, 1);
let me = myWatchedSeries.slice(1,2);
me = me.toString();
console.log(me.charAt(2));
console.log(myWatchedSeries);


//Exercise 3
let cel = 37;
let fah = cel * 1.8 + 32;
console.log(`${cel}ºC is ${fah}ºF`);


//Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55 (a simple addition of 2 numbers)
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23 (a was reassigned)
// Actual: 23

//c: undefined (no value was assign to c)

console.log(3 + 4 + '5');

// Prediction: 345 (i was wrong thinking because one is 5 string then it all be converted to strings)
// Actual: 75


//Exercise 5

typeof(15)
// Prediction: 'number' (well it's a number)
// Actual: 'number'

typeof(5.5)
// Prediction: 'number' (same)
// Actual: 'number'

typeof(NaN)
// Prediction: 'number' (fuuny but NaN is a case of a number)
// Actual: 'number'

typeof("hello")
// Prediction: 'string' (well it's a string)
// Actual: 'string'

typeof(true)
// Prediction: 'boolean' (well it's a boolean)
// Actual: 'boolean'

typeof(1 != 2)
// Prediction: 'boolean' (all comparisons are bool)
// Actual: 'boolean'

"hamburger" + "s"
// Prediction: 'hamburgers' (addition of strings)
// Actual: 'hamburgers'

"hamburgers" - "s"
// Prediction: NaN (can't subtract strings)
// Actual: NaN

"1" + "3"
// Prediction: '13' (1 & 3 are strings)
// Actual: '13'

"1" - "3"
// Prediction: NaN (can't subtract strings)
// Actual: -2

"johnny" + 5
// Prediction: 'johnny5' (if one is a string then the otehr is converted to string)
// Actual: 'johnny5'

"johnny" - 5
// Prediction: NaN (can't subtract strings)
// Actual: NaN

99 * "hello"
// Prediction: NaN (can't multiply strings)
// Actual: NaN

1 != 1
// Prediction: false (it's not equal)
// Actual: false

1 == "1"
// Prediction: true (it's equal)
// Actual: true

1 === "1"
// Prediction: false (it's the same value but different type)
// Actual: false


//Exercise 6

5 + "34"
// Prediction: '534' (if one is a string then the otehr is converted to string)
// Actual: '534'

5 - "4"
// Prediction: 1 (can't subtract strings so they are converted to numbers)
// Actual: 1

10 % 5
// Prediction: 0 (no remainder)
// Actual: 0

5 % 10
// Prediction: 5 (the remainder)
// Actual: 5

"Java" + "Script"
// Prediction: 'JavaScript' (addition of strings)
// Actual: 'JavaScript'

" " + " "
// Prediction: '  ' (addition of strings)
// Actual: '  '

" " + 0
// Prediction: ' 0' (if one is a string then the otehr is converted to string)
// Actual: ' 0'

true + true 
// Prediction: 2 (true is like 1)
// Actual: 2

true + false
// Prediction: 1 (false is like 0)
// Actual: 1

false + true
// Prediction: 1 (same)
// Actual: 1

false - true 
// Prediction: -1 (same)
// Actual: -1

!true
// Prediction: false (! is not)
// Actual: false

3 - 4
// Prediction: -1 (simple subtraction)
// Actual: -1

"Bob" - "bill"
// Prediction: NaN (can't subtract strings)
// Actual: NaN
