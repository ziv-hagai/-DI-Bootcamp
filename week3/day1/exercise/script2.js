let names = document.getElementsByClassName("list")

names[0].children[1].innerHTML = "Richard";

for (let i=0; i<names.length; i++) {
	names[i].children[0].innerHTML = "Ziv";
}

for (let i=0; i<names.length; i++) {
	let hs = (document.createElement('li'))
	hs.innerText = 'Hey students'
	names[i].appendChild(hs);
}

document.getElementById('sarah').remove()
