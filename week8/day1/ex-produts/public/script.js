function add(){
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  fetch('http://localhost:5003/api/product',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify({name,price})
  })
  .then(res => res.json())
  .then(product=>{
    console.log(product);
    alert('doin great')
  })
  .catch(err=>{
    console.log(err);
  })
}
function deletep() {
  const id = document.getElementById('id').value;
  fetch(`http://localhost:5003/api/product/${id}`,{
    method:'DELETE'
  })
  .then(res => res.json())
  .then(product=>{
    console.log(product);
    alert('delete ')
  })
  .catch(err=>{
    console.log(err);
  })
}
