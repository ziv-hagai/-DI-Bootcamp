const http = require('http');

const server = http.createServer( (req,res) => {
	console.log('get a req from client');
	res.end(' hello from my first server')
})

// if (req.url == '/') {
// 	res.end('home')
// } else if (req.url == '/about') {
// 	res.end('about')
// } else {
// 	res.end('page nor found')
// }

server.listen(5000, () => {
	console.log('listen to port 5000');
})