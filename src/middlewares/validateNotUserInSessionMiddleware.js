const validator = require('../services/validatorService');

function validateNotUserInSessionMiddleware(req, res, next){
    if (userNotInSession(req.session.userLogged)){
        next()
    } else {
        res.send('Esto es para usuarios no logueados')
    }
    
} 
function userNotInSession (user) {
    return validator.isNullOrUndefined(user)
};

module.exports = validateNotUserInSessionMiddleware;