const express = require ('express');
const app = express();

app.listen(1000, () => {
	console.log('listen to port 1000');
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/aboutMe/:hobby', (req, res)=> {
    const myHobby = req.params.hobby;
    if (!/^[a-zA-Z]+$/.test(myHobby)) {
        return res.status(404).send('not a hobby')
    } else {
    res.json(myHobby)
    }
});

app.get('/pic', (req, res) => {
    res.sendFile(__dirname+'/public/pic.html')
});

app.use('/form',express.static(__dirname+'/public'));

app.get('/formData', (req, res) => {
    console.log(req.query);
    res.json(`the name is ${req.query.name} and the email is ${req.query.email}`);
});
