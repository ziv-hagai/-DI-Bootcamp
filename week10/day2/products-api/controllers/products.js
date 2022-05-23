const { getAllProducts, getProduct, searchProduct } = require('../modules/products.js');

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

module.exports = {
    _getAllProducts,
    _getProduct,
    _searchProduct
}
