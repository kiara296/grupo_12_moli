const validator = require('../services/validatorService');

function validateNotUserInSessionMiddleware(req, res, next){
    if (userNotInSession(req.session.userLogged)){
        next()
    } else {
        res.send('Para ingresar no debes estar logeado.')
    }
    
} 
function userNotInSession (user) {
    return validator.isNullOrUndefined(user)
};

module.exports = validateNotUserInSessionMiddleware;