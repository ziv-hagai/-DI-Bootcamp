function showAllShopProducts() {
  fetch('http://localhost:5003/api/products')
  .then(res => res.json())
  .then(data => {
    renderProducts(data);
  })
  .catch(err => {
    console.log(err);
  })
}

function searchProduct() {
  const query = document.getElementById('productname').value;
  fetch(`http://localhost:5003/api/search?q=${query}`)
    .then(res => res.json())
    .then(data => {
        renderProducts(data);
    })
    .catch(err => {
      console.log(err);
    })
}

function renderProducts (arr) {
    const root = document.getElementById('root');
    root.innerHTML = '';
    arr.forEach((item, i) => {
      const div = document.createElement('div');
      const h2 = document.createElement('h2');
      // const h4 = document.createElement('h4');
      // const a = document.createElement('a');
      h2.innerText = item.name;
      // h4.innerText = item.price;
      // a.innerText = 'Show Product'
      // a.setAttribute('href',`http://localhost:5003/product.html?p=${item.id}`);
      div.appendChild(h2);
      // div.appendChild(h4);
      // div.appendChild(a);
      root.appendChild(div);
    });

}

showAllShopProducts()
