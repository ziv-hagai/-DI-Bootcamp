const axios = require('axios');

const getUsers = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		return response.data
	} catch(e) {
		console.log(e);
	}
}

module.exports = {
	getUsers
}