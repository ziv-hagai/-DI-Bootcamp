// 1
let allBoldItems = []

// 2
function getBold_items() {
	let x = document.querySelectorAll("strong")
	for (i=0; i<x.length; i++) {
		allBoldItems.push(x[i]);
	}
}
getBold_items()

// 3
function highlight() {
	for (i=0; i<allBoldItems.length; i++) {
		allBoldItems[i].style.color = 'blue';
	}
}

// 4
function return_normal() {
	for (i=0; i<allBoldItems.length; i++) {
		allBoldItems[i].style.color = 'black';
	}
}

// 5
for (i=0; i<allBoldItems.length; i++) {
	allBoldItems[i].addEventListener("mouseover", highlight)
	allBoldItems[i].addEventListener("mouseout", return_normal)
}