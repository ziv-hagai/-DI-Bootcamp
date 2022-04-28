# Review on Javascript

#### Basics

1. How to access the second element of the array `let arr = [3, 7, 10]`
arr[1]

2. For the code below, what does `arrNums.splice(2, 0)` return?

```javascript
let arrNums = [1, 2, 3, 4, 5];
```
does nothing

3. What is the result of the following code :

```javascript
const oneTwoThree = [1, 2, 3]
const sevenEightNine = [7, 8, 9]

const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
console.log(all)
```
[4, 5, 6, 1, 2, 3, 7, 8, 9]

4. What does the following code print to the console?

```javascript
let golf = {
 type: "sport",
 clubs: {
   high_end: "taylor made",
   low_end: "rusty basement clubs"
}
}  
golf.clubs.high_end = "callaway";
console.log(golf.clubs.high_end);
```
callaway

5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.

```javascript
const x = function(a, b){
   return a*b;
}
```
yes, x(a,b)

6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

```javascript
function x() {
 a = 5;
}
```
no, its inside the function scope

#### Functions

7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

```javascript
function sayHello() {
   return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!");
```
yes, it returns "Hello, JavaScript!"

8. Transform this function into an arrow function

```javascript
function sum(num1, num2){
  return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))
```

let sum = (num1, num2) => {
  return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))

9. What does the following code print to the console? Explain the process and concept behind it

```javascript
function foo () {
   function bar() {
     return "Poppin' bottles";
 }
 return bar();
}
console.log(foo());
```
"Poppin' bottles"

#### DOM

10. Which of the following events will you add in the `addEventListener()`method? 
☐ click
☐ onclick

click

11. Does the `addEventListener()` method allow you to add many events to the same element?

```javascript
x.addEventListener("mouseover", func1);
x.addEventListener("click", func2);
x.addEventListener("mouseout", func3);`
```
yes 

12. DOM exercise

1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions

2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red

let dom = () => {
    let p = document.createElement("p")
    let text = document.createTextNode("New Paragraph")
    p.appendChild(text)
    document.body.appendChild(p)
    p.addEventListener('mouseover',function() {
        this.style.color='red'
    });
    p.addEventListener('mouseout',function() {
        this.style.color='black'
    });
}

document.getElementsByTagName("button")[0].addEventListener("click",dom)

#### Array Methods

14. What is the value of `passed` in the following code?

```javascript
let marks = [67, 60, 89, 90, 67, 42];

let passed = marks.every(function(m) {
    return m >= 50;
});
```
false

15. What does the following code log?

```javascript
let nums = [10, 50, 88];

let bignums = nums.filter(function(n) {
  return n > 10;
});

console.log(bignums);
```
[50, 88]

16. Use a javascript array method to square the value of every element in the array. 

```javascript
const input = [ 1, 2, 3, 4, 5 ];
input.forEach((e,i) => input[i]=e**2); //code
   console.log(input) // [ 1, 4, 9, 16, 25]
   ```
   16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 

   ```javascript
   const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
   let total = secondInput.filter(n => n>0).reduce((p,c) => p+c,0) //code
 console.log(total) //42
 ```

 17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

 ```javascript
 const input = 'George Raymond Richard Martin';
 let mw = input.split(' ')
 mw.forEach((e,i)=>mw[i]=e[0]) 
 let initials=mw.join('')
 //code 
 console.log(initials)//'GRRM'
 ```

 #### Object and Classes

 18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example

 by Reference. for example, if you change an object inside a function it will be changed also outside. 

 19. What will be printed in the console

 ```javascript
 function Item(name, price) {
   this.name = name;
   this.price = price;
   this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
   }
} 

const cake = new Item("Chocolate Cake", 10);
cake.displayInfo();
```
"Chocolate Cake is for $ 10"

20. Refactor this code using Classes

class Item {
    constructor(name, price) {
       this.name = name;
       this.price = price;
   }
   displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
   }
}

const cake = new Item("Chocolate Cake", 10);
cake.displayInfo();

#### Promises

21. What will be the output and why ? What will be the state of the promise ?

```javascript
Promise.resolve('Success!')
.then(data => {
    return data.toUpperCase()
})
.then(data => {
    console.log(data)
})
```
'SUCCESS!', resolve

22. What log will be made by the following code, after 2 seconds?

```javascript
const p = new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve("OK");
  }, 2000);
});

p.then().then(function(data) {
   console.log(data);
});
```

log:'OK'

23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process

```javascript
async function f() {
  let result = 'first!';
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
});

  result = await promise;

  console.log(result);
}

f();
```
'done!', it's async so it will wait for the promise to resolve and only then console.log result (after it was modified to 'done!')

24. Use async await, and fetch to a fact on cats and display it `https://catfact.ninja/fact`. 
1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
2. Make sure to use try and catch

async function getData() {
    try {
        let result = await fetch('https://catfact.ninja/fact');
        let text = await result.json();
        display(text.fact);
    } catch (e) {
        console.error(e)
    }
}

function display (x) {
    let p = document.createElement('p')
    let inP = document.createTextNode(x)
    p.appendChild(inP)
    document.body.appendChild(p)
}

getData()
