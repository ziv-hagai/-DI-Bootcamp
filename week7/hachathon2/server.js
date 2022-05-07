const express = require('express');
const dotenv = require('dotenv');
const knex = require('knex');
const {score} = require('./public/records.js');

dotenv.config();

const app = express();

app.listen(process.env.PORT||8080, ()=>{
  console.log(`listen on port ${process.env.PORT||8080}`);
})

app.use('/', express.static(__dirname+'/public'));

app.get('/records')

const db = knex({
    client:'pg',
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
});

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

const createRecord = (score) => {
    return db('records')
    .insert(score)
    .returning('*')
}
createRecord()

const getRecords = () => {
    return db('records')
    .select('name','record', 'date')
    .orderBy('record', 'desc') 
    .limit(5)
    .returning('*')
}
getRecords()

