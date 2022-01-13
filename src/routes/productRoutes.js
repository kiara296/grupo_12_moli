const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middlewares/multer');
const validateProductForm = require('../middlewares/validateProductForm');
const validateUserInSessionMiddleware = require('../middlewares/validateUserInSessionMiddleware');
const validateAdminInSessionMiddleware = require('../middlewares/validateAdminInSessionMiddleware');

/* Carrito producto */
router.get('/carrito', productController.carrito);
router.delete('/:id/carrito', productController.carritoDelete);

/* Detalle producto */
router.get('/:id/detail', productController.detail);

/* Crear un producto */
router.get('/create', productController.create);
//TODO: pasar como argumento a single() el valor del atributo name del input file presente en el formulario
router.post('/create', [upload.single('fileImage'), ...validateProductForm], productController.save); 

/* Editar un producto */ 
router.get('/:id/edit', productController.edit); 
router.put('/:id/update', [upload.single('fileImage'), ...validateProductForm], productController.update);

// catalog
router.get('/catalog', productController.catalog);

// not found
router.get('/:id/notFound', productController.notFound);

//home
router.get('/', productController.index);

router.get('/search', productController.search);

//delete product

router.delete('/:id', upload.none() ,productController.delete);

//administar

router.get('/admin', validateUserInSessionMiddleware , validateAdminInSessionMiddleware,  productController.admin )


module.exports = router;
