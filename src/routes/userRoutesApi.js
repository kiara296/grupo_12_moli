const express = require('express');
const router = express.Router();
const userControllerApi = require('../controllers/userControllerApi');
/* const upload = require('../middlewares/multer');
const validateProductForm = require('../middlewares/validateProductForm');
const validateUserInSessionMiddleware = require('../middlewares/validateUserInSessionMiddleware');
const validateAdminInSessionMiddleware = require('../middlewares/validateAdminInSessionMiddleware'); */

/* Detalle usuario */
router.get('/:id/detail', userControllerApi.detail);

// Listado de usuarios
router.get('/allUsers', userControllerApi.users);


module.exports = router;