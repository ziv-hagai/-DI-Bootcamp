// let username = "John";

// function checkName (){
//     console.log("In the function",username); //John
//     username += "Smith";
//     console.log("Still in the function",username); //JohnSmith
// }

// console.log("before the function", username); //John

// checkName()

// console.log("after the function", username); //JohnSmith


// let username = "John";

// function checkName (){
//     let username = "Tom";
//     console.log("In the function",username); //Tom
//     username += "Smith"; 
//     console.log("Still in the function",username); //TomSmith
// }

// console.log("before the function", username); //John

// checkName()

// console.log("after the function", username); //John


// Ask the user for his name and return it
// * first by using function declarations
// * then function expression,
// * then arrow function

// function name(){
//     let input = prompt("what's your name?")
//     return (input);
// }
// name()

// const name = function {
//     let input = prompt("what's your name?")
//     return (input);
// }
// name()

const name = () => prompt("what's your name?");

console.log(name())
