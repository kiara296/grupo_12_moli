// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');
const upload = require('../middlewares/multer');

/* Carrito producto */
router.get('/carrito', productController.carrito);
router.delete('/:id/carrito', productController.carritoDelete);

/* Detalle producto */
router.get('/:id/detail', productController.detail);

/* Crear un producto */
router.get('/create', productController.create);
//TODO: pasar como argumento a single() el valor del atributo name del input file presente en el formulario
router.post('/create', upload.single('file-image'), productController.save); 

/* Editar un producto */ 
router.get('/:id/edit', productController.edit); 
router.put('/:id', upload.single('file-image'), productController.update);

// catalog
router.get('/catalog', productController.catalog);

// not found
router.get('/:id/notFound', productController.notFound);

//home
router.get('/', productController.index);

router.get('/search', productController.search);


module.exports = router;
