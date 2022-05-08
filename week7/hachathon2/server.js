const express = require('express');
const dotenv = require('dotenv');
const knex = require('knex');
const createApplication = require('express/lib/express');

const record = require('./public/records.js');
console.log(record.topFive);

dotenv.config();

const app = express();
app.use(express.json());

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

// app.get('/records',(req,res) => {
//   // for example get the recorde from db
//   const records = [
//     {name:'aaa', score:67},
//     {name:'bbb', score:50},
//     {name:'ccc', score:89},
//   ]
//   res.json({redords:records})
// })

app.get('/records',(req,res) => {
  return db('records')
    .select('name','record', 'date')
    .orderBy('record', 'desc')
    .limit(5)
    .returning('*')
    // res.json({redords:records})
    // console.log(res)

  .catch(err => {
  console.log(err);
  res.json({message:err.message});
  })
})
 
const score = {player_name: 'a', record: '10', record_date: '2022-05-07'}

app.post('/records', (req,res) => {
  return db('records')
.insert(score)
.returning('*')
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})
})