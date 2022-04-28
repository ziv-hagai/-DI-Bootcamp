// 5. When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor) and it will redirect him to another HTML page. This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought and the total price he needs to pay as well as a "Submit payment" Button

(function payItems(){
    let items = JSON.parse(localStorage.getItem("my cart"));
    let sum = 0

    for (let i of items) {

        let item = document.createElement("div")

        let name = document.createElement('p')
        let nameText = document.createTextNode(i.name)
        name.appendChild(nameText)

        let price = document.createElement('p')
        let priceText = document.createTextNode(i.price)
        price.appendChild(priceText)

        item.appendChild(name)
        item.appendChild(price)

        let container = document.getElementsByTagName('section')[0]
        container.appendChild(item)

        sum += Number(i.price)
    } 
    let middle = document.getElementsByTagName('section')[1]
    let p = document.createElement('p')
    let pText = document.createTextNode(`Total Prics: ${sum}`)
    middle.appendChild(pText) 
})()

// 6. When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.

let pay = document.getElementsByTagName("button")[0]
pay.addEventListener("click", submitPay)

function submitPay (e) {
    e.preventDefault();
    alert("payment was completed")
    localStorage.removeItem('my cart')
}
