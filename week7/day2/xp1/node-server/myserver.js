const http = require('http');

const server = http.createServer( (req,res) => {
	console.log('get a req from client');
	res.end('<h1>first response</h1>'+'<h5>second response</h5>'+'<p>third response</p>')
})

server.listen(3000, () => {
	console.log('listen to port 3000');
})