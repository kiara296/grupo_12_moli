const { check } = require("express-validator");

const validations = [
  check("name").notEmpty().withMessage("* Nombre requerido"),
  check("lastname").notEmpty().withMessage("* Apellido requerido"),
  check("email").notEmpty().withMessage("* Email requerido").bail(),
  check("email").isEmail().withMessage("* Email invalido"),
  check("pass").notEmpty().withMessage("* Contraseña requerida"),
  check("pass_confirm").notEmpty().withMessage("* Contraseña requerida"),
];

module.exports = validations;
