// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const productController = require('../controllers/productController');

// ******************** Multer *********************
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/images'));
    },

    filename: (req, file, callback) => {
        callback(
          null,
          file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
      }
});

const fileUpload = multer({ storage: storage });
// *****************************************************

/* Carrito producto */
router.get('/carrito', productController.carrito);

/* Detalle producto */
router.get('/:id/detail', productController.detail);

/* Crear un producto */
router.get('/create', productController.create);
//TODO: pasar como argumento a single() el valor del atributo name del input file presente en el formulario
router.post('/create', fileUpload.single('file-image'), productController.save); 

/* Editar un producto */ 
router.get('/:id/edit', productController.edit); 
router.put('/:id', productController.update);

// catalog
router.get('/catalog', productController.catalog);

// not found
router.get('/:id/notFound', productController.notFound);

//home
router.get('/', productController.index);


module.exports = router
