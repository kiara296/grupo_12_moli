const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/multer');

router.get ('/login', userController.login);

router.get ('/regmoli', userController.regmoli);

router.post('/addProduct', upload.none(), userController.addProduct);

router.post('/auth', upload.none(), userController.auth);

module.exports = router
