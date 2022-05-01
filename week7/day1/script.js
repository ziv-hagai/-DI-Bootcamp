const users = require('./getusers.js');

users.getUsers()
.then(data => {
	console.log(data);
	const filter = data.filter(item=>{
		return item.name.toLowerCase().includes('len')
	})
	console.log(filter);

})