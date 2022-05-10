let fname = document.getElementById('fname').value;
let lname = document.getElementById('lname').value;
let email = document.getElementById('email').value;
let username = document.getElementById('username').value;
let button = document.getElementById('button');
button.removeAttribute('disabled'); 
console.log(fname);

if (fname && lname && email && username){
button.removeAttribute('disabled'); 
}

function register() {
    console.log(fname, lname, email, username);
    fetch('http://localhost:5002/register', {
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

// function deletep() {
//     const id = document.getElementById('id').value;
//     fetch(`http://localhost:5002/api/product/${id}`, {
//         method: 'DELETE'
// })
// .then(res => res.json())
//     .then(product=>{
//         console.log(product);
//     })
//     .catch(err=>{
//         console.log(err)
// })
// }

// function updatep() {
//     const name = document.getElementById('namep').value;
//     const price = document.getElementById('pricep').value;
//     const id = document.getElementById('idp').value;
//     fetch(`http://localhost:5002/api/product/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body:JSON.stringify({name,price})
//     })
// .then(res => res.json())
//     .then(product=>{
//         console.log(product);
//     })
//     .catch(err=>{
//         console.log(err)
// })
// }