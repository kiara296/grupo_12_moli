const usersService = require("../services/usersService");

const cookieAuth = (req, res, next) => {
    if(req.cookies.remember == undefined && req.session.userLogged != undefined) {
        res.send("SE VENCIO LA SESION");
    }

    next();
}

module.exports = cookieAuth;