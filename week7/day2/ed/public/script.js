function getProducts(){
    fetch('http://localhost:5000/api/products')
    .then(res=>res.json())
    .then(data=>{
    console.log(data);
    })
    .catch(e=>{
        console.log(e);
    })
   }
getProducts()

function addProducts() {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const new_p = {
        name,
        price
    }
    fetch('http://localhost:5000/api/products',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(new_p)
    })
    .then(res => res.json())
    .then(data => {
            console.log(data);
        })
    .catch(e => {
            console.log(e);
        })
}