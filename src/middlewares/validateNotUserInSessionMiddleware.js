const validator = require('../services/validatorService');

function validateUserNotInSessionMiddleware(req, res, next){
    if (userNotInSession(req.session.userLogged)){
        next()
    } else {
        res.send('Esto es para usuarios no logueados')
    }
    
} 
function userNotInSession (user) {
    return validator.isNullOrUndefined(req.session.userLogged)
};

module.exports = validateNotUserInSessionMiddleware;