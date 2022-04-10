const formElement = document.querySelector('form');
formElement.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const value = Object.fromEntries(data.entries());
	const toJson = JSON.stringify(value,null,2);
	console.log(toJson)

}
