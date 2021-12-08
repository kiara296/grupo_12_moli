const validator = require('../services/validatorService');

function validateUserInSessionMiddleware(req, res, next){
    if (validator.isNullOrUndefined(req.session.userLogged)){
        next()
    } else {
        res.send('Esto es para usuarios no logueados')
    }
} 

module.exports = validateUserInSessionMiddleware;