
const planets = [
{name:"mercury", color:"orange", moons:0},
{name:"venus", color:"pink", moons:0},
{name:"earth", color:"lightblue", moons:1},
{name:"mars", color:"red", moons:2},
{name:"jupiter", color:"gray", moons:53},
{name:"saturn", color:"yellow", moons:53},
{name:"uranus", color:"blue", moons:27},
{name:"mercury", color:"green", moons:14}
]

function solar () {
	
	for (let i=0; i<planets.length; i++) {

		let newPlanet = document.createElement("div");
		newPlanet.classList.add("planet");
		newPlanet.style.background = planets[i].color;
		newPlanet.innerHTML = planets[i].name;
		document.querySelector(".listPlanets").appendChild(newPlanet); 

		for (let j=0; j<planets[i].moons; j++) {
			let newMoon = document.createElement("div");
			newMoon.classList.add("moon");
			document.querySelector(".listPlanets").lastElementChild.appendChild(newMoon); 
		}
	}
}

solar()
