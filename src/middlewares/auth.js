const users = require('../data/usuariosDatos.json');
const usersService = require('../services/usersService');
const validator = require('../services/validatorService');

const auth = (req, res, next) => {
    const userName = req.body.email;
    const pssw = req.body.pssw;

    usersService.auth(userName, pssw);

    if(validator.isNullOrUndefined(usersService.userLogged)) {
        res.render('login', { message: '* Usuario o contraseña invalidos', userName, pssw });
    } else {
        next();
    }
}

module.exports = auth;