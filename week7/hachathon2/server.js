const express = require('express');
const dotenv = require('dotenv');
const knex = require('knex');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

dotenv.config();

app.listen(process.env.PORT||8080, ()=>{
  console.log(`listen on port ${process.env.PORT||8080}`);
})

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

app.use('/', express.static(__dirname+'/public'));

app.get('/records',(req,res) => {
  res.sendFile(__dirname+'/public/records.html')
})

app.get('/play',(req,res) => {
  res.sendFile(__dirname+'/public/play.html')
})

//display records
app.post('/records',(req,res) => {
return db('records')
    .select('player_name','record', 'record_date')
    .orderBy('record', 'desc')
    .limit(5)
    .returning('*')
    .then(records=>{
      res.json(records)
    })
  .catch(err => {
  console.log(err);
  res.json({message:err.message});
  })
})

//add a record
app.post('/db', (req,res) => {
  console.log(req.body);
  return db('records')
.insert(req.body)
.returning('*')
.then(data => {
  console.log(data);
  res.json(data)
})
.catch(err => {
  console.log(err);
})
})
