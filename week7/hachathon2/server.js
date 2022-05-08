const express = require('express');
const dotenv = require('dotenv');
const knex = require('knex');
// const createApplication = require('express/lib/express');
const app = express();
app.use(express.urlencoded({extended:true}));

// app.use(express.json());



dotenv.config();
// const record = require('./public/records.js');
// console.log(record.topFive);

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
      console.log(records)
      res.json(records)
    })
  .catch(err => {
  console.log(err);
  res.json({message:err.message});
  })
})

 //example
const score = {player_name: 'z', record: '100', record_date: '2022-05-08'}

//add a record
app.post('/db', (req,res) => {
  return db('records')
.insert(json(score))
.returning('*')
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})
})


// app.get('/records',(req,res) => {
//   res.sendFile(__dirname+'/public/records.html')
// })

// app.get('/records',(req,res) => {
//   // for example get the recorde from db
//   const records = [
//     {name:'aaa', score:67},
//     {name:'bbb', score:50},
//     {name:'ccc', score:89},
//   ]
//   console.log(records);
//   res.json({redords:records})
//   console.log({redords:records});

// })
