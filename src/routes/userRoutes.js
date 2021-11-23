const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');
const { check } = require('express-validator');

let validations = [
    check('name').notEmpty().withMessage('* Nombre requerido'),
    check('lastname').notEmpty().withMessage('* Apellido requerido'),
    check('email').notEmpty().withMessage('* Email requerido').bail(),
    check('email').isEmail().withMessage('* Email invalido'),
    check('pass').notEmpty().withMessage('* Contraseña requerida'),
    check('pass_confirm').notEmpty().withMessage('* Contraseña requerida')
];


router.get ('/login', userController.login);

router.get ('/regmoli', userController.regmoli);

router.post('/register', upload.none(), userController.register);

router.post('/addProduct', upload.none(), userController.addProduct);

router.post('/auth', [upload.none(), auth], userController.auth);

module.exports = router
