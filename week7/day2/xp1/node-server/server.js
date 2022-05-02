const http = require('http');

const server = http.createServer( (req,res) => {
	console.log('get a req from client');
    const user = {
        firstname: 'John',
        lastname: 'Doe'
        }
        
        res.end(JSON.stringify(user))
})

server.listen(8080, () => {
	console.log('listen to port 8080');
})
