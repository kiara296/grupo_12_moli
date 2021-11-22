const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');
//const { check } = require('express-validator');

/* let validations = [
    check('pssw').notEmpty().withMessage('* Contraseña requerida'),
    check('email').notEmpty().withMessage('* Email requerido').bail(),
    check('email').isEmail().withMessage('* Email invalido'),
]; */


router.get ('/login', userController.login);

router.get ('/regmoli', userController.regmoli);

router.post('/addProduct', upload.none(), userController.addProduct);

router.post('/auth', [upload.none(), auth], userController.auth);

module.exports = router
