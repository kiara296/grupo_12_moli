const validator = require('../services/validatorService');

function validateGuestMiddleware(req, res, next){
    if (!validator.isNullOrUndefined(req.session.userLogged)){
        next()
    } else {
        res.send('Necesita estar logueado para acceder a este sitio')
    }
};

module.exports = validateGuestMiddleware;