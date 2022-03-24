function playTheGame() {
	let text = "would you like to play the guessing game?";
	
	if (confirm(text) == false) {
		alert("No problem, Goodbye");
		return;
	} 
	
	let userNumber = prompt("Pick a number between 0 to 10");

	while (!userNumber || isNaN(Number(userNumber)) || Number(userNumber) > 10 || Number(userNumber) < 0) {
		userNumber = prompt('Sorry it’s not a good number, pick another');
	}
	userNumber = Number(userNumber);

	let computerNumber = Math.floor(Math.random() * 10);
	
	test(userNumber,computerNumber);
	return;
}

function test(userNumber,computerNumber) {
	
	for (let i=0; i<2; i++) {
		if (userNumber === computerNumber){
			alert ('WINNER');
			return;
		} else if (userNumber > computerNumber) {
			userNumber = Number(prompt('Your number is bigger then the computer’s, guess again'));
		} else {
			userNumber = Number(prompt('Your number is smaller then the computer’s, guess again'));
		}
	}
	alert ("Out of chances")
	return
}
