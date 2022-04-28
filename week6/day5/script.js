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
