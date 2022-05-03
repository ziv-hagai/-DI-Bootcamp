let db = require('knex')({
   client: 'pg',
   version: '7.2',
   connection: {
     host : '127.0.0.1',
     port: 5432,
     user : 'postgres',  
     password : 'zivhag',
     database : 'dvdrental'
   }
 });

 db('country')
  .insert([{country:'New'}])
.returning('*')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })

