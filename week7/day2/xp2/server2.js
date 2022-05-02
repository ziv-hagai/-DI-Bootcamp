const express = require ('express');
const app = express();

app.listen(3003, () => {
	console.log('listen to port 3003');
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/:id', (req,res)=>{
    const theid = req.params.id;
    console.log({id:theid})
    res.json({id:theid});
})


