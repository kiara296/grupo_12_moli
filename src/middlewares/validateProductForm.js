const { check } = require("express-validator");

const validations = [
    check("name").trim().notEmpty().withMessage("* Nombre requerido"),
    check("price").trim().notEmpty().withMessage("* Precio requerido"),
    check("ingredients").trim().notEmpty().withMessage("* Ingredientes requeridos"),
    check("description").trim().notEmpty().withMessage("* Descripción requerida"),
    check("nutritional_info").trim().notEmpty().withMessage("* Informacion nutricional requerida"),
    check("alt").trim().notEmpty().withMessage("* Texto alternativo requerido")
];
  
  module.exports = validations;