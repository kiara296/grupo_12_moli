// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');

/* Carrito producto */
router.get('/carrito', productController.carrito);

/* Detalle producto */
router.get('/detail/:id', productController.detail);

/* Crear un producto */
router.get('/crear', productController.crear); 
router.post('/', productController.guardar); 

/* Editar un producto */ 
router.get('/:id/edit', productController.editar); 
router.put('/:id', productController.update);               

module.exports = router
