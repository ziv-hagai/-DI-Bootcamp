const express = require('express');
const router = express.Router();
const { _getAllProducts, _getProduct, _searchProduct } = require('../controllers/products.js');

router.get('/search', _searchProduct)
router.get('/', _getAllProducts)
router.get('/:id', _getProduct)

module.exports = router

