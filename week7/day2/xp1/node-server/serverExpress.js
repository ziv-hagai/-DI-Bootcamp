const express = require ('express');
const app = express();

app.listen(3000, () => {
	console.log('listen to port 3000');
})
app.get('/', (req, res) => res.send('<p>p</p>'))