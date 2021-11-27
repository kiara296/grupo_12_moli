const usersService = require("../services/usersService");

const cookieAuth = (req, res, next) => {
    if(req.cookies.remember != undefined && req.session.userLogged == undefined) {
        req.session.userLogged = usersService.getById(req.cookies.id);
    }
    
    next();
}

module.exports = cookieAuth;