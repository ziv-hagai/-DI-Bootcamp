let pics = [
"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
"https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
"https://images.pexels.com/photos/3439576/pexels-photo-3439576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
]

let section = document.getElementById("container");

function createImg(){
	for (let i = 0; i<pics.length; i++){
		let randomNumber = Math.floor(Math.random() * pics.length);
		// create an img
		let newImg = document.createElement("img");
		newImg.classList.add("animals");
		newImg.setAttribute("src", pics[randomNumber]);
		//append the image on the section
		section.appendChild(newImg);
	}
}

createImg();


// function changeColor(e) {
// 	let styleBtn = window.getComputedStyle(e.target).backgroundColor;
// 	document.body.style.background = styleBtn;
// }

// for (let i=0; i<colors.length; i++) {

// 	let newbutton = document.createElement("button");

// 	newbutton.style.background = colors[i];
// 	newbutton.innerHTML = colors[i];
// 	document.querySelector("#container").appendChild(newbutton);
// 	newbutton.addEventListener('click', changeColor);
// }

