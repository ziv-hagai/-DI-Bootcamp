const knex = require('knex');
const dotenv = require('dotenv');
const { append } = require('express/lib/response');

dotenv.config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST ,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
})

const getAllProducts = () => {
    return db('products')
    .select('id','name','price')
    .orderBy('id')
}

const getProduct = (product_id) =>{
    return db('products')
    .select('id','name','price')
    .where({id:product_id})
}


// read
const searchProduct = (name) =>{
    return db('products')
    .select('id', 'name', 'price')
    .whereILike('name',`${name}%`)
}

// create
const createProduct = (product) =>{
    return db('products')
    .insert(product)
    .returning('*')
}

//delete
const deleteProduct = (id) => {
    return db('products')
    .del()
    .where({id:id})
    .returning('*')
}

//update
const updateProduct = (id) => {
    return db('products')
        .update('name', {name})
    .where({id:id})
    .returning('*')
}

// knex
//   .select('id')
//   .from('client')
//   .where('id', id)
//   .then(([row]) => {
//     if (!row) {
//       console.log("select id do not exist")
//       return res.send("do not exist")
//     }
//     return knex('client')
//       .update('name', req.body.name)
//       .where('id', row.id)
//   });

module.exports = {
    getAllProducts,
    getProduct,
    searchProduct,
    createProduct,
    deleteProduct,
    updateProduct
}
