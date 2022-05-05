function add() {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    console.log(name, price);
    fetch('http://localhost:5002/api/product', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({name,price})
    })
    .then(res => res.json())
    .then(product=>{
        console.log(product);
    })
    .catch(err=>{
        console.log(err);
    })
}

function deletep() {
    const id = document.getElementById('id').value;
    fetch(`http://localhost:5002/api/product/${id}`, {
        method: 'DELETE'
})
.then(res => res.json())
    .then(product=>{
        console.log(product);
    })
    .catch(err=>{
        console.log(err)
})
}

function updatep() {
    const name = document.getElementById('namep').value;
    const price = document.getElementById('pricep').value;
    const id = document.getElementById('idp').value;
    fetch(`http://localhost:5002/api/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({name,price})
    })
.then(res => res.json())
    .then(product=>{
        console.log(product);
    })
    .catch(err=>{
        console.log(err)
})
}