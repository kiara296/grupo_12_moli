const validator = require('../services/validatorService');

function validateUserInSessionMiddleware(req, res, next){
    if (userInSession(req.session.userLogged)){
        next()
    } else {
        res.send('Necesita estar logueado para acceder a este sitio')
    }
};

function userInSession (user) {
    return !validator.isNullOrUndefined(user)
};

module.exports = validateUserInSessionMiddleware ;