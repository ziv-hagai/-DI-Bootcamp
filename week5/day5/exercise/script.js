let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", getSomebody);

async function getSomebody () {
	let div = document.getElementsByTagName("div")[0];
	div.innerHTML = '';
	let loader = document.createElement("i");
	loader.setAttribute("class", "fa-solid fa-spinner fa-spin-pulse")
	div.appendChild(loader)

	try {
		let rn = Math.round(Math.random()*100);
		let swapi = await fetch(`https://www.swapi.tech/api/people/${rn}`);
		if (swapi.status !== 200){
			throw new Error("ERROR STATUS")
		} else {
			// let details = swapi.status !== 200 ? (function(){throw new Error ("404 ERROR")}()) : 
			let details = await swapi.json();
			let keys = Object.keys(details.result.properties);
			let values = details.result.properties;
			console.log(values);
			let worldApi = await fetch(values.homeworld);
			let world = await worldApi.json();

			let valuesArray = [values.name, values.height, values.gender, values.birth_year, world.result.properties.name];
			let keysArray = [keys[9], keys[0], keys[6], keys[5].replace("_"," "), keys[10]];
			div.innerHTML = '';

			for (let i=0; i<keysArray.length; i++) {
				let p = document.createElement("p");
				let text = document.createTextNode(`${keysArray[i]}: ${valuesArray[i]}`);
				p.appendChild(text);
				div.appendChild(p);
			}
		}
	}catch (error) {
		console.log("IN THE CATCH", error.message);
		div.innerHTML = '';
		let p2 = document.createElement("p");
		let text2 = document.createTextNode("Oh no! that person isn't available");
		p2.appendChild(text2);
		div.appendChild(p2);
	}
}









