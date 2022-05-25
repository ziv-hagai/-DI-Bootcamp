const { getAllProducts, getProduct, searchProduct, insertProduct, deleteProduct, updateProduct } = require('../modules/products.js');

//read
const _getAllProducts = (req, res) => {
    getAllProducts()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

//read
const _getProduct = (req, res) => {
    getProduct(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

const _searchProduct = (req, res) => {
    searchProduct(req.query.q)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

//create - post
const _insertProduct = (req, res) => {
    insertProduct(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

//delete
const _deleteProduct = (req, res) => {
    deleteProduct(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}


//put
const _updateProduct = (req, res) => {
    updateProduct(req.params.id, req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ msg: err.message })
        })
}

module.exports = {
    _getAllProducts,
    _getProduct,
    _searchProduct,
    _insertProduct,
    _deleteProduct,
    _updateProduct
}
