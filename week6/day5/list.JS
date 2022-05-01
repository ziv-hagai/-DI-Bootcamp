const added = JSON.parse(localStorage.getItem("tasks")) || [];

(function displayTasks(){
	function compare( a, b ) {

		if ( a.start < b.start ){
			return -1;
		}
		if ( a.start > b.start ){
			return 1;
		}
		return 0;
	}

	added.sort( compare );
	for (let i of added) {
		let section = document.getElementsByTagName('section')[0]

		let div = document.createElement("div");
		
		let des = document.createElement("p");
		des.textContent = i.description;
		des.style.display = 'none';
		des.addEventListener('click', function(e) {
			for (let j of added) {
				if (j.description == e.target.textContent) {
					let newDes = prompt("start date");
					if (newDes) {
						j.description = newDes;
						e.target.textContent = newDes;
						localStorage.clear();
						localStorage.setItem("tasks", JSON.stringify(added));  
					}
				}
			}
		})

		let name = document.createElement("span");
		name.textContent = i.name;
		name.addEventListener('click', function(e) {
			let newName = prompt("name");
			for (let j of added) {
				if (j.name == e.target.textContent) {
					j.name = newName;
					e.target.textContent = newName;
					localStorage.clear();
					localStorage.setItem("tasks", JSON.stringify(added));  
				}
			}
		})

		let start = document.createElement("span");
		start.textContent = i.start.slice(0,10);
		start.addEventListener('click', function(e) {
			for (let j of added) {
				if (j.start.slice(0,10) == e.target.textContent) {
					let newStart = prompt("description");
					j.start = newStart;
					e.target.textContent = newStart;
					localStorage.clear();
					localStorage.setItem("tasks", JSON.stringify(added));  
				}
			}
		})
		let x = document.createElement("span");
		x.setAttribute("class","fa-solid fa-rectangle-xmark");
		x.addEventListener('click', function(e) {
			for (let j of added) {
				if (j.name == e.target.nextSibling.nextSibling.textContent) {
					added.splice(j,1);
					console.log(added);
					e.target.parentNode.remove();
					localStorage.clear();
					localStorage.setItem("tasks", JSON.stringify(added));  
				}
			}
		})
		let check = document.createElement("input");
		check.setAttribute("type", "checkbox");
		check.checked = i.done;
		if (i.done) {
			div.style.background = 'lightgreen';
		} else {
			div.style.background = 'tomato';

		}

		check.addEventListener('click', function(e) {
			for (let k of added) {
				if (k.name == e.target.nextSibling.textContent) {
					k.done = !k.done;
					e.target.checked = k.done;
					if (k.done) {
						e.target.parentNode.style.background = 'lightgreen';
					} else {
						e.target.parentNode.style.background = 'tomato';

					}
					localStorage.clear();
					localStorage.setItem("tasks", JSON.stringify(added));  
				}
			}

		});


		let day = new Date(i.end);
		let today = new Date();
		let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		let dateTime = date+' '+time;
		let left = document.createElement("span");
		let days = Math.floor((day-today)/1000/60/60/24);
		if (days > 0) {
			left.textContent = `${days} days left`;
		} else {
			left.textContent = `0 days left`;
			if (!check.checked) {
				div.style.background = 'lightgrey';
			}
		}
		
		let show = document.createElement('button');
		show.textContent='description';
		show.addEventListener('click', function(e) {
			console.log('')
			if (e.target.parentNode.lastChild.style.display == 'block') {
				e.target.parentNode.lastChild.style.display = 'none';
			} else {
				e.target.parentNode.lastChild.style.display = 'block';
			}
		});

		show.addEventListener('click', function(e) {
			prompt;
		})
		div.appendChild(x);
		div.appendChild(check);
		div.appendChild(name);
		div.appendChild(start);
		div.appendChild(left);
		div.appendChild(show);
		div.appendChild(des);
		section.appendChild(div);
	}
})()
