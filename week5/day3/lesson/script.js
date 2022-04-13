// ## Exercise 1

// Write a function called `divide` that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."

function divide (a,b){
  try {
    let result;

    if (b !== 0) {
      result = a/b;
    } else {
      throw RangeError("You cannot divide by Zero")
    }
    console.log("result : ", result)

  } catch (error) {
    console.log(error.message)
  } finally {
    console.log("-----CALCULATOR---------")
  }
}

divide(6,3)
divide(5,0)


// ## Exercise 2

// Using the code below:


const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}

console.log("after")



// 1. Which type of error will be thrown ? Look on the different types errors on the Google
// 2. Is the console.log("after") will be shown on the console ?

// 1. can't reassign const
// 2.yes