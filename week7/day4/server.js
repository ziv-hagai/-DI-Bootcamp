const express = require('express');
const dotenv = require('dotenv');
const {getAllProducts, getProduct, searchProduct, createProduct, deleteProduct, updateProduct} = require('./modules/products.js');
const req = require('express/lib/request');

const app = express();
dotenv.config();

app.listen(process.env.PORT, ()=>{
    console.log(`listen to port ${process.env.PORT}`)
})

// read

app.get('/api/products', (req,res)=>{
    getAllProducts()
    .then(products=>{
        res.json(products)
    })
    .catch(err=>{
        console.log(err);
        res.json({message:err.message})
    })
})

app.get('/api/products/:id', (req,res)=>{
    getProduct(req.params.id)
    .then(product=>{
        res.json(product)
    })
    .catch(err=>{
        console.log(err);
        res.json({message:err.message})
    })
})

app.get('/api/search/', (req,res)=>{
    searchProduct(req.query.q)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        res.json({message:err.message})
    })
})

app.use('/', express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/api/product', (req,res)=>{
    createProduct(req.body)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        res.json({message:err.message})
    })
    
})

app.delete('/api/product/:id',(req,res)=>{
    deleteProduct(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        res.json({message:err.message})
    })
})
// update 

app.put('/api/cproduct/:id',(req,res)=>{
    console.log(req.body);
    changeProduct(req.params.id, req.body.cname, req.body.cprice)
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json({message:err.message});
    })
})

// update
// app.put
// id => req.params
// name, price => req.body