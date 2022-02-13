const usersService = require("../services/usersService");
const validator = require("../services/validatorService");

const auth = async (req, res, next) => {
  const userName = req.body.email;
  const pssw = req.body.pssw;
  const remember = req.body.remember;

  if (validator.isNullOrUndefined(req.session.userLogged)) {
    req.session.userLogged = await usersService.auth(userName, pssw);
    
    if (validator.isNullOrUndefined(req.session.userLogged)) {
      const message = "* Usuario o contraseña invalidos";
      res.redirect(`/users/login?userName=${userName}&message=${message}`);

      // Si no ponemos este return, no se corta el flujo de ejecucion y por ende el server intenda devolver
      // dos response para un mismo request (se visualizara el error en consola: 
      // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client)
      return;
    }

    if (remember) {
      res.cookie(
        "remember",
        {
          id: req.session.userLogged.id,
          userName: req.session.userLogged.userName,
        },
        { maxAge: 100000000 }
      );
    }
  }

  next();
};

module.exports = auth;
