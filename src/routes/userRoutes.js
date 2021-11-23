const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');
const validations = require('../middlewares/register');


router.get ('/login', userController.login);

router.get ('/regmoli', userController.regmoli);

router.post('/register', validations, userController.register);

router.post('/addProduct', upload.none(), userController.addProduct);

router.post('/auth', [upload.none(), auth], userController.auth);

module.exports = router
