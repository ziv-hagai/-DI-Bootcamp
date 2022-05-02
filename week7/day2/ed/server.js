const express = require ('express');
const {products} = require('./modules/data.js')
const app = express();

app.listen(5000, ()=> {
    console.log('server listens')
})

app.use('/',express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/api/products', (req, res)=> {
    const partial = products.map(products=>{
        return {name:products.name, price:products.price}
    })    
    res.json(partial);
})

app.get('/api/products/:id', (req,res)=>{
    const pid = req.params.id;
    const product = products.find(product=>product.id==pid)
    if(!product){
        return res.status(404).send('not found')
    }
    res.json(product)
})

app.get('/api/search', (req,res)=>{
    const name = req.query.name;
    const res_products = products.filter(products=>{
        return products.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    })
    if (res_products.lengh === 0){
        return res.status(200).send('no match')
    }
    res.json(res_products)
})

app.post('/api/products', (req,res)=>{
const {name,price} = req.body;
const new_product = {
    id: product.length+1,
    name: name,
    price:price
}

products.push(new_product)
res.json(products)
})