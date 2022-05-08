const express = require('express');
const dotenv = require('dotenv');
const { getAllProducts,
        getProduct,
        searchProduct,
        createProduct,
        deleteProduct} = require('./modules/products.js');

const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`listen on port ${process.env.PORT}`);
})

app.use('/', express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/shop',(req,res) => {
  // get the password -> incorcort
  // if password correct
  // send the user to homepage
  // else send to register file
  res.sendFile(__dirname+'/public/shop.html')
})

//CRUD - Create, Read, Update, Delete

//READ all products
app.get('/api/products',(req,res)=>{
  getAllProducts()
  .then(products=>{
    res.json(products);
  })
  .catch(err => {
    console.log(err);
    res.json({message:err.message})
  })
});

//READ get one product
app.get('/api/products/:id',(req,res) => {
  getProduct(req.params.id)
  .then(product=>{
    res.json(product);
  })
  .catch(err => {
    console.log(err);
    res.json({message:err.message})
  })
});

//READ search product by name
app.get('/api/search', (req,res) => {
  searchProduct(req.query.q)
  .then(data=>{
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.json({message:err.message})
  })
})

//CREATE insert/create a new product
app.post('/api/product',(req,res) => {
  createProduct(req.body)
  .then(data=>{
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.json({message:err.message})
  })
})

// DELETE a prodauct
app.delete('/api/product/:id',(req,res)=>{
  deleteProduct(req.params.id)
  .then(data=>{
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.json({message:err.message})
  })
});

// app.put
// id => req.params
// name, price => req.body
