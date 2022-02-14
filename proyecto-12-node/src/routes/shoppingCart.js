const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController');

router.post('/addProduct', shoppingCartController.addProduct);

router.get('/cart', shoppingCartController.cart);

module.exports = router;