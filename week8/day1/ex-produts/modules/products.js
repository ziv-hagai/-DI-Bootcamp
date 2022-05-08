const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
  client:'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized:false }
  }
});

const getAllProducts = () => {
  return db('products')
  .select('id','name','price')
  .orderBy('id');
}

const getProduct = (product_id) => {
  return db('products')
  .select('id','name','price','image','desc')
  .where({id:product_id})
}

const searchProduct = (name) => {
  return db('products')
  .select('id','name','price')
  .whereILike('name',`${name}%`)
  // select id,name.product from products where Lower(name) like 'ip%'
}

// {name:'iMac', price:'1500'} => req.body
const createProduct = (product) => {
  return db('products')
  .insert(product)
  .returning('*')
}

const deleteProduct = (id) => {
  return db('products')
  .del()
  .where({id:id})
  .returning('*')
}

module.exports = {
  getAllProducts,
  getProduct,
  searchProduct,
  createProduct,
  deleteProduct
}
