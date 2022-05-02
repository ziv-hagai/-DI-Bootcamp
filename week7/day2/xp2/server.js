const express = require ('express');
const app = express();

app.listen(3002, () => {
	console.log('listen to port 3002');
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    const user = {
        firstname: 'Johnny',
        lastname: 'Doe'
    }
    res.json(user);
})

// app.use('/',express.static(__dirname+'/public'));
