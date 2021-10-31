// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');

/* Carrito producto */
router.get('/carrito', productController.carrito);

/* Detalle producto */
router.get('/:id/detail', productController.detail);

/* Crear un producto */
router.get('/create', productController.create); 
router.post('/create', productController.save); 

/* Editar un producto */ 
router.get('/:id/edit', productController.edit); 
router.put('/:id', productController.update);

// catalog
router.get('/catalog', productController.catalog);

// not found
router.get('/:id/notFound', productController.notFound);

module.exports = router
