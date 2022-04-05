// // ## Exercise 1 

// function setObj(person) {
//     person.age = 25; 
//     return person;
// }
// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };
// let personObj2 = setObj(personObj1);
// console.log(personObj1); // -> {name: 'Alex',age: 25}
// console.log(personObj2); // -> {name: 'Alex',age: 25}

// // ## Exercise 2

// function setObj(person) {
//     person = {
//         name: 'John',
//         age: 50
//     };

//     return person;
// }
// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };
// let personObj2 = setObj(personObj1);
// console.log(personObj1); // -> {name: 'Alex',age: 30}
// console.log(personObj2); // -> {name: 'John',age: 50}

// // Self-Invoking function
// // 1. Add in your html file a div with an id of container
// // 2. Create a self invoking function that takes one parameter the name of the user
// // 3. When invoked, the function adds the name of the user in a sentence in the div

// (function (username) {
//     let container = document.getElementById("container");
//     let newp = document.createElement("p");
//     let text = document.createTextNode(username);
//     newp.appendChild(text);
//     container.appendChild(newp)
// })("ziv");



// Exercise 1
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.
// 4. In the `startWars` function, create a function named `displayCharacter` should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once


function starWars(spaceship){
    let characters = [];

    //nested function                    default parameter
    function createCharacters(firstname, lastname="Smith"){
        let fullname = `${firstname} ${lastname}`;
        characters.push(fullname);
    }

    // nested function
    function displayCharacters(){
        let container = document.getElementById("container");

        characters.forEach((element) => {
            let newP =  document.createElement("p");
            let text = document.createTextNode(`${element} is in the spaceship ${spaceship}`);
            newP.appendChild(text);
            container.appendChild(newP);
        })
    }

    createCharacters("Chewbacca");
    createCharacters("Dark", "Vador");
    displayCharacters()
}

starWars("The Devastator");
starWars("Republic Attack Cruiser");






















// Exercise2
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `displayCharacter` function should now display in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens? (edited) 






