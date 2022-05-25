const express = require('express');
const router = express.Router();
const { _getAllUsers } = require('../controllers/users');

router.get('/all', _getAllUsers)

module.exports = router

