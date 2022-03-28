
// let planet = document.getElementsByTagName('section').createElement('div').style.background = 'yellow' 	
const planets = ["blue", "red", "orange", "green", "yellow", "lightgreen", "gray", "lightblue"]

for (let i=0; i<planets.length; i++) {

	let newPlanet = document.createElement("div");
	newPlanet.classList.add("planet");
	newPlanet.style.background = planets[i];
// newPlanet.innerHTML = "newPlanet";
document.querySelector(".listPlanets").appendChild(newPlanet); 
}
pur