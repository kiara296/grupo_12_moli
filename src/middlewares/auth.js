const usersService = require("../services/usersService");
const validator = require("../services/validatorService");

const auth = (req, res, next) => {
  const userName = req.body.email;
  const pssw = req.body.pssw;
  const remember = req.body.remember;

  if (validator.isNullOrUndefined(req.session.userLogged)) {
    req.session.userLogged = usersService.auth(userName, pssw);

    if (validator.isNullOrUndefined(req.session.userLogged)) {
      res.render("login", {
        message: "* Usuario o contraseña invalidos",
        userName,
        pssw,
      });
    }

    if (remember) {
      res.cookie(
        "remember",
        {
          id: req.session.userLogged.id,
          userName: req.session.userLogged.userName,
        },
        { maxAge: 300000 }
      );
    }
  }

  next();
};

module.exports = auth;
