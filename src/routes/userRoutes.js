const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');
const validations = require('../middlewares/register');
const verifyPasswords = require('../middlewares/verifyPasswords');
const validateNotUserInSessionMiddleware = require('../middlewares/validateNotUserInSessionMiddleware');
const validateUserInSessionMiddleware = require('../middlewares/validateUserInSessionMiddleware');


router.get ('/login', validateNotUserInSessionMiddleware,  userController.login);

router.get ('/:id/edit', validateUserInSessionMiddleware,  userController.edit);

router.put ('/:id', [upload.single('profileImage'), validateUserInSessionMiddleware],  userController.update);

router.delete ('/:id', validateUserInSessionMiddleware,  userController.delete);

router.post('/logout', upload.none(), userController.logout);

router.get ('/regmoli', validateNotUSerInSessionMiddleware, userController.regmoli);

router.post('/register', [upload.single('profileImage'), verifyPasswords, ...validations], userController.register);

router.post('/addProduct', upload.none(), userController.addProduct);

router.post('/addTransaction', [upload.none(), validateUserInSessionMiddleware], userController.addTransaction);

router.post('/auth', [upload.none(), auth], userController.auth);

module.exports = router
