let p = document.querySelector("p");
p.style.display = 'none'

function pop () {
	p.style.display = 'block'
}

setTimeout(pop, 5000)
