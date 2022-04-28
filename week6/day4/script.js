let products = [
{
    id: 0,
    name: "Deluxe Bicycle",
    url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
    price: 499.98
},
{
    id: 1,
    name: "Super Deluxe bagpack",
    url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
    price: 134.99
},
{
    id: 2,
    name: "Super Duper Scooter",
    url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
    price: 1090.95
},
{
    id: 3,
    name: "Smartphone",
    url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
    price: 399.99
}
];

// 3. Using a self invoking function, and using the DOM - add the products to the page and make them clickable.

(function createPage(){
    for (let i of products) {
        let item = document.createElement("div")
        
        let name = document.createElement('p')
        let nameText = document.createTextNode(i.name)
        name.appendChild(nameText)
        
        let image = document.createElement("img")
        image.setAttribute("src", i.url)
        
        let price = document.createElement('p')
        let priceText = document.createTextNode(i.price)
        price.appendChild(priceText)
        
        let add = document.createElement('button')
        add.textContent = 'Add to Cart'
        add.addEventListener('click',addToCart)
        
        item.appendChild(name)
        item.appendChild(image)
        item.appendChild(price)
        item.appendChild(add)

        let container = document.getElementsByTagName('section')[0]
        container.appendChild(item)
    }
})()

// 4. The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage. Each item is an object containing the name of the product and the price.

const cart = JSON.parse(localStorage.getItem("my cart")) || []

function addToCart (e) {
    e.preventDefault();
    let item = e.target.parentNode.firstElementChild.textContent
    for (i of products) {
        if (i.name === item) {
            cart.push({name:i.name,price:i.price})
            localStorage.setItem("my cart", JSON.stringify(cart))   
        }
    }
}

