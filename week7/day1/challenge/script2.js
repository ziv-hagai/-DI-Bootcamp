const http = require('http');
const script = require('./script.js');

const server = http.createServer( (req,res) => {
	res.setHeader('Content-Type', 'text/plain');
	res.end(`my header is:
${script.result} 	
	hi there at the fronthand`);
})

server.listen(3001, () => {
	console.log(script.result);
})

