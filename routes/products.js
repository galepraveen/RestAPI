const express = require('express');
const router = express.Router();
const {Products, ProductsTesting} = require('../controllers/products');

router.route('/products').get(Products);
router.route('/products_testing').get(ProductsTesting);

module.exports = router;