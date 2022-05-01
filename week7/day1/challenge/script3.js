const http = require('http');
const main = require('./main3.js');

const server = http.createServer( (req,res) => {
	res.setHeader('Content-Type', 'text/plain');
	res.end(`today is ${main.myDate()}`); 	
})

server.listen(8081, () => {
	console.log(main.myDate());
})

