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
router.get('/create',  validateAdminInSessionMiddleware ,productController.create);

router.post('/create', [upload.single('fileImage'), ...validateProductForm], validateAdminInSessionMiddleware, productController.save); 

/* Editar un producto */ 
router.get('/:id/edit',  validateAdminInSessionMiddleware, productController.edit); 
router.put('/:id/update', [upload.single('fileImage'), ...validateProductForm],  validateAdminInSessionMiddleware ,productController.update);

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
