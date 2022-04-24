let form = document.forms[0];
form.addEventListener("submit", convert);

(async function getCodes (){
	let codes = await fetch("https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes");
	let codeObj = await codes.json();
	let codeArr = await codeObj.supported_codes;
	for (i of codeArr) {
		let option = document.createElement("option")
		let text = document.createTextNode(i)
		option.appendChild(text)
		form[0].appendChild(option)
	}
	let clone = form[0].cloneNode(true);
	clone.setAttribute("name", "to");
	let amount = document.getElementsByTagName("label")[2];
	form.insertBefore(clone, amount);
})()

async function convert(e) {
	e.preventDefault();
	let from = await form[0].value.slice(0,3);
	let to = await form[1].value.slice(0,3);
	let count = await form[2].value;

	let convertApi = await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${from}/${to}/${count}`);
	let convertResult = await convertApi.json();
	let result = convertResult.conversion_result;
	let div = document.getElementsByTagName("div")[0];
	div.textContent=`${result} ${to}`;
}


