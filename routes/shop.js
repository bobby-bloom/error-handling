const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const route = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;