const express = require('express');
const router = express.Router();
const productControllerApi = require('../controllers/productControllerApi');
/* const upload = require('../middlewares/multer');
const validateProductForm = require('../middlewares/validateProductForm');

const validateUserInSessionMiddleware = require('../middlewares/validateUserInSessionMiddleware');
const validateAdminInSessionMiddleware = require('../middlewares/validateAdminInSessionMiddleware'); */

/* Detalle producto */
router.get('/:id/detail', productControllerApi.detail);

// catalog
router.get('/catalog', productControllerApi.catalog);


module.exports = router;
