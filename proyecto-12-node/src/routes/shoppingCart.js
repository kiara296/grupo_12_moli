const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController');

router.post('/addProduct', shoppingCartController.addProduct);

module.exports = router;