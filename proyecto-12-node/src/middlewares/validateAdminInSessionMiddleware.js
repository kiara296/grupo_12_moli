const validator = require('../services/validatorService');

function validateAdminInSessionMiddleware(req, res, next){
    if (req.session.userLogged.category_id == 1){
        next()
    } else {
        res.send('Necesita permiso de administrador para ingresar')
    }
};

module.exports = validateAdminInSessionMiddleware ;