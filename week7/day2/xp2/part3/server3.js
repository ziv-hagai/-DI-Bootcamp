const express = require ('express');
const app = express();

app.listen(4000, () => {
	console.log('listen to port 4000');
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',express.static(__dirname+'/public'));

// app.get("/",function (req, res) {
//     res.sendFile(__dirname + "/public/index3.html")
//   });