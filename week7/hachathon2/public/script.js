(function getOperations(){
    let checks = document.getElementsByTagName('input');
    const operations = []
    for(let i of checks){
        i.addEventListener('change', getOperations);
        if (i.checked){
            operations.push(i.id)
        }
}
localStorage.clear();
localStorage.setItem('operations', operations)
})()

document.getElementById('play').addEventListener('click', ()=>{
    if (localStorage.operations){
        const modal = document.getElementsByClassName("modal")[0];
        document.getElementsByClassName("modal")[0].style.display = "block";
    } else {
        alert('Please choose at least 1 operation')
    }
})

function modal() {
	const modal = document.getElementsByClassName("modal")[0];
	document.getElementsByClassName("modal")[0].style.display ="block";
	document.getElementsByTagName("p")[0].textContent+=currentScore;
	clearInterval(timeInt);
}

document.getElementsByClassName('play')[0].addEventListener('click', goToPlay);

function goToPlay() {
    let name = document.getElementsByClassName('input')[0].value;
    if (name) {
        localStorage.setItem('name', name)
        window.location.href='//localhost:7000/play'
        } else {
        alert('Enter Your Name')
    }
}
    