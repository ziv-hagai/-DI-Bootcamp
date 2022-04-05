// 1
(a,b) => a+b;


// 2
function toGrams (kg) {
    kg *= 1000;
    return kg;
}
toGrams();

const moreToGrams = function(kg) {
    kg *= 1000;
    return kg;
}
moreToGrams();

// a declared function is hoisted and thus can be called earlier in the code

(kg) => kg *= 1000;


// 3

(function (children,partner,local,job) {
    console.log(`You will be a ${job} in ${local}, and married to ${partner} with ${children} kids.`)
})();


// 4

(function (username) {
    let brand = document.getElementsByClassName("navbar-brand")[0];
    brand.textContent = username;
})("user")
// what is the source of the picture?



// 5

// function makeJuice (size) {
//     let ingredients = []

//     function addIngredients (a="a",b="b",c="c") {
//         ingredients.push(a,b,c); 
//     }

//     addIngredients()

//     function displayJuice (element, index) {
//         console.log (`The client wants a ${size} juice, containing ${element[0]}, ${element[1]}, ${element[2]}`)
//     };
//     ingredients.forEach(displayJuice())
//     addIngredients()
//     addIngredients()
//     displayJuice()
// } 
// makeJuice()



function makeJuice (sizeJuice) {
    let ingredients = []

    function addIngredients (first='a', second='b', third='c'){
        ingredients.push(first, second, third);
    }
    addIngredients();
    addIngredients();

    function displayJuice () {
        let newP =  document.createElement("p");
        let text = document.createTextNode(`The client wants a ${sizeJuice} juice, 
            containing ${ingredients[0]} ${ingredients[1]} ${ingredients[2]}`)
        newP.appendChild(text);
        document.body.appendChild(newP);    
    };
    displayJuice()
}

makeJuice("small"); 
