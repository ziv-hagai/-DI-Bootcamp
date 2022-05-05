const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.set('view engine', 'ejs');

app.listen(process.env.PORT, ()=>{
    console.log(`listen to ${process.env.PORT}`);
})

app.get('/', (req,res)=>{
    res.render('home');
})

app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/contact', (req,res)=>{
    res.render('contact');
})

// app.use('/', express.static(__dirname+'/public'))
