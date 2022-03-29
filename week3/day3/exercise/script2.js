let boxToDrag = document.getElementById("item");

boxToDrag.addEventListener("dragstart", startDraggingTheItem);

function startDraggingTheItem (event) {
	console.log(event);
	boxToDrag.classList.replace("draggedItem","startDragging");
	event.dataTransfer.setData("text/plain", event.target.id);
}

let dropZone = document.getElementsByClassName("zone")[0];

function addEventToDropZone (){
	dropZone.addEventListener("dragover", draggingOverDropZone);
	dropZone.addEventListener("drop", droppingOnDropZone)
}

addEventToDropZone ()

function draggingOverDropZone (event) {
	event.preventDefault();
	event.target.classList.replace("zone", "dragover");
}

function droppingOnDropZone (event){
	event.preventDefault();
	
	let idOfbox = event.dataTransfer.getData("text/plain");
	let divToDrop = document.getElementById(idOfbox);
	event.target.appendChild(divToDrop);
}