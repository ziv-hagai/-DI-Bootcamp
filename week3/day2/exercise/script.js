
//1
console.log(document.querySelector("h1").innerText)

//2
document.querySelector("article").lastElementChild.remove()

// 3
function changeColor() { h2.style.background = "red" }
let h2 = document.querySelector("h2");
h2.addEventListener('click', changeColor);

// 4
function hide() { h3.style.display = "none" }
let h3 = document.querySelector("h3");
h3.addEventListener('click', hide);


// 5
function bold() { document.body.style.fontWeight = "bold" }
let btn = document.querySelector("button");
btn.addEventListener('click', bold);
