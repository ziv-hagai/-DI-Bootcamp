// Create a curried function, that returns the volume of an object
// the volume is calculated like this length * weight * height

// Call the function twice, for products of length 10cm. Weight and Height can differ

// Call the function twice, for products of length 10cm and weight 2 grams,  height can differ

function volume (length){
  return function (width){
    return function (hight){
        return length*width*hight;
    }
}
}
let lengthTen = volume(10);
lengthTen(2)(3);
lengthTen(4)(5);
let lengthTenWidthTwo = lengthTen(2);
lengthTenWidthTwo(6);
lengthTenWidthTwo(7);

// "John" -> return ["J", "o", "h", "n"]
//     -> return ["J", "O", "H", "N"]
//     -> "J.0.H.N"

// Create 3 function
// 1. First, that split the name
// 2. Then the second one make every letter uppercase 
// 3. Finally, the last one add . between each letter (join)

const split = name => name.split('');

const upper = splited => {
    splited.forEach((element, index) => splited[index] = splited[index].toUpperCase())
    return splited;
} 

const dots = upped => upped.join('.');

let result = dots(upper(split("John")));
console.log(result)




